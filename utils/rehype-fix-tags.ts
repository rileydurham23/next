// Temporarily fixes https://github.com/mdx-js/mdx/issues/1451

import visit from "unist-util-visit";
import { MdxastNode } from "./unist-types";
import { Transformer } from "unified";

export default function rehypeFixTags(): Transformer {
  return (tree: MdxastNode) => {
    visit<MdxastNode>(tree, "mdxJsxFlowElement", (node) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === "element" &&
        node.children[0].tagName === "p"
      ) {
        node.children = node.children[0].children;
        return visit.SKIP;
      }
    });
  };
}
