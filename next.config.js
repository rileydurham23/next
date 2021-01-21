/* eslint-env node */

const withMDX = require("@next/mdx")(); /* eslint-disable-line */

module.exports = withMDX({
  basePath: "/teleport/docs",
  trailingSlash: true,
  webpack: (config) => {
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

    return config;
  },
});
