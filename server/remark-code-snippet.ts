/*
 * This plugin will transform code snippets like this:
 *
 * ```code
 * # Copy and Paste the below and run on the Teleport Auth server.
 * $ cat > api-role.yaml <<ENDOFMESSAGE
 * kind: role
 * metadata:
 *   name: api-role
 * spec:
 *   allow:
 *     rules:
 *       - resources: ['role']
 *         verbs: ['read']
 *   deny:
 *     node_labels:
 *       '*': '*'
 * version: v3
 * ```
 *
 * To the widget in which every command can be copied separately.
 *
 * See fixtures/includes and tests for more examples.
 */

import { Transformer } from "unified";
import visit from "unist-util-visit";
import { VFile } from "vfile";

const RULE_ID = "code-snippet";

const nodeIsCode = (node: MdxastNode) =>
  node.type === "code" && node.lang === "code";

const getCommandNode = (content: string, prefix = "$") => ({
  type: "mdxJsxFlowElement",
  name: "Command",
  attributes: [],
  children: [
    {
      type: "mdxJsxTextElement",
      name: "span",
      attributes: [
        {
          type: "mdxJsxAttribute",
          name: "data-content",
          value: `${prefix} `,
        },
      ],
      children: [
        {
          type: "text",
          value: content,
        },
      ],
    },
  ],
});

const getSpanNode = (content: string, attributes = []) => ({
  type: "mdxJsxTextElement",
  name: "span",
  attributes,
  children: [
    {
      type: "text",
      value: content,
    },
  ],
});

const getPNode = (content: string) => ({
  type: "paragraph",
  children: [
    {
      type: "text",
      value: content,
    },
  ],
});

export interface RemarkCodeSnippetOptions {
  lint?: boolean;
  resolve?: boolean;
}

export default function remarkCodeSnippet(
  { lint }: RemarkCodeSnippetOptions = { resolve: true }
): Transformer {
  return (root: MdxastRootNode, vfile: VFile) => {
    visit<MdxastNode>(root, [nodeIsCode], (node) => {
      const content: string = node.value as string;
      const codeLines = content.split("\n");
      const children = [];

      for (let i = 0; i < codeLines.length; i++) {
        const hasLeadingDollar = codeLines[i][0] === "$";
        const hasHost = codeLines[i][0] === ">" && codeLines[i].includes("$");
        const hasGrate = codeLines[i][0] === "#";
        const trimmedValue = codeLines[i].slice(1).trim();

        if (hasLeadingDollar) {
          children.push(getCommandNode(trimmedValue));

          const commandArrayElem = children[children.length - 1].children;

          if (codeLines[i].includes("<<")) {
            let heredocMark = codeLines[i].match(/[^<<]*$/)[0].trim();

            if (heredocMark.includes(">")) {
              heredocMark = heredocMark.split(">")[0].trim();
            }

            if (heredocMark.includes("'")) {
              heredocMark = heredocMark.match(/'(.*?)'/)[1];
            }

            if (heredocMark.indexOf("-") === 0) {
              heredocMark = heredocMark.slice(1);
            }

            while (codeLines[i] && codeLines[i] !== heredocMark) {
              commandArrayElem.push(getSpanNode(codeLines[i + 1]));

              i++;
            }

            if (codeLines.every((line) => line !== heredocMark)) {
              if (lint) {
                vfile.fail("No closing line for heredoc format", node, RULE_ID);
              } else {
                console.error(
                  `ERROR: no closing line ${heredocMark} in the file ${vfile.path}`
                );
              }
            }
          }

          let hasNextLine = codeLines[i]?.[codeLines[i]?.length - 1] === "\\";

          while (hasNextLine) {
            commandArrayElem.push(getSpanNode(codeLines[i + 1]));

            i++;
            hasNextLine =
              Boolean(codeLines[i]) &&
              codeLines[i][codeLines[i].length - 1] === "\\";

            if (lint && !codeLines[i]) {
              vfile.fail(
                "The last string in the multiline command has to be without symbol \\",
                node,
                RULE_ID
              );
            }
          }
        } else if (hasHost) {
          const parts = codeLines[i].split("$");
          const ghostText = `${parts[0].slice(1).trim()} $`;
          const commandText = parts[1].trim();

          children.push(getCommandNode(commandText, ghostText));
        } else if (hasGrate) {
          if (codeLines[i][1] === "#") {
            children.push(getPNode(codeLines[i].slice(1)));
          } else {
            children.push({
              type: "paragraph",
              children: [
                getSpanNode(trimmedValue, [
                  {
                    type: "mdxJsxAttribute",
                    name: "data-type",
                    value: "descr",
                  },
                ]),
              ],
            });
          }
        } else {
          children.push(getPNode(codeLines[i]));
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
