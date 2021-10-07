import vfile, { VFileOptions } from "vfile";
import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

import rehypeImages from "./rehype-images";

const transformer = (options: VFileOptions) =>
  unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehypeImages)
    .use(html)
    .processSync(vfile(options))
    .toString();

describe("utils/rehype-images", () => {
  it("Replaces paragrpah with images inside no multiple nodes", () => {
    const result = transformer({
      contents:
        "![Alt text](/images/image.png)\nParagraph\n![Alt text](/images/image.png)",
      path: "/docs/index.mdx",
    });

    expect(result).toEqual(
      '<img src="/images/image.png" alt="Alt text"><p>\nParagraph\n</p><img src="/images/image.png" alt="Alt text">'
    );
  });
});
