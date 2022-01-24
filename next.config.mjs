/* eslint-env node */
import { resolve } from "path";
import bundleAnalyzer from "@next/bundle-analyzer";
import mdxSiteOptions from "./.build/server/mdx-config-site.mjs";
import mdxDocsOptions from "./.build/server/mdx-config-docs.mjs";
import { loadConfig } from "./.build/server/config-site.mjs";
import {
  getRedirects,
  generateSitemap,
  generateFullSitemap,
} from "./.build/server/paths.mjs";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const { latest } = loadConfig();
const PAGES_DIRECTORY = resolve("pages");
const CONTENT_DIRECTORY = resolve("content");

export default withBundleAnalyzer({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  rewrites: async () => [
    {
      source: "/docs/:path*",
      destination: `/docs/ver/${latest}/:path*`,
    },
  ],
  redirects: async () => getRedirects(),
  outputFileTracing: false,
  images: {
    path: "/_next/image",
    disableStaticImages: true,
    domains: ["i.ytimg.com"],
  },
  trailingSlash: true,
  env: {
    DOCS_LATEST_VERSION: latest,
  },
  webpack: (config, options) => {
    if (!options.dev) {
      generateSitemap();
      generateFullSitemap();
    }
    config.output.assetModuleFilename = "static/media/[hash][ext]";

    config.module.rules.push({
      test: /\.(png|jpg|webp|gif|mp4|webm|ogg|swf|ogv|woff2)$/i,
      type: "asset/resource",
    });

    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          issuer: /\.[mjt]sx?$/,
          resourceQuery: /react/,
          use: "@svgr/webpack",
        },
        {
          type: "asset/resource",
        },
      ],
    });

    config.module.rules.push({
      test: /\.(md|mdx)$/,
      include: CONTENT_DIRECTORY,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: mdxDocsOptions,
        },
      ],
    });
    config.module.rules.push({
      test: /\.(md|mdx)$/,
      include: PAGES_DIRECTORY,
      exclude: CONTENT_DIRECTORY,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: mdxSiteOptions,
        },
      ],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader",
    });

    return config;
  },
});
