/*
 * Creates symlinks from mdx files in "content/X.X/docs/" to `pages/ver/X.X/`.
 */

const { symlinkSync, rmdirSync, existsSync, mkdirSync } = require("fs");
const { resolve } = require("path");
const { loadConfig } = require("../.build/server/config-site");

const { versions } = loadConfig();

const docsPagesRoot = "pages/docs/ver";

if (existsSync(docsPagesRoot)) {
  rmdirSync(docsPagesRoot, { recursive: true });
}
mkdirSync(docsPagesRoot, { recursive: true });

versions.forEach((version) => {
  const source = resolve("content", version, "docs/pages");

  const destination = resolve(docsPagesRoot, version);

  if (existsSync(source)) {
    symlinkSync(source, destination);
  }
});
