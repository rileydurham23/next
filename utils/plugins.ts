import { join } from "path";
import { PluggableList } from "unified";
import rehypeHeaders from "utils/rehype-headers";
import rehypeLinks from "utils/rehype-links";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkImportFrontmatter from "utils/remark-import-frontmatter";
import rehypeHighlight from "rehype-highlight";
import remarkCopyLinkedFiles from "remark-copy-linked-files";

interface Plugins {
  rehypePlugins: PluggableList;
  remarkPlugins: PluggableList;
}

const plugins: Plugins = {
  remarkPlugins: [
    remarkFrontmatter,
    remarkImportFrontmatter,
    [
      remarkCopyLinkedFiles,
      {
        destinationDir: join(process.cwd(), "public/assets"),
        staticPath: process.env.NEXT_PUBLIC_ROOT_DIR + "/assets/",
        ignoreFileExtensions: [".md", ".mdx"],
      },
    ],
  ],
  rehypePlugins: [
    rehypeSlug,
    rehypeLinks,
    [
      rehypeHighlight,
      { aliases: { bash: ["bsh", "systemd"], yaml: ["conf", "toml"] } },
    ],
    [rehypeHeaders, { maxLevel: 2 }],
  ],
};

export default plugins;
