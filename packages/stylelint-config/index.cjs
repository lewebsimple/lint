const { resolve } = require("path");

module.exports = {
  configBaseDir: resolve(__dirname, "node_modules"),
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
