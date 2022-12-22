const { defineConfig } = require("eslint-define-config");
const { getPackageInfoSync } = require("local-pkg");

// Determine Vue version
const pkg = getPackageInfoSync("vue");
let vueVersion = pkg && pkg.version;
vueVersion = +(vueVersion && vueVersion[0]);
vueVersion = Number.isNaN(vueVersion) ? 3 : vueVersion;

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    vueVersion === 3 ? "plugin:vue/vue3-recommended" : "plugin:vue/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.js", "*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {
    // Vue
    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": "off",
    "vue/multi-word-component-names": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase", { registeredComponentsOnly: false }],
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
