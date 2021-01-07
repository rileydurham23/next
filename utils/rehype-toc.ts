import h from "hastscript";
import { Element, Root } from "hast";
import { Transformer } from "unified";
import visit from "unist-util-visit";

import rank from "hast-util-heading-rank";
import toString from "hast-util-to-string";

import { RehypeNode } from "utils/unist-types";

export interface HeaderMeta {
  rank: number;
  id: string;
  title: string;
}

const isTOCMarkerNode = (node: RehypeNode): boolean =>
  node.type === "element" &&
  node.tagName === "p" &&
  node.children.length &&
  node.children[0].type === "text" &&
  node.children[0].value === "[TOC]";

const createTOCNode = (headers: HeaderMeta[]): Element | undefined => {
  if (!headers.length) return;

  const baseRank = headers[0].rank;
  const root = h("ul");

  let currentHeaderNode: Element;
  let children: HeaderMeta[] = [];

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    const next = headers[i + 1];

    if (header.rank <= baseRank) {
      currentHeaderNode = h(
        "li",
        h("a", { href: `#${header.id}` }, header.title)
      );

      root.children.push(currentHeaderNode);
    } else {
      children.push(header);
    }

    if (children.length && (!next || next.rank <= baseRank)) {
      currentHeaderNode.children.push(createTOCNode(children));

      children = [];
    }
  }

  return root;
};

export default function rehypeTOC(): Transformer {
  return (root: Root) => {
    const headers: HeaderMeta[] = [];

    visit<Element>(root, "element", (node) => {
      if (rank(node)) {
        headers.push({
          rank: rank(node),
          id: node.properties.id as string,
          title: toString(node),
        });
      }
    });

    visit<Element>(root, [isTOCMarkerNode], (_, index, parent) => {
      const TOC = createTOCNode(headers);
      if (TOC) {
        parent.children[index] = TOC;
      }
    });
  };
}
