import { PluggableList } from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkImportFrontmatter from "./remark-import-frontmatter";

const DEFAULT_RENDERER = `
/** @jsxRuntime classic */

import { mdx } from "@mdx-js/react";
import { SitePage } from "components";

const Wrapper = (props) => (
  <SitePage meta={meta}>
    <MDXContent ssData={props} />
  </SitePage>
);

export default Wrapper;
`;

interface MdxConfig {
  remarkPlugins: PluggableList;
  renderer: string;
  skipExport?: boolean;
}

const config: MdxConfig = {
  remarkPlugins: [remarkFrontmatter, remarkImportFrontmatter],
  skipExport: true,
  renderer: DEFAULT_RENDERER,
};

export default config;
