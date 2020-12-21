import { join } from "path";
import { Settings, PluggableList } from "unified";

import rehypeHeaders, { HeaderMeta } from "utils/rehype-headers";
import rehypeLinks from "utils/rehype-links";
import rehypeSlug from "rehype-slug";
import remarkAdmonitions from "utils/remark-admonitions";
import remarkTabbed from "utils/remark-tabbed";
import rehypeHighlight from "rehype-highlight";
import remarkCopyLinkedFiles from "remark-copy-linked-files";
import remarkInclude from "utils/remark-include";

import { filesDir } from "content/meta/docs/config";

interface GetPluginsOptions {
  currentPublicDir: string;
  headersCallback?: (headers: HeaderMeta[]) => void;
  withMdx?: boolean;
}

export const getPlugins = ({
  currentPublicDir,
  headersCallback,
  withMdx,
}: GetPluginsOptions) => {
  const settings: Settings = {
    currentPublicDir,
  };

  const remarkPlugins: PluggableList = [
    [
      remarkCopyLinkedFiles,
      {
        destinationDir: join(process.cwd(), "public/assets"),
        staticPath: "/assets/",
        ignoreFileExtensions: [".md"],
      },
    ],
    [remarkAdmonitions, settings],
    [remarkTabbed, settings],
    [remarkInclude, { filesDir, ...settings }],
  ];

  const rehypePlugins: PluggableList = [
    rehypeSlug,
    [rehypeLinks, settings],
    [
      rehypeHighlight,
      { aliases: { bash: ["bsh", "systemd"], yaml: ["conf", "toml"] } },
    ],
  ];

  if (withMdx) {
    rehypePlugins.push([rehypeHeaders, { callback: headersCallback }]);
  }

  return {
    rehypePlugins,
    remarkPlugins,
  };
};
