/*
 * This pugin provides data for other docs plugins to work.
 * It is moved to the separate plugin mostly to simplify tests.
 */

import type { Transformer } from "unified";
import { getVersion, getVersionRootPath } from "./docs-helpers";
import { loadConfig, Config as DocsConfig } from "./config-docs";

interface RemarkDocsConfigOptions {
  config?: DocsConfig;
  root?: string;
}

export default function remarkDocsConfig({
  config,
  root,
}: RemarkDocsConfigOptions = {}): Transformer {
  return (_, vfile) => {
    vfile.data.docsRoot = root || getVersionRootPath(vfile.path);
    vfile.data.docsConfig = config || loadConfig(getVersion(vfile.path));
  };
}
