import vfile, { VFileOptions } from "vfile";
import remark from "remark";
import { readFileSync } from "fs";
import { resolve } from "path";
import mdx from "remark-mdx";
import remarkCodeSnippet, {
  RemarkCodeSnippetOptions,
} from "./remark-code-snippet";

const transformer = (
  options: VFileOptions,
  pluginOptions: RemarkCodeSnippetOptions = { resolve: true }
) =>
  remark()
    .use(mdx)
    .use(remarkCodeSnippet, pluginOptions)
    .processSync(vfile(options));

describe("utils/remark-code-snippet", () => {
  it("Fixture match result on resolve", () => {
    const contents = readFileSync(
      resolve("utils/fixtures/includes/includes-code-snippet-simplest.mdx"),
      "utf-8"
    );

    const result = transformer({
      contents,
      path: "/docs/index.mdx",
    }).toString();

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
    }).toString();

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
    }).toString();

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

  it("Returns correct error message on heredoc format lint", () => {
    const contents = readFileSync(
      resolve(
        "utils/fixtures/includes/includes-code-snippet-heredoc-error.mdx"
      ),
      "utf-8"
    );

    expect(() =>
      transformer(
        {
          contents,
          path: "/docs/index.mdx",
        },
        { lint: true, resolve: false }
      )
    ).toThrow("No closing line for heredoc format");
  });

  it("Returns correct error message on multiline command lint", () => {
    const contents = readFileSync(
      resolve(
        "utils/fixtures/includes/includes-code-snippet-multiline-error.mdx"
      ),
      "utf-8"
    );

    expect(() =>
      transformer(
        {
          contents,
          path: "/docs/index.mdx",
        },
        { lint: true, resolve: false }
      )
    ).toThrow(
      "The last string in the multiline command has to be without symbol \\"
    );
  });
});
