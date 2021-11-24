const { resolve } = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const COMPANY_LOGOS_DIRECTORY = resolve(__dirname, "..", "components/Company");

module.exports = {
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "storybook-addon-turbo-build",
    "storybook-addon-next-router",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // This plugin will make `baseUrl` prop from tsconfig.json
    // work with DocGen plugin, without it it will throw errors
    config.resolve.plugins = [new TsconfigPathsPlugin({})];

    // Here we remove default svg config to replace it with svgr
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
      exclude: [/node_modules/, COMPANY_LOGOS_DIRECTORY],
      use: ["@svgr/webpack", "file-loader"],
    });

    config.module.rules.push({
      test: /\.svg$/,
      include: [COMPANY_LOGOS_DIRECTORY],
      type: "asset/resource",
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader",
    });

    return config;
  },
};
