const remarkVariables = require("./.build/server/remark-variables");
const remarkIncludes = require("./.build/server/remark-includes");
const remarkCodeSnippet = require("./.build/server/remark-code-snippet");

const configFix = {
  settings: {
    bullet: "-",
    ruleRepetition: 3,
    fences: true,
    incrementListMarker: true,
    checkBlanks: true,
    resourceLink: true,
    emphasis: "*",
    tablePipeAlign: false,
    tableCellPadding: true,
    listItemIndent: 1,
  },
  plugins: ["frontmatter", "mdx"],
};

const configLint = {
  plugins: [
    "frontmatter",
    "mdx",
    [remarkVariables.default, { resolve: true, lint: true }],
    [remarkIncludes.default, { lint: true }],
    [remarkCodeSnippet.default, { lint: true }],
    "preset-lint-markdown-style-guide",
    ["lint-table-pipe-alignment", false],
    ["lint-table-cell-padding", false],
    ["lint-maximum-line-length", false],
    ["lint-no-consecutive-blank-lines", false],
    ["lint-no-emphasis-as-heading", false],
    ["lint-fenced-code-flag", { allowEmpty: true }],
    ["lint-file-extension", false],
    ["lint-no-duplicate-headings", false],
    ["lint-list-item-spacing", { checkBlanks: true }],
    ["lint-no-shell-dollars", false],
    ["lint-list-item-indent", "space"],
    "lint-ordered-list-marker-value",
    ["lint-maximum-heading-length", false],
    ["lint-no-shortcut-reference-link", false],
    ["validate-links", { repository: false }],
  ],
};

if (process.env.WITH_EXTERNAL_LINKS) {
  configLint.plugins.push([
    "lint-no-dead-urls",
    {
      skipLocalhost: true,
      skipUrlPatterns: [
        /teleport\.example\.com/,
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsaccountname",
        "https://github.com/gravitational/teleport/blob/v{{teleport_version}}/examples/chart/teleport-cluster/templates/clusterrole.yaml",
        "https://linuxize.com/post/linux-chown-command/",
      ],
    },
  ]);
}

module.exports = process.env.FIX ? configFix : configLint;
