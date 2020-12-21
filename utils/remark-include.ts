import { VFile } from "vfile";
import { existsSync, readFileSync } from "fs";
import { join } from "path";

import { Transformer } from "unified";
import visit from "unist-util-visit";

import { MdxastNode } from "utils/unist-types";
import getErrorLocationString from "utils/unist-error-location";
import markdown2html, { MarkdownHtmlOptions } from "utils/markdown-html";

interface RemakIncludeOptions extends MarkdownHtmlOptions {
  filesDir: string;
}

const includeRegexp = /{!([^!]+)!}/;

const isNodeWithInclude = (node: MdxastNode) =>
  ["text", "code"].includes(node.type) && node.value.match(includeRegexp);

export default ({ filesDir, ...options }: RemakIncludeOptions): Transformer => {
  return async (root: MdxastNode, vfile: VFile) => {
    const markdownNodes = [];

    visit<MdxastNode>(root, [isNodeWithInclude], (node) => {
      const [, filePath] = includeRegexp.exec(node.value);

      const fullPath = join(filesDir, filePath);

      if (existsSync(fullPath)) {
        const value = readFileSync(fullPath, "utf-8");

        node.value = node.value.replace(includeRegexp, value);

        if (node.type === "text" && filePath.match(/\.md$/)) {
          markdownNodes.push(node);
        }
      } else {
        const location = getErrorLocationString(vfile, node.position);

        throw new Error(
          `File from address "${filePath}" cannot be found. ${location}`
        );
      }
    });

    await Promise.all(
      markdownNodes.map(async (node) => {
        const value = await markdown2html({
          document: node.value,
          options,
        });

        node.type = "html";
        node.value = value;
      })
    );
  };
};
