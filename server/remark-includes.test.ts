import vfile, { VFileOptions } from "vfile";
import { readFileSync } from "fs";
import { resolve } from "path";
import remark from "remark";
import mdx from "remark-mdx";
import remarkGFM from "remark-gfm";
import remarkIncludes, { RemarkIncludesOptions } from "./remark-includes";
import { getVersionRootPath } from "./docs-helpers";

jest.mock("./docs-helpers");

const mockedGetVersionRootPath = getVersionRootPath as jest.Mock<string>;

mockedGetVersionRootPath.mockImplementation(() =>
  resolve("server/fixtures/includes/")
);

const transformer = (
  vfileOptions: VFileOptions,
  pluginOptions: RemarkIncludesOptions = { resolve: true }
) =>
  remark()
    .use(mdx)
    .use(remarkIncludes, pluginOptions)
    .use(remarkGFM)
    .processSync(vfile(vfileOptions));

describe("server/remark-includes", () => {
  it("Fixture match result on resolve", () => {
    const contents = readFileSync(
      resolve("server/fixtures/includes-source.mdx"),
      "utf-8"
    );

    const result = transformer({
      contents,
      path: "/content/4.0/docs/pages/filename.mdx",
    }).toString();

    const expected = readFileSync(
      resolve("server/fixtures/includes-result.mdx"),
      "utf-8"
    );

    expect(result).toEqual(expected);
  });

  it("Returns correct warnings on lint", () => {
    const contents = readFileSync(
      resolve("server/fixtures/includes-source.mdx"),
      "utf-8"
    );

    const result = transformer(
      {
        contents,
        path: "/content/4.0/docs/pages/filename.mdx",
      },
      { lint: true, resolve: false }
    );

    const errors = result.messages.map(({ message }) => message);

    const expectedErrors = [
      "Includes only works if they are the only content on the line",
      "Wrong import path non-existing.mdx in file /content/4.0/docs/pages/filename.mdx.",
    ];

    expect(errors).toEqual(expectedErrors);
  });

  it("Leave includes in place on { resolve: false }", () => {
    const contents = readFileSync(
      resolve("server/fixtures/includes-source.mdx"),
      "utf-8"
    );

    const result = transformer(
      {
        contents,
        path: "/content/4.0/docs/pages/filename.mdx",
      },
      { lint: false, resolve: false }
    ).toString();

    expect(contents).toEqual(result);
  });

  it("Multiple includes resolve in code block", () => {
    const contents = readFileSync(
      resolve("server/fixtures/includes-multiple-source.mdx"),
      "utf-8"
    );

    const result = transformer({
      contents,
      path: "/content/4.0/docs/pages/filename.mdx",
    }).toString();

    const expected = readFileSync(
      resolve("server/fixtures/includes-multiple-result.mdx"),
      "utf-8"
    );

    expect(result).toEqual(expected);
  });
});
