module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      diagnostics: false,
      isolatedModules: true,
      tsconfig: {
        jsx: "react",
      },
    },
  },
  moduleDirectories: ["node_modules", "."],
  cacheDirectory: "node_modules/.cache/jest",
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/test/__mocks__/iconMock.js",
  },
};
