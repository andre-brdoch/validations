const config = require('./packages/eslint-config/src')

module.exports = {
  ...config,
  env: {
    node: true,
    es2022: true,
  },
}
