const ignoreAtRules = ["tailwind", "apply", "variants", "responsive", "screen"];

module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-standard-scss", "stylelint-config-standard-vue/scss"],
  plugins: ["stylelint-prettier"],
  rules: {
    // Tailwind CSS
    "at-rule-no-unknown": [true, { ignoreAtRules }],
    "scss/at-rule-no-unknown": [true, { ignoreAtRules }],
    "no-descending-specificity": null,
    // Prettier
    "prettier/prettier": [true, { tabWidth: 2 }],
    "selector-class-pattern": null,
    // Other
    "at-rule-empty-line-before": null,
    "no-invalid-position-at-import-rule": null,
    "rule-empty-line-before": null,
    "scss/operator-no-unspaced": null,
    "scss/operator-no-newline-after": null,
  },
};
