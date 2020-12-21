module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest", "react-hooks", "jsx-a11y"],
  extends: [
    "prettier-standard/prettier-file",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
  },
  env: {
    "jest/globals": true,
  },
  settings: {
    react: {
      version: "detect",
    },
    linkComponents: [{ name: "Link", linkAttribute: "href" }],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
