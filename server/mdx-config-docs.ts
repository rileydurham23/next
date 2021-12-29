import { PluggableList } from "unified";
import rehypeFixTags from "./rehype-fix-tags";
import rehypeHeaders from "./rehype-headers";
import rehypeHighlight from "rehype-highlight";
import rehypeImages from "./rehype-images";
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
    remarkFrontmatter,
    [
      remarkLayout,
      {
        defaultLayout: {
          path: "layouts/DocsPage",
          metaProcessor: async (
            config: Record<string, unknown>,
            vfile: VFile
          ) => {
            const pageMeta = getPageMeta(vfile);

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
    remarkCodeSnippet,
    remarkIncludes,
    remarkVariables,
    remarkGFM,
    remarkImportFiles,
    remarkLinks,
  ],
  rehypePlugins: [
    rehypeFixTags,
    rehypeSlug,
    rehypeImages,
    [
      rehypeHighlight,
      {
        aliases: { bash: ["bsh", "systemd", "code"], yaml: ["conf", "toml"] },
      },
    ],
    [rehypeHeaders, { maxLevel: 2 }],
  ],
};

export default config;
