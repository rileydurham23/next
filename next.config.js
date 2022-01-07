/* eslint-env node */
const { resolve } = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const mdxSiteOptions = require("./.build/server/mdx-config-site");
const mdxDocsOptions = require("./.build/server/mdx-config-docs");
const { loadSiteConfig } = require("./.build/server/config");
const {
  getRedirects,
  generateSitemap,
  generateFullSitemap,
} = require("./.build/server/paths");

const { latest } = loadSiteConfig();
const PAGES_DIRECTORY = resolve(__dirname, "pages");
const CONTENT_DIRECTORY = resolve(__dirname, "content");

module.exports = withBundleAnalyzer({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  rewrites: async () => [
    {
      source: "/docs/:path*",
      destination: `/docs/ver/${latest}/:path*`,
    },
  ],
  redirects: async () => getRedirects(),
  images: {
    path: "/_next/image/",
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
    config.output.assetModuleFilename = "static/images/[hash][ext]";

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
          options: mdxDocsOptions.default,
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
          options: mdxSiteOptions.default,
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
