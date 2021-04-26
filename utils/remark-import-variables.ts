import { Transformer } from "unified";
import { Value } from "estree-util-value-to-estree";
import { MdxastRootNode } from "./unist-types";
import createMdxjsEsmNode from "./create-mdxjsesm-node";
import { loadDocsConfig, loadSiteConfig } from "./config";
import { getVersion, getGithubURL } from "./docs-helpers";

const { versions, latest } = loadSiteConfig();

export default function remarkImportVariables(): Transformer {
  return (root: MdxastRootNode, vfile) => {
    const current = getVersion(vfile.path);
    const { navigation } = loadDocsConfig(current);

    root.children.unshift(
      createMdxjsEsmNode("navigation", (navigation as unknown) as Value)
    );
    root.children.unshift(
      createMdxjsEsmNode("githubUrl", getGithubURL(vfile.path))
    );
    root.children.unshift(
      createMdxjsEsmNode("versions", {
        current,
        latest,
        available: versions,
      })
    );
  };
}
