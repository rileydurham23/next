import { VFile } from "vfile";
import { Position } from "unist";

const getErrorLocationString = (file: VFile, position?: Position) => {
  const { path, cwd } = file;

  if (!path || !position) return;

  const location = path.replace(cwd, "");

  const {
    start: { line, column },
  } = position;

  return `\n       Filename "${location}", line ${line}, column ${column}`;
};

export default getErrorLocationString;
