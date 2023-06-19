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
    "prettier/prettier": [true, { printWidth: 120, tabWidth: 2 }],
    "selector-class-pattern": null,
  },
};
