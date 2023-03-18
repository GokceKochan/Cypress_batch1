const { defineConfig } = require("cypress");

module.exports = defineConfig({

  hideXHR: true,
  e2e: {
    // baseUrl:'https://demoqa.com/',
    watchForFileChanges: false,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    userName: "omer"
  }
});
