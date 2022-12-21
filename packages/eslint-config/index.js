'use strict';

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // Prettier
    "prettier/prettier": ["error", {
      printWidth: 120,
      semi: true,
      tabWidth: 2,
      trailingComma: "all",
    }],
  },
};
