/* eslint-env node */
const { resolve } = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const mdxOptions = require("./.build/utils/mdx-config");
const mdxDocsOptions = require("./.build/utils/mdx-docs-config");
const {
  getRedirects,
  getLatestVersionRewirites,
  generateSitemap,
} = require("./.build/utils/paths");

const DOCS_DIRECTORY = resolve(__dirname, "pages/docs");
const CONTENT_DIRECTORY = resolve(__dirname, "content");
const COMPANY_LOGOS_DIRECTORY = resolve(__dirname, "components/Company");

const urlLoaderOptions = {
  limit: false,
  noquotes: true,
  fallback: "file-loader",
  publicPath: `/_next/static/images/`,
  outputPath: "static/images/",
  name: "[hash].[ext]",
};

module.exports = withBundleAnalyzer({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  rewrites: async () => getLatestVersionRewirites(),
  redirects: async () => getRedirects(),
  images: {
    path: "/_next/image/",
  },
  trailingSlash: true,
  webpack: (config, options) => {
    if (!options.dev) generateSitemap();

    config.module.rules.push({
      test: /\.svg$/,
      exclude: [/node_modules/, COMPANY_LOGOS_DIRECTORY],
      use: [
        "@svgr/webpack",
        {
          loader: "url-loader",
          options: urlLoaderOptions,
        },
      ],
    });
    config.module.rules.push({
      test: /\.svg$/,
      include: [COMPANY_LOGOS_DIRECTORY],
      use: [
        {
          loader: "url-loader",
          options: urlLoaderOptions,
        },
      ],
    });
    config.module.rules.push({
      test: /\.(png|jpg|woff2)$/i,
      exclude: /node_modules/,
      use: {
        loader: "url-loader",
        options: urlLoaderOptions,
      },
    });
    config.module.rules.push({
      test: /\.(md|mdx)$/,
      include: [DOCS_DIRECTORY, CONTENT_DIRECTORY],
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
      exclude: [DOCS_DIRECTORY, CONTENT_DIRECTORY],
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: mdxOptions.default,
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
