"use strict";

module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
        semi: true,
        tabWidth: 2,
        trailingComma: "all",
      },
    ],
  },
};
