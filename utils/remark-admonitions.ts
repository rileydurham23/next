import { VFile } from "vfile";
import { Node } from "unist";
import { Transformer } from "unified";
import visit from "unist-util-visit";

import { AdmonitionNode, MdxastNode } from "utils/unist-types";
import markdown2html, { MarkdownHtmlOptions } from "utils/markdown-html";
import getErrorLocationString from "utils/unist-error-location";

const isAdmonitionHeaderNode = (node: MdxastNode): boolean =>
  node?.type === "paragraph" &&
  node.children[0].type === "text" &&
  node.children[0].value.startsWith("!!!");

const parseHeader = (node: MdxastNode) => {
  const header = node.children[0].value;
  const [, type, , title, colon] = /^!!!\s?([a-zA-Z]+)(\s"([^"]+)")?(:$)?/.exec(
    header
  );

  return { type, title, hasColon: Boolean(colon) };
};

const validateAdmonition = (
  node: MdxastNode,
  index: number,
  parent: MdxastNode,
  vfile: VFile
) => {
  let error: string;

  const { type, hasColon } = parseHeader(node);
  const nextSinblingNode = parent.children[index + 1];

  if (node.children.length > 1) {
    error = "Markdown syntaxt can't be used inside admonition header.";
  } else if (!type) {
    error = "You must specify type in admonition header.";
  } else if (hasColon) {
    error = 'Admonition header must not end with ":".';
  } else if (nextSinblingNode.type !== "code") {
    error =
      "You must specify content for the admoniton. If you have it, check the left padding.";
  }

  if (error) {
    throw new Error(error + getErrorLocationString(vfile, node.position));
  }
};

const createAdmonitionNode = (
  node: MdxastNode,
  index: number,
  parent: MdxastNode
): AdmonitionNode => {
  const { type, title } = parseHeader(node);

  const content = parent.children[index + 1].value;

  return {
    type: "admonition",
    data: { type, title, content },
  };
};

const modifyAdmonitionNode = async (
  node: MdxastNode,
  options: MarkdownHtmlOptions
): Promise<void> => {
  const {
    data: { type, title, content },
  } = node;

  try {
    const jsxString = await markdown2html({
      document: content as string,
      options,
    });

    // To prevent second tree traversal we just modify existing node in place
    node.type = "jsx";
    node.value = `<Admonition type="${type}"${
      title ? ` title="${title}"` : ""
    }>${jsxString}</Admonition>`;
    delete node.children;
  } catch (e) {
    console.log(e);
  }
};

export default function remarkAdmonitions(
  options: MarkdownHtmlOptions
): Transformer {
  return async (root: Node, vfile: VFile) => {
    const allAdmonitionNodes = [];

    visit<MdxastNode>(
      root,
      [isAdmonitionHeaderNode],
      (node, index, parent: MdxastNode) => {
        validateAdmonition(node, index, parent, vfile);

        const admonitionNode = createAdmonitionNode(node, index, parent);

        // We can't directly insert jsx node here
        // because generating html is an async process
        parent.children.splice(index, 2, admonitionNode);

        allAdmonitionNodes.push(admonitionNode);

        return [visit.SKIP, index + 1];
      }
    );

    await Promise.all(
      allAdmonitionNodes.map((node) => modifyAdmonitionNode(node, options))
    );
  };
}
