// Temporarily fixes https://github.com/mdx-js/mdx/issues/1451

import { Node } from "unist";
import visit from "unist-util-visit";
import { Transformer } from "unified";

//what can be included in the <p>
const INCLUDING_TAGS = [
  "b",
  "a",
  "link",
  "address",
  "strong",
  "button",
  "em",
  "bdi",
  "bdo",
  "blockquote",
  "cite",
  "code",
  "del",
  "dfn",
  "i",
  "ins",
  "kbd",
  "mark",
  "pre",
  "q",
  "ruby",
  "rb",
  "rt",
  "rtc",
  "rp",
  "s",
  "small",
  "span",
  "sub",
  "sup",
  "time",
  "u",
];

const isException = (tag) => !INCLUDING_TAGS.includes(tag);

const removeTag = (children: Node[]): Node[] => {
  const newChildren: Node[] = [];
  for (const inner of children) {
    const innerChildren = inner.children as Node[];
    if (
      inner.type === "element" &&
      inner.tagName === "p" &&
      innerChildren.length > 0 &&
      (innerChildren[0].type === "mdxJsxFlowElement" ||
        (innerChildren[0].type === "mdxJsxTextElement" &&
          isException(innerChildren[0].name)))
    ) {
      newChildren.push(...removeTag(innerChildren));
    } else {
      newChildren.push(inner);
    }
  }
  return newChildren;
};

export default function rehypeFixTags(): Transformer {
  return (tree) => {
    visit(tree, "mdxJsxFlowElement", (node: MdxJsxFlowElement) => {
      node.children = removeTag(node.children);
    });
  };
}
