const ignoreAtRules = ["tailwind", "apply", "variants", "responsive", "screen"];

module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-standard-scss", "stylelint-config-standard-vue/scss"],
  plugins: ["@stylistic/stylelint-plugin"],
  rules: {
    // Tailwind CSS
    "at-rule-no-unknown": [true, { ignoreAtRules }],
    "no-descending-specificity": null,
    "scss/at-rule-no-unknown": [true, { ignoreAtRules }],
    // Other
    "at-rule-empty-line-before": null,
    "no-invalid-position-at-import-rule": null,
    "rule-empty-line-before": null,
    "scss/operator-no-newline-after": null,
    "scss/operator-no-unspaced": null,
  },
  ignoreFiles: ["**/*", "!**/*.{css,scss,vue}"],
};
