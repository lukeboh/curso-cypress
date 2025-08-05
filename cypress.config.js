const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          const hasFailures = results.tests.some(test =>
            test.attempts.some(attempt => attempt.state === 'failed')
          );

          if (!hasFailures) {
            // Deleta o vídeo se não houve falhas
            fs.unlinkSync(results.video);
          }
        }
      });
    },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    }
  },
});
