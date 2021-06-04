import { resolve } from "path";
import vfile, { VFileOptions } from "vfile";
import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

import rehypeImages from "./rehype-images";

const staticPath = "/images/";
const destinationDir = resolve(`utils/fixtures/images`);

const transformer = (options: VFileOptions) =>
  unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehypeImages, { staticPath, destinationDir })
    .use(html)
    .processSync(vfile(options))
    .toString();

describe("utils/rehype-images", () => {
  it("Add actual sizes to image withiut suffix", () => {
    const result = transformer({
      contents: "![Alt text](/images/image.png)",
      path: "/docs/index.mdx",
    });

    expect(result).toEqual(
      '<img src="/images/image.png" alt="Alt text" width="300" height="300">'
    );
  });

  it("Reduces sizes by 1/3 if path ends with @1.5x", () => {
    const result = transformer({
      contents: "![Alt text](/images/image@1.5x.png)",
      path: "/docs/index.mdx",
    });

    expect(result).toEqual(
      '<img src="/images/image@1.5x.png" alt="Alt text" width="200" height="200">'
    );
  });

  it("Reduces sizes by 1/2 if path ends with @2x", () => {
    const result = transformer({
      contents: "![Alt text](/images/image@2x.png)",
      path: "/docs/index.mdx",
    });

    expect(result).toEqual(
      '<img src="/images/image@2x.png" alt="Alt text" width="150" height="150">'
    );
  });

  it("Reduces sizes by 2/3 if path ends with @3x", () => {
    const result = transformer({
      contents: "![Alt text](/images/image@3x.png)",
      path: "/docs/index.mdx",
    });

    expect(result).toEqual(
      '<img src="/images/image@3x.png" alt="Alt text" width="100" height="100">'
    );
  });

  it("Replaces paragrpah with images inside no multiple nodes", () => {
    const result = transformer({
      contents:
        "![Alt text](/images/image.png)\nParagraph\n![Alt text](/images/image.png)",
      path: "/docs/index.mdx",
    });

    expect(result).toEqual(
      '<img src="/images/image.png" alt="Alt text" width="300" height="300"><p>\nParagraph\n</p><img src="/images/image.png" alt="Alt text" width="300" height="300">'
    );
  });
});
