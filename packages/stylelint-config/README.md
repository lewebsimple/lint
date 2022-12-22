# @lewebsimple/stylelint-config

- 2 characters tab width
- Works with CSS, SCSS and Vue.js
- Ignore Tailwind CSS at-rules

## Usage

### Install

```bash
pnpm add -D stylelint @lewebsimple/stylelint-config
```

### Configure (`package.json`)

```json
{
  "scripts": {
    "lint": "stylelint --fix \"**/*.{css,scss,vue}\""
  },
  "stylelint": {
    "extends": "@lewebsimple/stylelint-config"
  }
}
```

### Configure VS Code

Install [VS Code Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) and add the following in JSON settings:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "css.validate": false,
  "scss.validate": false,
  "stylelint.packageManager": "pnpm",
  "stylelint.validate": [
    "css",
    "scss",
    "vue"
  ],
  "tailwindCSS.experimental.configFile": ".nuxt/tailwind.config.cjs"
}
```
