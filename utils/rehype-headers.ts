/* inspired by docusaurus-mdx-loader */

import { Transformer } from "unified";
import { Element, Root } from "hast";
import visit from "unist-util-visit";
import rank from "hast-util-heading-rank";
import toString from "hast-util-to-string";
import stringifyObject from "stringify-object";
import { MdxhastRootNode } from "./unist-types";

export interface HeaderMeta {
  rank: number;
  id: string;
  title: string;
}

const addExportNode = (
  { children }: MdxhastRootNode,
  headers: HeaderMeta[],
  name: string
) => {
  const lastImportIndex = children
    .map(({ type }) => type)
    .lastIndexOf("import");

  const targetIndex = lastImportIndex !== -1 ? 0 : lastImportIndex + 1;

  children.splice(targetIndex, 0, {
    default: false,
    type: "export",
    value: `export const ${name} = ${stringifyObject(headers)};`,
  });
};

interface RehypeHeadersOptions {
  name?: string;
  maxLevel: number;
}

export default function rehypeHeaders({
  name = "tableOfConents",
  maxLevel,
}: RehypeHeadersOptions): Transformer {
  return (root: Root) => {
    const headers: HeaderMeta[] = [];

    visit<Element>(root, "element", function (node) {
      if (rank(node) && rank(node) <= maxLevel) {
        headers.push({
          rank: rank(node),
          id: node.properties?.id as string,
          title: toString(node),
        });
      }
    });

    addExportNode(root, headers, name);
  };
}
