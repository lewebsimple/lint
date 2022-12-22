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
  ignorePatterns: [".nuxt", ".output", "dist", "node_modules"],
  plugins: ["simple-import-sort"],
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
    // Imports
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

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

    // Vue
    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": "off",
    "vue/multi-word-component-names": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase", { registeredComponentsOnly: false }],
    "vue/html-self-closing": [
      "error",
      {
        html: { void: "any", normal: "always", component: "always" },
        svg: "always",
        math: "always",
      },
    ],
  },
});
