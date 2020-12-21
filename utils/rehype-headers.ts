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

interface RehypeHeadersOptions {
  callback: (results: HeaderMeta[]) => void;
}

export default ({ callback }: RehypeHeadersOptions): Transformer => {
  const headerMeta: HeaderMeta[] = [];

  return (root: RehypeNode) => {
    visit<RehypeNode>(root, "element", function (node) {
      if (rank(node)) {
        headerMeta.push({
          rank: rank(node),
          id: node.properties.id,
          title: toString(node),
        });
      }
    });

    callback(headerMeta);
  };
};
