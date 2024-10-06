const config = require('./src')

module.exports = {
  ...config,
  env: {
    node: true,
    es2022: true,
  },
}
