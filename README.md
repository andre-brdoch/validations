# `validations`

## Development

```bash
# ensure node v20 is installed
node -v
# otherwise install
nvm install 20
nvm use 20

corepack enable
yarn
```

Note that this repo uses [Yarn PnP](https://yarnpkg.com/features/pnp) with [zero-installs](https://yarnpkg.com/features/caching#zero-installs). You will therefore not find any `node_modules` folder, but instead a `.pnp.cjs` file.
