import { join } from "path";
import glob from "glob";
import { versions, latest } from "config";

const DOC_DIR_NAME = "content/teleport/docs";
const DOCS_DIRECTIORY = join(process.cwd(), DOC_DIR_NAME);

const getSlugListForVersion = (version) => {
  const path = join(DOCS_DIRECTIORY, version);
  const root = version === latest ? "" : join("/ver", version);

  return glob
    .sync(join(path, "**/*.md"))
    .filter((filename) => !/README.md$/.exec(filename))
    .map((filename) => ({
      filename: filename.replace(DOCS_DIRECTIORY, DOC_DIR_NAME),
      slug: filename.replace(/\/?(index)?.md$/, "/").replace(path, root),
    }));
};

const getSlugList = () =>
  versions.reduce((result, version) => {
    return [...result, ...getSlugListForVersion(version)];
  }, []);

const mapping = `
import dynamic from "next/dynamic";
import { Loading as loading } from "components/DocsPage";

const componentsMap = {
  ${getSlugList()
    .map(
      ({ filename, slug }) =>
        `"${slug}": dynamic(() => import("${filename}"), { loading }),`
    )
    .join("\n")}
};

const getComponent = (path) => {
  const basePath = path.split("#")[0];
  const normalizedPath = basePath.endsWith("/") ? basePath : basePath + "/";

  return componentsMap[normalizedPath] || '';
}

export default getComponent;
`;

function loader() {
  return mapping;
}

module.exports = loader;
