import { Transformer } from "unified";
import { Root } from "hast";
import yaml from "js-yaml";
import stringifyObject from "stringify-object";
import { MdxastNode } from "utils/unist-types";

export interface HeaderMeta {
  rank: number;
  id: string;
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addExportNode = ({ children }: MdxastNode, meta: any, name: string) => {
  const lastImportIndex = children
    .map(({ type }) => type)
    .lastIndexOf("import");

  const targetIndex = lastImportIndex !== -1 ? 0 : lastImportIndex + 1;

  children.splice(targetIndex, 0, {
    default: false,
    type: "export",
    value: `export const ${name} = ${stringifyObject(meta)};`,
  });
};

const defaultOptions = {
  name: "meta",
};

interface RemarkImportFrontmatterOptions {
  name: string;
}

export default function remarkImportFrontmatter({
  name,
}: RemarkImportFrontmatterOptions = defaultOptions): Transformer {
  return (root: MdxastNode) => {
    const firstChild = root.children[0];
    let config = {};

    if (firstChild && firstChild.type === "yaml") {
      config = yaml.load(firstChild.value);
    }

    addExportNode(root, config, name);
  };
}
