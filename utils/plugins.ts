import { join } from "path";
import { Settings, PluggableList } from "unified";
import rehypeHeaders, { HeaderMeta } from "utils/rehype-headers";
import rehypeLinks from "utils/rehype-links";
import rehypeSlug from "rehype-slug";
import rehypeTitle from "utils/rehype-title";
import remarkAdmonitions from "utils/remark-admonitions";
import remarkTabbed from "utils/remark-tabbed";
import rehypeHighlight from "rehype-highlight";
import remarkCopyLinkedFiles from "remark-copy-linked-files";

interface GetPluginsOptions {
  currentPublicDir: string;
  titleCallback?: (title: string) => void;
  headersCallback?: (headers: HeaderMeta[]) => void;
  withMdx?: boolean;
}

export const getPlugins = ({
  currentPublicDir,
  headersCallback,
  titleCallback,
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
        staticPath: process.env.NEXT_PUBLIC_ROOT_DIR + "/assets/",
        ignoreFileExtensions: [".md"],
      },
    ],
    [remarkAdmonitions, settings],
    [remarkTabbed, settings],
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
    rehypePlugins.push([rehypeTitle, { callback: titleCallback }]);
    rehypePlugins.push([
      rehypeHeaders,
      { callback: headersCallback, maxLevel: 2 },
    ]);
  }

  return {
    rehypePlugins,
    remarkPlugins,
  };
};
