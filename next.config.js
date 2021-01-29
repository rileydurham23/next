/* eslint-env node */

const path = require("path");
const { getPlugins } = require("./__build/utils/plugins");

const mdxOptions = getPlugins({ removeTitle: true });

module.exports = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/_docs/:path*",
      },
    ];
  },
  basePath: "/teleport/docs",
  trailingSlash: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: ["@svgr/webpack", "url-loader"],
    });
    config.module.rules.push({
      test: /\.(png|jpg|woff2)$/i,
      exclude: /node_modules/,
      use: {
        loader: "url-loader",
      },
    });
    config.module.rules.push({
      test: /md-import-mapping/,
      use: [
        options.defaultLoaders.babel,
        path.resolve("__build/loaders/md-import-mapping-loader.js"),
      ],
    });
    config.module.rules.push({
      test: /\.(md|mdx)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: mdxOptions,
        },
        path.resolve("__build/loaders/liquid-loader.js"),
      ],
    });

    return config;
  },
};
