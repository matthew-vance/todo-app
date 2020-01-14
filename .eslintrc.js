module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/style",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "jest"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    quotes: [2, "double"],
    semi: [2, "always"],
    "comma-dangle": [2, "always-multiline"],
  },
  ignorePatterns: ["node_modules/", "dist/"],
};
