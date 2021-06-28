import { Parent } from "unist";
import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { VFile } from "vfile";
import visit from "unist-util-visit-parents";
import { MdxastNode } from "./unist-types";
import fromMarkdown from "mdast-util-from-markdown";
import syntax from "micromark-extension-mdxjs";
import mdx from "mdast-util-mdx";
import gfm from "mdast-util-gfm";
import frontmatter from "mdast-util-frontmatter";
import { getVersionRootPath } from "./docs-helpers";
import updateMessages from "./update-vfile-messages";

const includeRegexpBase = "\\(!([^!]+)!\\)`?";
const includeRegexp = new RegExp(includeRegexpBase);
const exactIncludeRegexp = new RegExp(`^${includeRegexpBase}$`);
const globalIncludeRegexp = new RegExp(includeRegexpBase, "g");

interface ResolveIncludesProps {
  value: string;
  filePath: string;
}

const resolveIncludes = ({ value, filePath }: ResolveIncludesProps) => {
  const rootDir = getVersionRootPath(filePath);
  let error: string;

  const result = value.replace(includeRegexp, (_, includePath) => {
    const fullImportPath = join(rootDir, includePath);

    if (existsSync(fullImportPath)) {
      return readFileSync(fullImportPath, "utf-8");
    } else {
      error = `Wrong import path ${includePath} in file ${filePath}.`;

      return `(!${includePath}!)`;
    }
  });

  return { result, error };
};

const numIncludes = (value: string) => value.match(globalIncludeRegexp).length;

const hasInclude = (node: MdxastNode) =>
  typeof node.value === "string" && includeRegexp.test(node.value);

export interface RemarkIncludesOptions {
  lint?: boolean;
  resolve?: boolean;
}

export default function remarkIncludes(
  { lint, resolve }: RemarkIncludesOptions = { resolve: true }
) {
  return (root: MdxastNode, vfile: VFile) => {
    const lastErrorIndex = vfile.messages.length;

    visit<MdxastNode>(root, [hasInclude], (node, ancestors: MdxastNode[]) => {
      if (node.type === "code") {
        const noIncludes = numIncludes(node.value);

        for (let i = 0; i < noIncludes; i++) {
          const { result, error } = resolveIncludes({
            value: node.value,
            filePath: vfile.path,
          });

          if (resolve) {
            node.value = result;
          }

          if (lint && error) {
            vfile.message(error, node);
          }
        }
      } else if (node.type === "text") {
        const parent = ancestors[ancestors.length - 1];

        if (parent.type === "paragraph") {
          if (parent.children && parent.children.length === 1) {
            if (exactIncludeRegexp.test(node.value.trim())) {
              const { result, error } = resolveIncludes({
                value: node.value,
                filePath: vfile.path,
              });

              const path = node.value.match(exactIncludeRegexp)[1];

              if (resolve) {
                if (path.match(/\.mdx?$/)) {
                  const tree = fromMarkdown(result, {
                    extensions: [syntax()],
                    mdastExtensions: [
                      mdx.fromMarkdown,
                      gfm.fromMarkdown,
                      frontmatter.fromMarkdown,
                    ],
                  });

                  const grandParent = ancestors[ancestors.length - 2] as Parent;
                  const parentIndex = grandParent.children.indexOf(parent);

                  grandParent.children.splice(parentIndex, 1, ...tree.children);
                } else {
                  node.value = result;
                }
              }

              if (lint && error) {
                vfile.message(error, node);
              }
            } else if (lint) {
              vfile.message(
                "Includes only works if they are the only content on the line",
                node
              );
            }
          } else if (lint) {
            vfile.message(
              "Includes only works if they are the only content on the line",
              node
            );
          }
        }
      } else if (lint) {
        vfile.message("Includes only work in paragraphs and code blocks", node);
      }
    });

    updateMessages({
      vfile,
      startIndex: lastErrorIndex,
      ruleId: "includes",
      source: "remark-lint",
    });
  };
}
