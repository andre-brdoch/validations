# `@andre-brdoch/prettier-config`

A sharable prettier config for the world to use 🎨

## Installation

```bash
# npm
npm i -D @andre-brdoch/prettier-config prettier@^3.0.0

# yarn
yarn add -D @andre-brdoch/prettier-config prettier@^3.0.0
```

## Usage

```js
// .prettierrc.cjs
const config = require('@andre-brdoch/prettier-config')
module.exports = config
```

Done! 👌

## Editor integration

### VS Code

Add the extension [`esbenp.prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

To make other developers get a warning if they open the project without the extension installed, commit this to your project under `.vscode/extensions.json`:

```json
{
  "recommendations": ["esbenp.prettier-vscode"]
}
```

Edit your VSCode settings to include:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

To make this work also for other users, do this on project-level rather than user-level, by committing it to your project under `.vscode/settings.json`.
