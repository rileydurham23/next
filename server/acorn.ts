/*
 * MDX v2 added undocumented support for random JavaScript nodes
 * (v1 olny allowed for import/export nodes).
 * But for them to work they need to have estree of the node itself.
 * Acorn's config and plugins list is copied from mdx parser.
 */

import { Parser } from "acorn";
import acornJsx from "acorn-jsx";
import stringifyObject from "stringify-object";

const AcornParser = Parser.extend(acornJsx());

export const createMdxjsEsmNode = (value: string): EsmNode => {
  return {
    type: "mdxjsEsm",
    value,
    data: {
      estree: AcornParser.parse(value, {
        ecmaVersion: 2020,
        sourceType: "module",
        locations: false,
        ranges: false,
      }),
    },
  };
};

export const createMdxjsEsmExportNode = (
  name: string,
  data: unknown
): EsmNode => {
  return createMdxjsEsmNode(`export const ${name} = ${stringifyObject(data)};`);
};

export const createMdxjsEsmImportNode = (
  name: string,
  path: string
): EsmNode => {
  return createMdxjsEsmNode(`import const ${name} = ${path};`);
};
