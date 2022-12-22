# @lewebsimple/eslint-config

- Double quotes, semicolons, trailing commas
- 2 characters tab width
- Works with JavaScript, TypeScript and Vue.js
- Detects Vue.js version (2/3)

## Usage

### Install

```bash
pnpm add -D eslint @lewebsimple/eslint-config
```

### Configure (`package.json`)

```json
{
  "scripts": {
    "lint": "eslint --fix .",
  },
  "eslintConfig": {
    "extends": "@lewebsimple/eslint-config"
  }
}
```

### Configure VS Code

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and add the following in JSON settings:

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
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.run": "onSave",
  "eslint.validate": [
    "javascript",
    "typescript",
    "vue"
  ]
}
```
