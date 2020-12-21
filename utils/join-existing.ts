import { join } from "path";

export const joinExisting = (...parts: Array<string | undefined>) =>
  join(...parts.filter((d) => d));
