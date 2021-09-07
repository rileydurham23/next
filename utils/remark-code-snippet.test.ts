import vfile, { VFileOptions } from "vfile";
import remark from "remark";
import { readFileSync } from "fs";
import { resolve } from "path";
import mdx from "remark-mdx";
import remarkCodeSnippet from "./remark-code-snippet";

const transformer = (options: VFileOptions) =>
  remark()
    .use(mdx)
    .use(remarkCodeSnippet)
    .processSync(vfile(options))
    .toString();

describe("utils/remark-code-snippet", () => {
  it("Fixture match result on resolve", () => {
    const contents = readFileSync(
      resolve("utils/fixtures/includes/includes-code-snippet-simplest.mdx"),
      "utf-8"
    );

    const result = transformer({
      contents,
      path: "/docs/index.mdx",
    });

    const expected = readFileSync(
      resolve("utils/fixtures/result/code-snippet-simplest.mdx"),
      "utf-8"
    );

    expect(result).toEqual(expected);
  });

  it("Multiline command support", () => {
    const contents = readFileSync(
      resolve("utils/fixtures/includes/includes-code-snippet-multiline.mdx"),
      "utf-8"
    );

    const result = transformer({
      contents,
      path: "/docs/index.mdx",
    });

    const expected = readFileSync(
      resolve("utils/fixtures/result/code-snippet-multiline.mdx"),
      "utf-8"
    );

    expect(result).toEqual(expected);
  });

  it("Heredoc format support", () => {
    const contents = readFileSync(
      resolve("utils/fixtures/includes/includes-code-snippet-heredoc.mdx"),
      "utf-8"
    );

    const result = transformer({
      contents,
      path: "/docs/index.mdx",
    });

    const expected = readFileSync(
      resolve("utils/fixtures/result/code-snippet-heredoc.mdx"),
      "utf-8"
    );

    expect(result).toEqual(expected);
  });

  it("If a multiline command ends with a slash", () => {
    const contents = readFileSync(
      resolve(
        "utils/fixtures/includes/includes-code-snippet-multiline-error.mdx"
      ),
      "utf-8"
    );

    expect(() =>
      transformer({
        contents,
        path: "/docs/index.mdx",
      })
    ).not.toThrow();
  });

  it("If a heredoc format command ends without a closing tag", () => {
    const contents = readFileSync(
      resolve(
        "utils/fixtures/includes/includes-code-snippet-heredoc-error.mdx"
      ),
      "utf-8"
    );

    expect(() =>
      transformer({
        contents,
        path: "/docs/index.mdx",
      })
    ).not.toThrow();
  });
});
