import { PluggableList } from "unified";
import rehypeFixTags from "./rehype-fix-tags";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkImportFrontmatter from "./remark-import-frontmatter";
import remarkImportFiles from "./remark-import-files";

interface MdxConfig {
  rehypePlugins: PluggableList;
  remarkPlugins: PluggableList;
}

// This config will be used for mdx files inside components

const config: MdxConfig = {
  remarkPlugins: [
    remarkFrontmatter,
    remarkImportFrontmatter,
    remarkImportFiles,
  ],
  rehypePlugins: [rehypeFixTags, rehypeHighlight],
};

export default config;
