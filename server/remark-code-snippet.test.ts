import { suite } from "uvu";
import * as assert from "uvu/assert";

import { VFile, VFileOptions } from "vfile";
import { remark } from "remark";
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
    .processSync(new VFile(options));

const Suite = suite("server/remark-code-snippet");

Suite("Fixture match result on resolve", () => {
  const value = readFileSync(
    resolve("server/fixtures/includes/includes-code-snippet-simplest.mdx"),
    "utf-8"
  );

  const result = transformer({
    value,
    path: "/docs/index.mdx",
  }).toString();

  const expected = readFileSync(
    resolve("server/fixtures/result/code-snippet-simplest.mdx"),
    "utf-8"
  );

  assert.equal(result, expected);
});

Suite("Multiline command support", () => {
  const value = readFileSync(
    resolve("server/fixtures/includes/includes-code-snippet-multiline.mdx"),
    "utf-8"
  );

  const result = transformer({
    value,
    path: "/docs/index.mdx",
  }).toString();

  const expected = readFileSync(
    resolve("server/fixtures/result/code-snippet-multiline.mdx"),
    "utf-8"
  );

  assert.equal(result, expected);
});

Suite("Heredoc format support", () => {
  const value = readFileSync(
    resolve("server/fixtures/includes/includes-code-snippet-heredoc.mdx"),
    "utf-8"
  );

  const result = transformer({
    value,
    path: "/docs/index.mdx",
  }).toString();

  const expected = readFileSync(
    resolve("server/fixtures/result/code-snippet-heredoc.mdx"),
    "utf-8"
  );

  assert.equal(result, expected);
});

Suite("Support output to file mode for heredoc format", () => {
  const value = readFileSync(
    resolve(
      "server/fixtures/includes/includes-code-snippet-output-to-file-mode.mdx"
    ),
    "utf-8"
  );

  assert.not.throws(() =>
    transformer({
      value,
      path: "/docs/index.mdx",
    })
  );
});

Suite("If a multiline command ends with a slash", () => {
  const value = readFileSync(
    resolve(
      "server/fixtures/includes/includes-code-snippet-multiline-error.mdx"
    ),
    "utf-8"
  );

  assert.not.throws(() =>
    transformer({
      value,
      path: "/docs/index.mdx",
    })
  );
});

Suite("If a heredoc format command ends without a closing tag", () => {
  const value = readFileSync(
    resolve("server/fixtures/includes/includes-code-snippet-heredoc-error.mdx"),
    "utf-8"
  );

  assert.not.throws(() =>
    transformer({
      value,
      path: "/docs/index.mdx",
    })
  );
});

Suite("Returns correct error message on heredoc format lint", () => {
  const value = readFileSync(
    resolve("server/fixtures/includes/includes-code-snippet-heredoc-error.mdx"),
    "utf-8"
  );

  assert.throws(
    () =>
      transformer(
        {
          value,
          path: "/docs/index.mdx",
        },
        { lint: true, resolve: false }
      ),
    "No closing line for heredoc format"
  );
});

Suite("Returns correct error message on multiline command lint", () => {
  const value = readFileSync(
    resolve(
      "server/fixtures/includes/includes-code-snippet-multiline-error.mdx"
    ),
    "utf-8"
  );

  assert.throws(
    () =>
      transformer(
        {
          value,
          path: "/docs/index.mdx",
        },
        { lint: true, resolve: false }
      ),
    "The last string in the multiline command has to be without symbol \\"
  );
});

Suite.run();
