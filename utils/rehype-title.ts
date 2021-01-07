import { Root } from "hast";
import { Transformer } from "unified";

import rank from "hast-util-heading-rank";
import toString from "hast-util-to-string";

export interface RehypeTitleOptions {
  callback?: (title: string) => void;
}

export default ({ callback }: RehypeTitleOptions): Transformer => {
  return (root: Root) => {
    const firstChild = root.children && root.children[0];

    if (callback && rank(firstChild) === 1) {
      callback(toString(firstChild));
      root.children.splice(0, 1);
    }
  };
};
