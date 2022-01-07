import { PluggableList } from "unified";
import rehypeFixTags from "./rehype-fix-tags";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGFM from "remark-gfm";
import remarkLayout from "./remark-layout";
import remarkImportFiles from "./remark-import-files";
import { getArticlesListAndTags } from "./resources-helpers";

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
        layouts: {
          content: "layouts/ContentPage",
          howItWorks: "layouts/HowItWorksPage",
          events: "layouts/EventsPage",
          podcast: "layouts/PodcastPage",
          blogArticle: {
            path: "layouts/BlogArticle",
            metaProcessor: async (config: Record<string, unknown>) => {
              const data = await getArticlesListAndTags(4);
              config.featuredList = data.list; // Four last articles
              config.articleTags = data.tags; // Fill tags list for all blog posts
              return config;
            },
          },
          tutorial: "layouts/TutorialPage",
          press: "layouts/PressPage",
          audits: "layouts/AuditsPage",
        },
        defaultLayout: "layouts/SitePage",
      },
    ],
    remarkGFM, // Adds tables
    remarkImportFiles, // Replaces paths to files with imports
  ],
  rehypePlugins: [
    rehypeFixTags, // Fix bugs in mdx@2.0.0-next, can b removed after update to stable one.
    [rehypeHighlight, { plainText: ["text"] }], // Adds syntax highlighting
  ],
};

export default config;
