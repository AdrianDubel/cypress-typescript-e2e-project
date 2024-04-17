import { defineConfig } from 'cypress'

module.exports = defineConfig({
  env: {
    "username": "",
    "password": ""
  },
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:9000/'
  },
});
