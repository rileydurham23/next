import { resolve } from "path";
import { PluggableList } from "unified";

import rehypeFixTags from "./rehype-fix-tags";
import rehypeHeaders from "./rehype-headers";
import rehypeHighlight from "rehype-highlight";
import rehypeImages from "./rehype-images";
import rehypeLinks from "./rehype-links";
import rehypeSlug from "rehype-slug";

import remarkCopyLinkedFiles from "remark-copy-linked-files";
import remarkFrontmatter from "remark-frontmatter";
import remarkGFM from "remark-gfm";
import remarkImportFrontmatter from "./remark-import-frontmatter";
import remarkImportVariables from "./remark-import-variables";
import remarkIncludes from "./remark-includes";
import remarkVariables from "./remark-variables";

const staticPath = "/static/assets/";
const destinationDir = resolve(`public/${staticPath}`);

const DEFAULT_RENDERER = `
/** @jsxRuntime classic */

import { mdx } from "@mdx-js/react";
import DocsPage from "components/DocsPage";
const Wrapper = () => (
  <DocsPage
    meta={meta}
    navigation={navigation}
    versions={versions}
    tableOfConents={tableOfConents}
    githubUrl={githubUrl}
  >
    <MDXContent />
  </DocsPage>
);

export default Wrapper;
`;

interface MdxConfig {
  rehypePlugins: PluggableList;
  remarkPlugins: PluggableList;
  renderer: string;
  skipExport?: boolean;
}

const config: MdxConfig = {
  remarkPlugins: [
    remarkFrontmatter,
    remarkImportFrontmatter,
    remarkImportVariables,
    remarkIncludes,
    remarkVariables,
    remarkGFM,
    [
      remarkCopyLinkedFiles,
      {
        destinationDir,
        staticPath,
        ignoreFileExtensions: [".md", ".mdx"],
      },
    ],
  ],
  rehypePlugins: [
    rehypeFixTags,
    rehypeSlug,
    rehypeLinks,
    [
      rehypeImages,
      {
        destinationDir,
        staticPath,
      },
    ],
    [
      rehypeHighlight,
      { aliases: { bash: ["bsh", "systemd"], yaml: ["conf", "toml"] } },
    ],
    [rehypeHeaders, { maxLevel: 2 }],
  ],
  skipExport: true,
  renderer: DEFAULT_RENDERER,
};

export default config;
