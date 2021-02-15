import { join } from "path";
import { PluggableList } from "unified";
import rehypeHeaders from "utils/rehype-headers";
import rehypeLinks from "utils/rehype-links";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkImportFrontmatter from "utils/remark-import-frontmatter";
import remarkAdmonitions from "utils/remark-admonitions";
import remarkTabbed from "utils/remark-tabbed";
import rehypeHighlight from "rehype-highlight";
import remarkCopyLinkedFiles from "remark-copy-linked-files";

interface GetPluginsOptions {
  removeTitle?: boolean;
}

export const getPlugins = ({ removeTitle }: GetPluginsOptions = {}) => {
  const remarkPlugins: PluggableList = [
    remarkFrontmatter,
    remarkImportFrontmatter,
    [
      remarkCopyLinkedFiles,
      {
        destinationDir: join(process.cwd(), "public/assets"),
        staticPath: process.env.NEXT_PUBLIC_ROOT_DIR + "/assets/",
        ignoreFileExtensions: [".md"],
      },
    ],
    remarkAdmonitions,
    remarkTabbed,
  ];

  const rehypePlugins: PluggableList = [
    rehypeSlug,
    rehypeLinks,
    [
      rehypeHighlight,
      { aliases: { bash: ["bsh", "systemd"], yaml: ["conf", "toml"] } },
    ],
  ];

  if (removeTitle) {
    rehypePlugins.push([rehypeHeaders, { maxLevel: 2 }]);
  }

  return {
    rehypePlugins,
    remarkPlugins,
  };
};
