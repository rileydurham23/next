import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import HtmlToJsx from "htmltojsx";
import u from "unist-builder";

import { getPlugins } from "utils/plugins";

const converter = new HtmlToJsx({
  createClass: false,
});

const knownHtmlTags = ["Admonition", "Tabs", "TabItem", "Link", "Image"];

export interface MarkdownHtmlOptions {
  currentPublicDir: string;
}

interface MarkdownHtml {
  document: string;
  options: MarkdownHtmlOptions;
}

const fixKnowJSXTags = (html: string) => {
  let result = html;

  for (const tag of knownHtmlTags) {
    const regexp = new RegExp(`(</?)${tag.toLowerCase()}`, "g");

    result = result.replace(regexp, `$1${tag}`);
  }

  return result;
};

export default async function markdown2html({
  document,
  options,
}: MarkdownHtml): Promise<string> {
  const { remarkPlugins, rehypePlugins } = getPlugins(options);

  try {
    const result = await unified()
      .use(markdown)
      .use(remarkPlugins)
      .use(remark2rehype, {
        allowDangerousHtml: true,
        handlers: {
          jsx: (h, node) => h.augment(node, u("raw", node.value)),
        },
      })
      .use(rehypePlugins)
      .use(html, { allowDangerousHtml: true })
      .process(document);

    const resultString = converter.convert(result.toString());

    return fixKnowJSXTags(resultString);
  } catch (e) {
    console.log(e);
  }
}
