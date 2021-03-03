const { symlinkSync, rmdirSync, existsSync, mkdirSync } = require("fs");
const { resolve } = require("path");
const { versions } = require("../config.json");

const docsPagesRoot = "pages/ver";

rmdirSync(docsPagesRoot, { recursive: true });
mkdirSync(docsPagesRoot);

versions.forEach((version) => {
  const source = resolve("content", version, "docs/pages");

  const destination = resolve(docsPagesRoot, version);

  if (existsSync(source)) {
    symlinkSync(source, destination);
  }
});
