import { join } from "path";

export const generateSlugFromFilename = (
  dir = "/",
  filename: string
): string => {
  if (filename.match(/^http/)) return filename;

  const base = filename.match(/^\//) ? filename : join(dir, filename);

  return base
    .replace(/\.md/, "/")
    .replace(/\/index\//, "/")
    .replace("/#", "#");
};
