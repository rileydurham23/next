import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

import rehypeTitle, { RehypeTitleOptions } from "./rehype-title";

const transformer = (document: string, options: RehypeTitleOptions) =>
  unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehypeTitle, options)
    .use(html)
    .processSync(document)
    .toString();

describe("utils/rehype-title", () => {
  it("Removes h1 if it is a first node", () => {
    const md = `# Title\n## Subtitle`;

    const result = transformer(md, {
      callback: () => null,
    });

    expect(result).toEqual("\n<h2>Subtitle</h2>");
  });

  it("Leaves h1 if it is not a first node", () => {
    const md = `## Subtitle\n# Title`;

    const result = transformer(md, {
      callback: () => null,
    });

    expect(result).toEqual("<h2>Subtitle</h2>\n<h1>Title</h1>");
  });

  it("Returns h1 value in callback if the first node is an h1", () => {
    const md = `# Title\n## Subtitle`;
    let h1: string;

    transformer(md, {
      callback: (result) => (h1 = result),
    });

    expect(h1).toEqual("Title");
  });

  it("Returns undefined in callback if the first node is not an h1", () => {
    const md = `## Subtitle\n# Title`;
    let h1: string;

    transformer(md, {
      callback: (result) => (h1 = result),
    });

    expect(h1).toEqual(undefined);
  });

  it("Cleans up h1 value from html tags", () => {
    const md = `# **Title**`;
    let h1: string;

    transformer(md, {
      callback: (result) => (h1 = result),
    });

    expect(h1).toEqual("Title");
  });
});
