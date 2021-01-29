import matter from "gray-matter";
import { getPageContent } from "utils/data-fetcher-docs";

module.exports = async function (originalContent: string) {
  return getPageContent({
    content: matter(originalContent).content,
    filepath: this.resourcePath,
  });
};
