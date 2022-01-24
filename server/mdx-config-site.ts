import type { PluggableList } from "unified";

import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGFM from "remark-gfm";
import remarkLayout from "./remark-layout";
import remarkNonExplicitTags from "./remark-non-explicit-tags";
import remarkImportFiles from "./remark-import-files";

interface MdxConfig {
  providerImportSource: string;
  rehypePlugins: PluggableList;
  remarkPlugins: PluggableList;
}

const config: MdxConfig = {
  providerImportSource: "@mdx-js/react",
  remarkPlugins: [
    remarkNonExplicitTags, // Enables styling of html tags in HTML, like `<li>`
    remarkFrontmatter, // Converts frontmatter to remark node, used by remark-layout
    [
      remarkLayout,
      {
        layouts: {
          content: "layouts/ContentPage",
          howItWorks: "layouts/HowItWorksPage",
          events: "layouts/EventsPage",
          podcast: "layouts/PodcastPage",
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
    [rehypeHighlight, { plainText: ["text", "prolog", "Dockerfile"] }], // Adds syntax highlighting
  ],
};

export default config;
