import { getOptions } from "loader-utils";
import mdx from "@mdx-js/mdx";
import stringifyObject from "stringify-object";
import { parseMdxContent } from "utils/data-fetcher-docs";

const DEFAULT_IMPORTS = `
import React from "react";
import { mdx } from "@mdx-js/react";
import DocsPage from "components/DocsPage";
`;

const DEFAULT_EXPORT = `
const Wrapper = () => (
  <DocsPage meta={meta} navigation={navigation} versions={versions}>
    <MDXContent />
  </DocsPage>
);

export default Wrapper;
`;

module.exports = async function (originalContent: string) {
  const filepath = this.resourcePath;
  const callback = this.async();
  const options = Object.assign({}, getOptions(this), {
    filepath,
    skipExport: true,
  });

  const { content, meta, navigation, versions } = parseMdxContent({
    filepath,
    content: originalContent,
  });

  const metaStr = `export const meta = ${stringifyObject(meta)};`;
  const navigationStr = `export const navigation = ${stringifyObject(
    navigation
  )};`;
  const versionsStr = `export const versions = ${stringifyObject(versions)};`;

  let result: string;

  try {
    result = await mdx(content, options);
  } catch (err) {
    return callback(err);
  }

  const code = `${DEFAULT_IMPORTS}\n${metaStr}\n${navigationStr}\n${versionsStr}\n${result}\n${DEFAULT_EXPORT}`;
  return callback(null, code);
};
