// eslint-disable-next-line import/no-extraneous-dependencies
const { generateConfig } = require('gatsby-plugin-ts-config')

module.exports = generateConfig({
  projectRoot: __dirname,
  configDir: './gatsby'
})
