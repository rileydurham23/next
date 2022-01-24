import { suite } from "uvu";
import * as assert from "uvu/assert";

import { VFile, VFileOptions } from "vfile";
import { readFileSync } from "fs";
import { resolve } from "path";
import { remark } from "remark";
import mdx from "remark-mdx";
import remarkVariables, { RemarkVariablesOptions } from "./remark-variables";
import type { Config } from "./config-docs";

const docsConfig: Config = {
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

const transformer = (
  vfileOptions: VFileOptions,
  pluginOptions: RemarkVariablesOptions = { resolve: true }
) => {
  const file = new VFile(vfileOptions);

  file.data.docsConfig = docsConfig;

  return remark()
    .use(mdx)
    .use(remarkVariables, pluginOptions)
    .processSync(file);
};

const Suite = suite("utils/remark-variables");

Suite("Fixture match result", () => {
  const value = readFileSync(
    resolve("server/fixtures/variables-source.mdx"),
    "utf-8"
  );

  const result = transformer({
    value,
    path: "/content/4.0/docs/pages/filename.mdx",
  }).toString();

  const expected = readFileSync(
    resolve("server/fixtures/variables-result.mdx"),
    "utf-8"
  );

  assert.equal(result, expected);
});

Suite("Returns correct warnings on lint", () => {
  const value = readFileSync(
    resolve("server/fixtures/variables-source.mdx"),
    "utf-8"
  );

  const result = transformer(
    {
      value,
      path: "/content/4.0/docs/pages/filename.mdx",
    },
    { lint: true, resolve: false }
  );

  const errors = result.messages.map(({ message }) => message);

  const expectedErrors = ["Non existing varaible name (=variable=)"];

  assert.equal(errors, expectedErrors);
});

Suite.run();
