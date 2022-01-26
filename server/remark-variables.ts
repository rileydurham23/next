/*
 * This plugin will resolve (=variable=) syntax and include veriables value into the page.
 * We wrote separate plugin instead of using {variable} syntax because we need to use them inside
 * code blocks and includes and we can't do it with {}.
 *
 * Source of variables is "content/X.X/docs/config.json" file.
 *
 * This plugin can also work as a linter plugin for remark-lint.
 *
 * See tests and fixtures for more examples.
 */

import type { Transformer } from "unified";
import type { Literal as MdastLiteral, Link as MdastLink } from "mdast";
import type { VFile } from "vfile";
import type { Config as DocsConfig } from "./config-docs";
import type { MdxElement, MdxastNode } from "./types-unist";

import { visit } from "unist-util-visit";
import updateMessages from "./update-vfile-messages";
interface GeneratedRegexp {
  regexp: RegExp;
  path: string;
  value: string;
}

const generateRegexps = (vars: Record<string, unknown>, prefix?: string) => {
  let result: GeneratedRegexp[] = [];

  Object.entries(vars).forEach(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object") {
      result = [
        ...result,
        ...generateRegexps(value as Record<string, unknown>, path),
      ];
    } else {
      result.push({
        regexp: new RegExp(`\\(=\\s?${path}\\s?=\\)`, "g"),
        path,
        value: value as string,
      });
    }
  });

  return result;
};

const replaceVars = (value: string, regExps: GeneratedRegexp[]) =>
  regExps.reduce((result, { regexp, value }) => {
    return result.replace(regexp, value.toString());
  }, value);

const variableRegExp = /\(=\s?(.+?)\s?=\)/g;

const lintVars = (
  vfile: VFile,
  node: MdastLiteral | MdastLink | MdxElement,
  value: string,
  variables: string[]
) => {
  Array.from(value.matchAll(variableRegExp)).forEach((result) => {
    const match = result[0];
    const name = result[1];

    if (!variables.includes(name)) {
      vfile.message(`Non existing varaible name ${match}`, node);
    }
  });
};

const nodeHasValue = (node: MdastLiteral) => typeof node.value === "string";
const nodeIsLink = (node: MdxastNode) => node.type === "link";
const nodeIsAJsx = (node: MdxastNode) =>
  ["mdxBlockElement", "mdxJsxTextElement"].includes(node.type);

export interface RemarkVariablesOptions {
  resolve?: boolean;
  lint?: boolean;
}

export default function remarkVariables(
  { resolve, lint }: RemarkVariablesOptions = { resolve: true }
): Transformer {
  return (root, vfile) => {
    if (!vfile.data.docsConfig) {
      throw new Error(
        'Please add "remark-docs" to mdx remarkPlugins before "remark-variables"'
      );
    }

    const { variables } = vfile.data.docsConfig as DocsConfig;
    const lastErrorIndex = vfile.messages.length;

    const regExps = generateRegexps(variables);
    const varNames = regExps.map(({ path }) => path);

    visit(root, [nodeHasValue], (node: MdastLiteral) => {
      if (resolve) {
        node.value = replaceVars(node.value as string, regExps);
      }

      if (lint) {
        lintVars(vfile, node, node.value as string, varNames);
      }
    });

    visit(root, [nodeIsLink], (node: MdastLink) => {
      if (node.url) {
        if (resolve) {
          node.url = replaceVars(node.url as string, regExps);
        }

        if (lint) {
          lintVars(vfile, node, node.url as string, varNames);
        }
      }
    });

    visit(root, [nodeIsAJsx], (node: MdxElement) => {
      if (node.attributes) {
        Object.values(node.attributes as { value: string }[]).forEach(
          (attribute) => {
            if (typeof attribute.value === "string") {
              if (resolve) {
                attribute.value = replaceVars(attribute.value, regExps);
              }

              if (lint) {
                lintVars(vfile, node, attribute.value, varNames);
              }
            }
          }
        );
      }
    });

    updateMessages({
      vfile,
      startIndex: lastErrorIndex,
      ruleId: "variables",
      source: "remark-lint",
    });
  };
}
