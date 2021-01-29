import vfile, { VFile } from "vfile";
import { Node } from "unist";
import { Transformer } from "unified";
import visit from "unist-util-visit";

import { MdxastNode } from "utils/unist-types";

import markdown2html from "utils/markdown-html";
import getErrorLocationString from "utils/unist-error-location";

const isTabHeaderNode = (node: MdxastNode): boolean =>
  node?.type === "paragraph" &&
  node.children[0].type === "text" &&
  node.children[0].value.startsWith("===");

const parseHeader = (node: MdxastNode) => {
  const [, label] = /^===\s"([^"]+)"/.exec(node.children[0]?.value);

  return { label };
};

const validateTab = (
  node: MdxastNode,
  index: number,
  parent: MdxastNode,
  vfile: VFile
) => {
  let error: string;

  const { label } = parseHeader(node);
  const nextSinblingNode = parent.children[index + 1];

  if (node.children.length > 1) {
    error = "Markdown syntaxt can't be used inside tab label.";
  } else if (!label) {
    error = "You must specify label in tab header.";
  } else if (nextSinblingNode.type !== "code") {
    error =
      "You must specify content for the tab. If you have it, check the left padding.";
  }

  if (error) {
    throw new Error(error + getErrorLocationString(vfile, node.position));
  }
};

const createBlankTabsNode = () => {
  return {
    type: "tabs",
    children: [],
  };
};

const convertTabNodeToJsx = async (
  node: MdxastNode,
  path: string
): Promise<void> => {
  const file = vfile({ contents: node.data.children as string, path });

  try {
    node.data.children = await markdown2html(file);
  } catch (e) {
    console.log(e);
  }
};

export default function remarkTabbed(): Transformer {
  return async (root: Node, vfile: VFile) => {
    const allTabNodes = [];

    let tabs = createBlankTabsNode();
    let startIndex: number;

    visit<MdxastNode>(root, [isTabHeaderNode], (node, index, parent) => {
      validateTab(node, index, parent, vfile);

      const { label } = parseHeader(node);
      const children = parent.children[index + 1].value;
      const isLastTab = !isTabHeaderNode(parent.children[index + 2]);

      if (!tabs.children.length) {
        startIndex = index;
      }

      const tab = {
        type: "tabItem",
        data: { label, children },
      };

      tabs.children.push(tab);
      allTabNodes.push(tab);

      if (isLastTab) {
        const lenght = index + 2 - startIndex;

        parent.children.splice(startIndex, lenght, tabs);

        tabs = createBlankTabsNode();

        return [visit.SKIP, startIndex + 1];
      } else {
        return [visit.SKIP, index + 1];
      }
    });

    try {
      await Promise.all(
        allTabNodes.map((node) => convertTabNodeToJsx(node, vfile.path))
      );

      visit<MdxastNode>(root, "tabs", (node) => {
        const value = `<Tabs>${node.children.map(
          ({ data: { label, children } }) =>
            `<TabItem label="${label}">${children}</TabItem>`
        )}</Tabs>`;

        node.value = value;
        node.type = "jsx";
        delete node.children;
      });
    } catch (e) {
      console.log(e);
    }
  };
}
