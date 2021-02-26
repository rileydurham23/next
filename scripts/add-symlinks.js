const { symlinkSync, rmdirSync, existsSync, mkdirSync } = require("fs");
const { resolve } = require("path");
const {
  versions,
  docsSourcesRoot,
  docsPagesRoot,
} = require("../__build/config");

rmdirSync(docsPagesRoot, { recursive: true });
mkdirSync(docsPagesRoot);

versions.forEach((version) => {
  let source;

  if (version === "6.0") {
    source = resolve("content", version, "docs/pages");
  } else {
    source = resolve(docsSourcesRoot, version, "pages");
  }

  const destination = resolve(docsPagesRoot, version);

  if (existsSync(source)) {
    symlinkSync(source, destination);
  }
});
