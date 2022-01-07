import { Transformer } from "unified";
import visit from "unist-util-visit";
import { VFile } from "vfile";
import { loadConfig } from "./config-docs";
import { getVersion } from "./docs-helpers";
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
  node: MdxastNode,
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

const nodeHasValue = (node: MdxastNode) => typeof node.value === "string";
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
  return (root: MdxastNode, vfile) => {
    const lastErrorIndex = vfile.messages.length;
    const version = getVersion(vfile.path);

    const { variables } = loadConfig(version);
    const regExps = generateRegexps(variables);
    const varNames = regExps.map(({ path }) => path);

    visit<MdxastNode>(root, [nodeHasValue], (node) => {
      if (typeof node.value === "string") {
        if (resolve) {
          node.value = replaceVars(node.value as string, regExps);
        }

        if (lint) {
          lintVars(vfile, node, node.value as string, varNames);
        }
      }
    });

    visit<MdxastNode>(root, [nodeIsLink], (node) => {
      if (node.url) {
        if (resolve) {
          node.url = replaceVars(node.url as string, regExps);
        }

        if (lint) {
          lintVars(vfile, node, node.url as string, varNames);
        }
      }
    });

    visit<MdxastNode>(root, [nodeIsAJsx], (node) => {
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
