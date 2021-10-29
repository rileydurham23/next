import { Transformer } from "unified";
import yaml from "js-yaml";
import { createMdxjsEsmExportNode } from "./mdx-helpers";
import { fetchVideoMeta, Meta, FullMeta } from "./youtube-meta";

export interface HeaderMeta {
  rank: number;
  id: string;
  title: string;
}

const defaultOptions = {
  name: "meta",
  skipVideoBanner: false,
};

interface RemarkImportFrontmatterOptions {
  name: string;
  skipVideoBanner: boolean;
}

export default function remarkImportFrontmatter({
  name = defaultOptions.name,
  skipVideoBanner = defaultOptions.skipVideoBanner,
}: RemarkImportFrontmatterOptions = defaultOptions): Transformer {
  return async (root: MdxastRootNode) => {
    const children = root.children as MdxastNode[];

    const firstChild = children[0];
    let config: { videoBanner?: string | Meta | FullMeta } = {};

    if (firstChild && firstChild.type === "yaml") {
      config = yaml.load(firstChild.value as string) as Record<string, unknown>;
    }

    if (skipVideoBanner && "videoBanner" in config) {
      delete config.videoBanner;
    }

    if ("videoBanner" in config && typeof config.videoBanner === "string") {
      config.videoBanner = await fetchVideoMeta(config.videoBanner);
    }

    root.children.unshift(
      createMdxjsEsmExportNode(name, config as Record<string, unknown>)
    );
  };
}
