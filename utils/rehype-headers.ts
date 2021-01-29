/* eslint-disable @typescript-eslint/ban-ts-comment */

import { VFile } from "vfile";
import { Transformer } from "unified";
import { Element, Root } from "hast";
import visit from "unist-util-visit";

import rank from "hast-util-heading-rank";
import toString from "hast-util-to-string";

export interface HeaderMeta {
  rank: number;
  id: string;
  title: string;
}

interface RehypeHeadersOptions {
  maxLevel: number;
}

export default function rehypeHeaders({
  maxLevel,
}: RehypeHeadersOptions): Transformer {
  return (root: Root, vfile: VFile) => {
    const firstChild = root.children && root.children[0];

    if (rank(firstChild) === 1) {
      // @ts-ignore
      vfile.data.h1 = toString(firstChild);
      root.children.splice(0, 1);
    }

    // @ts-ignore
    vfile.data.headers = [];

    visit<Element>(root, "element", function (node) {
      if (rank(node) && rank(node) <= maxLevel) {
        // @ts-ignore
        vfile.data.headers.push({
          rank: rank(node),
          id: node.properties.id as string,
          title: toString(node),
        });
      }
    });
  };
}
