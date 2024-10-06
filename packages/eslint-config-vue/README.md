# `@andre-brdoch/eslint-config-vue`

An opinionated and sharable Vue.js eslint config for the world to use!

## Installation

```bash
# npm
npm i -D @andre-brdoch/eslint-config-vue eslint@^8.56.0

# yarn
yarn add -D @andre-brdoch/eslint-config-vue eslint@^8.56.0
```

## Usage

```js
// .eslintrc.cjs

module.exports = {
  // regular config...

  overrides: [
    {
      // vue files
      files: ['**/*.vue'],
      extends: ['@andre-brdoch/eslint-config-vue'],
    },
  ],
}
```

Done! 🙌

## Editor integration

### VS Code

Add the extension [`dbaeumer.vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

To make other developers get a warning if they open the project without the extension installed, commit this to your project under `.vscode/extensions.json`:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint"]
}
```

Edit your VSCode settings to include:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit" // or "always"
  }
}
```

To make this work also for other users, do this on project-level rather than user-level, by committing it to your project under `.vscode/settings.json`.
