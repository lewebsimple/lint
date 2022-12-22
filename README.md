# @lewebsimple/lint

> ESLint and Stylelint shareable configurations.

## Usage

### Install

```bash
pnpm add -D eslint @lewebsimple/eslint-config
pnpm add -D stylelint @lewebsimple/stylelint-config
```

### Configure (`package.json`)

```json
{
  "scripts": {
    "lint": "eslint --fix . && stylelint --fix \"**/*.{css,scss,vue}\""
  },
  "eslintConfig": {
    "extends": "@lewebsimple/eslint-config"
  },
  "stylelint": {
    "extends": "@lewebsimple/stylelint-config"
  }
}
```

### Configure VS Code

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [VS Code Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) then add the following in JSON settings:

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.run": "onSave",
  "eslint.validate": [
    "javascript",
    "typescript",
    "vue"
  ],
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
