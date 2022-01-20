import vfile, { VFileOptions } from "vfile";
import { readFileSync } from "fs";
import { resolve } from "path";
import remark from "remark";
import mdx from "remark-mdx";
import remarkVariables, { RemarkVariablesOptions } from "./remark-variables";
import { loadConfig, Config } from "./config-docs";

jest.mock("./config-docs");

const config: Config = {
  navigation: [
    {
      icon: "stack",
      title: "Documentation",
      entries: [{ title: "Introduction", slug: "/" }],
    },
  ],
  variables: {
    version: "1.0",
    teleport: {
      version: "1.0.1",
    },
  },
};

const mockedLoadConfig = loadConfig as jest.Mock<Config>;

mockedLoadConfig.mockImplementation(() => config);

const transformer = (
  vfileOptions: VFileOptions,
  pluginOptions: RemarkVariablesOptions = { resolve: true }
) =>
  remark()
    .use(mdx)
    .use(remarkVariables, pluginOptions)
    .processSync(vfile(vfileOptions));

describe("utils/remark-variables", () => {
  it("Fixture match result", () => {
    const contents = readFileSync(
      resolve("server/fixtures/variables-source.mdx"),
      "utf-8"
    );

    const result = transformer({
      contents,
      path: "/content/4.0/docs/pages/filename.mdx",
    }).toString();

    const expected = readFileSync(
      resolve("server/fixtures/variables-result.mdx"),
      "utf-8"
    );

    expect(result).toEqual(expected);
  });

  it("Returns correct warnings on lint", () => {
    const contents = readFileSync(
      resolve("server/fixtures/variables-source.mdx"),
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

    const expectedErrors = ["Non existing varaible name (=variable=)"];

    expect(errors).toEqual(expectedErrors);
  });
});
