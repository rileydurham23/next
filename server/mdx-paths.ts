import { resolve } from "path";

export const staticPath = "/static/assets/";
export const publicDir = resolve(`public/${staticPath}`);
export const destinationDir =
  process.env.NODE_ENV === "production"
    ? resolve(`.next/cache/_IMAGES/${staticPath}`)
    : publicDir;
