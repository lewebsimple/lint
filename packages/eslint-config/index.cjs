const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["*.js", "*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  rules: {
    // TypeScript
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports", disallowTypeAnnotations: false },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-undef": "off",
    "no-unused-vars": "off",

    // Prettier
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
});
