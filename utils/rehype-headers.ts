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
  callback: (results: HeaderMeta[]) => void;
}

export default function rehypeHeaders({
  callback,
}: RehypeHeadersOptions): Transformer {
  const headerMeta: HeaderMeta[] = [];

  return (root: Root) => {
    visit<Element>(root, "element", function (node) {
      if (rank(node)) {
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
