const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://gestao-tags.hml.fastalelo.com',
    defaultCommandTimeout: 15000
  },
})
