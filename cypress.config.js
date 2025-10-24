const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    experimentalSessionAndOrigin: true,
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/*.spec.js',

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      overwrite: false,
      html: true,
      json: true
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

