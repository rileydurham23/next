import vfile, { VFileOptions } from "vfile";
import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

import rehypeLinks from "./rehype-links";

const transformer = (options: VFileOptions) =>
  unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehypeLinks)
    .use(html)
    .processSync(vfile(options))
    .toString();

describe("utils/rehype-links", () => {
  it("Removes .md and and adds './'", () => {
    const result = transformer({
      contents: "[Some link](workflow.md)",
      path: "/docs/enterprize/index.md",
    });

    expect(result).toEqual('<p><a href="./workflow/">Some link</a></p>');
  });

  it("Removes .md and and adds '../'", () => {
    const result = transformer({
      contents: "[Some link](workflow.md)",
      path: "/docs/enterprize.md",
    });

    expect(result).toEqual('<p><a href="../workflow/">Some link</a></p>');
  });

  it("Replaces index.md with the '/'", () => {
    const result = transformer({
      contents: "[Some link](workflow/index.md)",
      path: "/docs/enterprize/index.md",
    });

    expect(result).toEqual('<p><a href="./workflow/">Some link</a></p>');
  });

  it("Correctly resolves parent folder", () => {
    const result = transformer({
      contents: "[Some link](../workflow.md)",
      path: "/docs/enterprize.md",
    });

    expect(result).toEqual('<p><a href="../../workflow/">Some link</a></p>');
  });

  it("Correctly resolves root paths", () => {
    const result = transformer({
      contents: "[Some link](/workflow.md)",
      path: "/docs/enterprize.md",
    });

    expect(result).toEqual('<p><a href="/workflow/">Some link</a></p>');
  });

  it("Correctly resolves non .md paths", () => {
    const result = transformer({
      contents: "[Some link](image.png)",
      path: "/docs/enterprize.md",
    });

    expect(result).toEqual('<p><a href="../image.png">Some link</a></p>');
  });

  it("Leave external links as is", () => {
    const result = transformer({
      contents: "[Some link](https://yandex.ru/workflow.md)",
      currentPublicDir: "/docs/enterprize.md",
    });

    expect(result).toEqual(
      '<p><a href="https://yandex.ru/workflow.md">Some link</a></p>'
    );
  });
});
