import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

import rehypeLinks from "./rehype-links";

const transformer = (document: string, options: Record<string, string>) =>
  unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehypeLinks, options)
    .use(html)
    .processSync(document)
    .toString();

describe("utils/rehype-links", () => {
  it("Removes .md and and adds current dir", () => {
    const result = transformer("[Some link](workflow.md)", {
      currentPublicDir: "/docs/enterprize/",
    });

    expect(result).toEqual(
      '<p><a href="/docs/enterprize/workflow/">Some link</a></p>'
    );
  });

  it("Replaces index.md with the folder name", () => {
    const result = transformer("[Some link](workflow/index.md)", {
      currentPublicDir: "/docs/enterprize/",
    });

    expect(result).toEqual(
      '<p><a href="/docs/enterprize/workflow/">Some link</a></p>'
    );
  });

  it("Correctly resolves parent folder", () => {
    const result = transformer("[Some link](../workflow.md)", {
      currentPublicDir: "/docs/enterprize/",
    });

    expect(result).toEqual('<p><a href="/docs/workflow/">Some link</a></p>');
  });

  it("Correctly resolves root paths", () => {
    const result = transformer("[Some link](/workflow.md)", {
      currentPublicDir: "/docs/enterprize/",
    });

    expect(result).toEqual('<p><a href="/workflow/">Some link</a></p>');
  });

  it("Leave external links as is", () => {
    const result = transformer("[Some link](https://yandex.ru/workflow.md)", {
      currentPublicDir: "/docs/enterprize/",
    });

    expect(result).toEqual(
      '<p><a href="https://yandex.ru/workflow.md">Some link</a></p>'
    );
  });
});
