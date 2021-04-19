const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));

    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test.toString().includes("svg")) {
        const test = rule.test
          .toString()
          .replace("svg|", "")
          .replace(/\//g, "");
        return { ...rule, test: new RegExp(test) };
      } else {
        return rule;
      }
    });

    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};
