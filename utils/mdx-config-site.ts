import { PluggableList } from "unified";
import rehypeFixTags from "./rehype-fix-tags";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGFM from "remark-gfm";
import remarkLayout from "./remark-layout";
import remarkCopyLinkedFiles from "remark-copy-linked-files";
import { staticPath, destinationDir } from "./mdx-paths";

interface MdxConfig {
  rehypePlugins: PluggableList;
  remarkPlugins: PluggableList;
}

const config: MdxConfig = {
  remarkPlugins: [
    remarkFrontmatter,
    [
      remarkLayout,
      {
        layouts: {
          default: "components/SitePage",
          content: "layouts/ContentPage",
        },
      },
    ],
    [
      remarkCopyLinkedFiles,
      {
        destinationDir,
        staticPath,
        ignoreFileExtensions: [".md", ".mdx"],
      },
    ],
    remarkGFM,
  ],
  rehypePlugins: [rehypeFixTags, [rehypeHighlight, { plainText: ["text"] }]],
};

export default config;
