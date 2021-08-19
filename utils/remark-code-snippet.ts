import { Transformer } from "unified";
import visit from "unist-util-visit";
import { MdxastRootNode, MdxastNode } from "./unist-types";

const nodeIsCode = (node: MdxastNode) =>
  node.type === "code" && node.lang === "code";

export default function remarkCodeSnippet(): Transformer {
  return (root: MdxastRootNode) => {
    visit<MdxastNode>(root, [nodeIsCode], (node) => {
      const content: string = node.value as string;
      const codeLines = content.split("\n");
      const children = [];

      for (let i = 0; i < codeLines.length; i++) {
        const hasDollar = codeLines[i][0] === "$";

        if (hasDollar) {
          const trimmedValue = codeLines[i].slice(1).trim();

          children.push({
            type: "mdxJsxFlowElement",
            name: "Command",
            attributes: [],
            children: [
              {
                type: "mdxJsxTextElement",
                name: "span",
                attributes: [],
                children: [
                  {
                    type: "text",
                    value: trimmedValue,
                  },
                ],
              },
            ],
          });

          const commandArrayElem = children[children.length - 1].children;
          let hasSlash = codeLines[i][codeLines[i].length - 1] === "\\";

          while (hasSlash) {
            commandArrayElem.push({
              type: "mdxJsxTextElement",
              name: "span",
              attributes: [],
              children: [
                {
                  type: "text",
                  value: codeLines[i + 1],
                },
              ],
            });

            i++;
            hasSlash = codeLines[i][codeLines[i].length - 1] === "\\";
          }
        } else {
          children.push({
            type: "paragraph",
            children: [
              {
                type: "text",
                value: codeLines[i],
              },
            ],
          });
        }
      }

      node.type = "mdxJsxFlowElement";
      node.name = "Snippet";
      node.attributes = [];
      delete node.lang;
      delete node.meta;
      node.children = children;
    });
  };
}
