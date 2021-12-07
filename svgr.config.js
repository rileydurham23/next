module.exports = {
  icon: true,
  jsx: {
    babelConfig: {
      plugins: [
        [
          "@svgr/babel-plugin-remove-jsx-attribute",
          {
            elements: ["svg", "g", "path", "rect"],
            attributes: ["xmlns:lucid", "lucid:page-tab-id"],
          },
        ],
      ],
    },
  },
};
