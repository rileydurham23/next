import { readFileSync } from "fs";
import matter from "gray-matter";

/* next build happens in the single process so we can cache file data */

const cache = {};

export const getFrontMatter = (path: string) => {
  let result = cache[path];

  if (!result) {
    const fileContent = readFileSync(path, "utf-8");

    const { data } = matter(fileContent);

    result = cache[path] = data;
  }

  return result;
};
