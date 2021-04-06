import { join } from "path";
import { PluggableList } from "unified";
import rehypeHeaders from "./rehype-headers";
import rehypeImages from "./rehype-images";
import rehypeLinks from "./rehype-links";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkImportFrontmatter from "./remark-import-frontmatter";
import remarkImportVariables from "./remark-import-variables";
import remarkIncludes from "./remark-includes";
import rehypeHighlight from "rehype-highlight";
import rehypeFixTags from "./rehype-fix-tags";
import remarkCopyLinkedFiles from "remark-copy-linked-files";
import remarkVariables from "./remark-variables";
import remarkGFM from "remark-gfm";

const destinationDir = join(process.cwd(), "public/static/assets");
const staticPath = "/static/assets/";

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
