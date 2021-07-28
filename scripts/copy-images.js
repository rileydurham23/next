/*
  We need to store images that are used inside the mdx pages inside
  the `.node/cache/` folder to preserve it on rebuilds, but to make them
  publicitly accessable, we need to store them inside `public`,
  so we copy them after build manually.
*/

const shell = require("child_process").execSync;
const { existsSync, mkdirSync } = require("fs");
const { destinationDir, publicDir } = require("../.build/utils/mdx-paths");

if (process.env.NODE_ENV === "production") {
  if (!existsSync(destinationDir)) {
    mkdirSync(destinationDir, { recursive: true });
  }

  if (existsSync(publicDir)) {
    rmdirSync(publicDir, { recursive: true });
  }

  mkdirSync(publicDir, { recursive: true });
  shell(`cp -rf ${destinationDir}/* ${publicDir}`);
}
