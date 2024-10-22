import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  eslint.configs.recommended,
  { ignores: ["node_modules/", "dist/"] },
  {
    languageOptions: {
      globals: { ...globals.node },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "@stylistic": stylistic,
    },
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
  },
  stylistic.configs.customize({
    arrowParens: "always",
    commaDangle: "always-multiline",
    indent: 2,
    quotes: "double",
    semi: true,
  }),
  {
    files: ["**/*.ts"],
    plugins: { "@typescript-eslint": tsPlugin },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
);
