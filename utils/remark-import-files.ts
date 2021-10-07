import {
  ExportNamedDeclaration,
  VariableDeclaration,
  ObjectExpression,
  Property,
} from "estree-jsx";
import { existsSync, readFileSync } from "fs";
import probe from "probe-image-size";
import { resolve, dirname } from "path";
import { Image, Link } from "mdast";
import { Transformer } from "unified";
import visit from "unist-util-visit";
import { VFile } from "vfile";
import {
  MdxastRootNode,
  MdxastNode,
  MdxJsxAttribute,
  MdxJsxFlowElement,
  ProgramEsmNode,
} from "./unist-types";
import { isLocalAssetFile } from "./url";

export interface RemarkImportFilesOptions {
  resolve?: boolean;
}

const relativePathPattern = /\.\.?\//;

const urlish = ["src", "href", "poster"];
const urlishMap: Record<string, 1> = urlish.reduce((acc, attr) => {
  acc[attr] = 1;
  return acc;
}, {});

const getAttr = (nodeAttributes: MdxJsxAttribute[], attrName: string) => {
  const localPath = nodeAttributes.find((attr) => attr.name === attrName);

  return (localPath?.value as string) ?? "";
};

const hasAttr = (nodeAttributes: MdxJsxAttribute[] = [], attrName: string) => {
  return nodeAttributes.some((attr) => attr.name === attrName);
};

const isLink = (node: MdxastNode): boolean => {
  const attrs = node.attributes as MdxJsxAttribute[];
  if (
    hasAttr(attrs, "download") &&
    (node.name === "a" || node.name === "Link")
  ) {
    return isLocalAssetFile(getAttr(attrs, "href"));
  }
  return false;
};

const isMDXLink = (node): boolean => {
  if (node.type === "link" && isLocalAssetFile(node.url)) {
    return true;
  }
  return false;
};

const isImage = (node): boolean => node.type === "image";

const findUrlish = (attrs: MdxJsxAttribute[] = []): string | null => {
  const attr = attrs.find((attr) => urlishMap[attr.name as string]);
  return (attr?.name as string) ?? null;
};

const isOk = (node: MdxJsxFlowElement) => {
  return (
    !!findUrlish(node.attributes) ||
    isImage(node) ||
    isLink(node) ||
    isMDXLink(node)
  );
};

const validateSrc = (src) => {
  const srcType = typeof src;

  return (
    src &&
    srcType === "string" &&
    src[0] !== "#" &&
    src[0] !== "/" &&
    isLocalAssetFile(src)
  );
};

const createImport = (
  imports: MdxastNode[],
  imported: Map<string, string>,
  url: string,
  _name: string
) => {
  if (_name) {
    return _name;
  }

  const name = `__${imported.size}_${url.replace(/\W/g, "_")}__`;

  imports.push({
    type: "mdxjsEsm",
    value: `import ${name} from \"${url}\";`,
    data: {
      estree: {
        type: "Program",
        sourceType: "module",
        body: [
          {
            type: "ImportDeclaration",
            source: {
              type: "Literal",
              value: url,
              raw: JSON.stringify(url),
            },
            specifiers: [
              {
                type: "ImportDefaultSpecifier",
                local: { type: "Identifier", name },
              },
            ],
          },
        ],
      },
    },
  });

  imported.set(url, name);
  return name;
};

const createImage = (
  url: string,
  alt = "",
  title?: string
): MdxJsxFlowElement => {
  const img: MdxJsxFlowElement = {
    type: "mdxJsxFlowElement",
    name: "img",
    children: [],
    attributes: [
      { type: "mdxJsxAttribute", name: "alt", value: alt },
      { type: "mdxJsxAttribute", name: "src", value: url },
    ],
  };

  if (title) {
    img.attributes.push({
      type: "mdxJsxAttribute",
      name: "title",
      value: title,
    });
  }

  return img;
};

const createLink = (url: string, text: string): MdxJsxFlowElement => {
  const link: MdxJsxFlowElement = {
    type: "mdxJsxFlowElement",
    name: "a",
    attributes: [{ type: "mdxJsxAttribute", name: "href", value: url }],
    children: [
      {
        type: "text",
        value: text,
      },
    ],
  };
  return link;
};

const createAssignment = (
  attrName: string,
  value: string,
  literal?: boolean
): MdxJsxAttribute => ({
  type: "mdxJsxAttribute",
  name: attrName,
  value: {
    type: "mdxJsxAttributeValueExpression",
    value: value,
    data: {
      estree: {
        type: "Program",
        sourceType: "module",
        comments: [],
        body: [
          {
            type: "ExpressionStatement",
            expression: literal
              ? { type: "Literal", raw: value, value }
              : {
                  type: "Identifier",
                  name: value,
                },
          },
        ],
      },
    },
  },
});

