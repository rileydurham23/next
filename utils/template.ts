/*
  This function reimplements part of Liquid functionality
  I didn't use Liqud here because it replaces unknow variables,
  but some old docs files didn't have {% raw %} inside of them.
*/

import crypto from "crypto";
import { existsSync, readFileSync } from "fs";
import { join } from "path";

// Placeholders related logic

interface RawPlaceholder {
  value: string;
  placeholder: string;
}

const rawRegExp = /(?:\{%\s?raw\s?%\})(.*?)(?:\{%\s?endraw\s?%\})/g; // Ignoring multiline cases for now

const generatePlaceholder = (value: string) =>
  `[${crypto.createHash("md5").update(value).digest("hex")}]`;

const removePlaceholders = (value: string, placeholders: RawPlaceholder[]) => {
  return placeholders.reduce(
    (result, { placeholder, value }) => result.replace(placeholder, value),
    value
  );
};

// Raw related logic

const insertRawPlaceholders = (value: string) => {
  const matches: RawPlaceholder[] = [];

  const result = value.replace(rawRegExp, (_, value) => {
    const placeholder = generatePlaceholder(value);

    matches.push({ value, placeholder });

    return placeholder;
  });

  return { result, matches };
};

interface GeneratedRegexp {
  regexp: RegExp;
  value: unknown;
}

// File content import logic

const includeRegexp = /(?:^|\n)([ \t]*)\{!([^!]+)!\}/g;

const insertFileContentPlaholders = (
  value: string,
  rootDir: string,
  vars: Record<string, unknown>
) => {
  const matches: RawPlaceholder[] = [];

  const result = value.replace(includeRegexp, (_, spaces, filePath) => {
    const fullPath = join(process.cwd(), rootDir, filePath);
    const placeholder = generatePlaceholder(fullPath);

    if (existsSync(fullPath)) {
      const content = readFileSync(fullPath, "utf-8");

      matches.push({
        placeholder,
        value: template(content, rootDir, vars)
          .split("\n")
          .map((s: string) => `\n${spaces}${s}`) // need \n before first line too
          .join(""),
      });
    } else {
      matches.push({ placeholder, value: `{!${filePath}!}` });
    }

    return placeholder;
  });

  return { result, matches };
};

// Variable replacement related logic

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
      result.push({ regexp: new RegExp(`{{\\s?${path}\\s?}}`, "g"), value });
    }
  });

  return result;
};

const replaceVars = (value: string, vars: Record<string, unknown>) =>
  generateRegexps(vars).reduce((result, { regexp, value }) => {
    return result.replace(regexp, value.toString());
  }, value);

// General logic

const template = (
  value: string,
  rootDir: string,
  vars: Record<string, unknown>
): string => {
  const { result: rawResult, matches: rawMatches } = insertRawPlaceholders(
    value
  );
  const {
    result: includeResult,
    matches: includeMatches,
  } = insertFileContentPlaholders(rawResult, rootDir, vars);

  return removePlaceholders(
    removePlaceholders(replaceVars(includeResult, vars), includeMatches),
    rawMatches
  );
};

export default template;
