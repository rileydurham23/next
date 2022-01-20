/*
 * List of plugins used on the docs pages. Not merged with main config
 * because we have some plugins that only work with
 * content of `/content/X.X/docs/` folders.
 */

import { PluggableList } from "unified";
import rehypeFixTags from "./rehype-fix-tags";
import rehypeHeaders from "./rehype-headers";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGFM from "remark-gfm";
import remarkIncludes from "./remark-includes";
import remarkLayout from "./remark-layout";
import remarkLinks from "./remark-links";
import remarkVariables from "./remark-variables";
import remarkCodeSnippet from "./remark-code-snippet";
import remarkImportFiles from "./remark-import-files";
import { fetchVideoMeta } from "./youtube-meta";
import { getPageMeta } from "./docs-helpers";

/*
 * We need custom template here because we need to add tableOfConents separately.
 * It is added by rehype-headers after we finish inserting layout.
 */

const defaultExportTemplate = () => `
export default function Wrapper (props) {
  return (<Layout
    {...props}
    meta={meta}
    tableOfConents={tableOfConents}
  />);
};
`;
interface MdxConfig {
  rehypePlugins: PluggableList;
  remarkPlugins: PluggableList;
}

const config: MdxConfig = {
  remarkPlugins: [
    remarkFrontmatter, // Converts frontmatter to remark node, used by remark-layout
    [
      remarkLayout,
      {
        defaultLayout: {
          path: "layouts/DocsPage",
          metaProcessor: async (
            config: Record<string, unknown>,
            vfile: VFile
          ) => {
            // Adds versions, navigation, githubUrl, etc.
            const pageMeta = getPageMeta(vfile);

            // If we have videoBanner file in config, we load this vide data through YouTube API.
            const { videoBanner } = config;

            if (typeof videoBanner === "string") {
              config.videoBanner = await fetchVideoMeta(videoBanner);
            }

            return { ...config, ...pageMeta };
          },
        },
        defaultExportTemplate,
      },
    ],
    remarkCodeSnippet, // Plugin for custom code snippets with multiple copy buttons
    remarkIncludes, // Resolves (!include.ext!) syntax
    remarkVariables, // Resolves (=variable=) syntax
    remarkGFM, // Adds tables
    remarkImportFiles, // Replaces paths to files with imports
    remarkLinks, // Make links in docs absolute with /ver/X.X included
  ],
  rehypePlugins: [
    rehypeFixTags, // Fix bugs in mdx@2.0.0-next, can b removed after update to stable one.
    rehypeSlug, // Adds ids to headers to use in anchors
    [
      rehypeHighlight,
      {
        aliases: { bash: ["bsh", "systemd", "code"], yaml: ["conf", "toml"] },
      },
    ], // Adds syntax highlighting
    [rehypeHeaders, { maxLevel: 2 }], // Adds export tableOfContent with info about headers
  ],
};

export default config;
