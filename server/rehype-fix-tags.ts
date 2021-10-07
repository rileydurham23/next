// Temporarily fixes https://github.com/mdx-js/mdx/issues/1451

import { Node } from "unist";
import visit from "unist-util-visit";
import { Transformer } from "unified";

export default function rehypeFixTags(): Transformer {
  return (tree) => {
    visit(tree, "mdxJsxFlowElement", (node: MdxJsxFlowElement) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === "element" &&
        node.children[0].tagName === "p"
      ) {
        node.children = node.children[0].children as Node[];
        return visit.SKIP;
      }
    });
  };
}