const passVariable = (
  node: MdxJsxFlowElement,
  attrName: string,
  value: string
) => {
  const newImportAttr = { ...node };
  newImportAttr.attributes = newImportAttr.attributes.map((elem) => {
    if (elem.name === attrName) {
      return createAssignment(attrName, value);
    }
    return elem;
  });
  return newImportAttr;
};

const relatify = (link, resolve) => {
  if (!relativePathPattern.test(link) && resolve) {
    return `./${link}`;
  }
  return link;
};

const jsxify = (node: MdxJsxFlowElement | Image | Link): MdxJsxFlowElement => {
  if (node.type === "image") {
    const { url, alt = null, title } = node;
    return createImage(url, alt, title);
  }
  if (node.type === "link") {
    const text = node.children.find((elem) => elem.type === "text");
    // TODO: handle if value is not a string
    return createLink(node.url, (text?.value as string) ?? "");
  }
  return node;
};

const imgSizeRegExp = /@([0-9.]+)x/; // E.g. image@2x.png

const getScaleRatio = (src: string) => {
  if (imgSizeRegExp.test(src)) {
    const match = src.match(imgSizeRegExp);

    return parseFloat(match[1]);
  } else {
    return 1;
  }
};

interface Dims {
  w: string;
  h: string;
}

const getDims = (source: string, path: string): null | Dims => {
  const src = resolve(dirname(source), path);

  if (existsSync(src)) {
    const file = readFileSync(src);

    try {
      const { width, height } = probe.sync(file);
      const scaleRatio = getScaleRatio(src);
      return { w: String(width / scaleRatio), h: String(height / scaleRatio) };
    } catch (e) {
      console.error(`Error while processing file ${path} at ${source}`);
      return { w: "0", h: "0" };
    }
  }
};

const createLiteralProp = (key, value): Property => ({
  type: "Property",
  kind: "init",
  method: false,
  shorthand: false,
  computed: false,
  key: {
    type: "Identifier",
    name: key,
  },
  value: {
    type: "Literal",
    raw: value,
    value,
  },
});

const createIdentifierProp = (key, value): Property => ({
  type: "Property",
  kind: "init",
  method: false,
  shorthand: false,
  computed: false,
  key: {
    type: "Identifier",
    name: key,
  },
  value: { type: "Identifier", name: value },
});

export default function remarkImportFiles(
  { resolve }: RemarkImportFilesOptions = { resolve: true }
): Transformer {
  return (root: MdxastRootNode, vfile: VFile) => {
    const imports: MdxastNode[] = [];
    const imported = new Map<string, string>();
    visit(
      root,
      [
        (node) =>
          node.type === "mdxjsEsm" && /export const meta = /.test(node.value),
      ],
      (node: ProgramEsmNode) => {
        const stat = node.data?.estree?.body?.[0] as ExportNamedDeclaration;
        const declar = stat.declaration as VariableDeclaration;
        const properties = declar.declarations[0].init as ObjectExpression;
        const prop = properties.properties?.find(
          (elem: Property) =>
            elem.key.type === "Identifier" && elem.key.name === "$images"
        ) as Property;

        if (!prop || prop.value.type !== "ObjectExpression") {
          return;
        }

        for (const property of prop.value.properties) {
          if (
            property.type !== "Property" ||
            property.value.type !== "Literal"
          ) {
            return;
          }
          let src = property.value.value as string;
          if (!validateSrc(src)) {
            continue;
          }
          src = relatify(src, resolve);
          const name = createImport(imports, imported, src, imported.get(src));
          const dims = getDims(vfile.path, src);

          property.value = {
            type: "ObjectExpression",
            properties: [
              createIdentifierProp("src", name),
              createLiteralProp("width", dims.w),
              createLiteralProp("height", dims.h),
            ],
          };
        }
      }
    );

    visit<MdxJsxFlowElement>(root, [isOk], (_node, index, parent) => {
      const node = jsxify(_node);
      const attrs = node.attributes as MdxJsxAttribute[];
      const attrName = findUrlish(attrs);
      if (!attrName) {
        return;
      }
      let src = getAttr(attrs, attrName);
      if (!validateSrc(src)) {
        return;
      }
      src = relatify(src, resolve);

      const name = createImport(imports, imported, src, imported.get(src));
      const newNode = passVariable(node, attrName, name);

      if (node.name === "img") {
        const dims = getDims(vfile.path, src);
        newNode.attributes.push(createAssignment("width", dims.w, true));
        newNode.attributes.push(createAssignment("height", dims.h, true));
      }

      parent.children.splice(index, 1, newNode);
    });

    root.children.unshift(...imports);
  };
}
