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
  callback: (results: HeaderMeta[]) => void;
}

export default function rehypeHeaders({
  maxLevel,
  callback,
}: RehypeHeadersOptions): Transformer {
  const headerMeta: HeaderMeta[] = [];

  return (root: Root) => {
    visit<Element>(root, "element", function (node) {
      if (rank(node) && rank(node) <= maxLevel) {
        headerMeta.push({
          rank: rank(node),
          id: node.properties.id as string,
          title: toString(node),
        });
      }
    });

    callback(headerMeta);
  };
}
