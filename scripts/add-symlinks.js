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
  const source = resolve(docsSourcesRoot, version, "pages");
  const destination = resolve(docsPagesRoot, version);

  if (existsSync(source)) {
    symlinkSync(source, destination);
  }
});
