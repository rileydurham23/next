/*
  This function reimplements part of Liquid functionality
  I didn't use Liqud here because it replaces unknow variables,
  but some old docs files didn't have {% raw %} inside of them.
*/

import crypto from "crypto";
import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { filesDir } from "content/meta/docs/config";

type VarValue = string | number | boolean;

interface VarsObject {
  [key: string]: VarValue | VarsObject;
}

// Placeholders related logic

interface RawPlaceholder {
  value: string;
  placeholder: string;
}

const rawRegExp = /(?:\{%\s?raw\s?%\})(.*?)(?:\{%\s?endraw\s?%\})/g; // Ignoring multiline cases for now

const generateRawPlaceholder = (value: string) =>
  `[${crypto.createHash("md5").update(value).digest("hex")}]`;

const insertRawPlaceholders = (value: string) => {
  const matches: RawPlaceholder[] = [];

  const result = value.replace(rawRegExp, (_, value) => {
    const placeholder = generateRawPlaceholder(value);

    matches.push({ value, placeholder });

    return placeholder;
  });

  return { result, matches };
};

const removeRawPlaceholders = (
  value: string,
  placeholders: RawPlaceholder[]
) => {
  return placeholders.reduce(
    (result, { placeholder, value }) => result.replace(placeholder, value),
    value
  );
};

interface GeneratedRegexp {
  regexp: RegExp;
  value: VarValue;
}

// File content import logic

const includeRegexp = /(?:^|\n)(\s*)\{!([^!]+)!\}/g;

const includeFileContent = (value: string, vars: VarsObject) => {
  return value.replace(includeRegexp, (_, spaces, filePath) => {
    const fullPath = join(filesDir, filePath);

    if (existsSync(fullPath)) {
      const content = readFileSync(fullPath, "utf-8");

      return template(content, vars)
        .split("\n")
        .map((s: string) => `\n${spaces}${s}`) // need \n before first line too
        .join("");
    } else {
      return `{!${filePath}!}`;
    }
  });
};

// Variable replacement related logic

const generateRegexps = (vars: VarsObject, prefix?: string) => {
  let result: GeneratedRegexp[] = [];

  Object.entries(vars).forEach(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object") {
      result = [...result, ...generateRegexps(value, path)];
    } else {
      result.push({ regexp: new RegExp(`{{\\s?${path}\\s?}}`, "g"), value });
    }
  });

  return result;
};

const replaceVars = (value: string, vars: VarsObject) =>
  generateRegexps(vars).reduce((result, { regexp, value }) => {
    return result.replace(regexp, value.toString());
  }, value);

// General logic

const template = (value: string, vars: VarsObject) => {
  const { result, matches } = insertRawPlaceholders(value);

  return removeRawPlaceholders(
    replaceVars(includeFileContent(result, vars), vars),
    matches
  );
};

export default template;
