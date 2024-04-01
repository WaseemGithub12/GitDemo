const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor/').default
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');


async function setupNodeEvents(on, config) {

//    config.db = {
//     userName: "waan",
//     password: "test@1234",
//     server: "waseemcypressdb.database.windows.net",
//     options: {
//         database: "cyprdbdemo",
//         encrypt: true,
//         rowCollectionOnRequestCompletion : true
//     }
// }

  // await preprocessor.addCucumberPreprocessorPlugin(on, config);
  // tasks = sqlServer.loadDBPlugin(config.db);
  //     on('task', tasks);
      return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env: {

    url : "https://rahulshettyacademy.com"
  },
  //If you want to retry the failed test-add property display

  retries: {
    runMode: 1,

      },
  //My Cypress project cloud id
    projectId: "ao6qh1",
  e2e: {
    setupNodeEvents(on, config) 
    {
      on('file:preprocessor', cucumber())

      config.db = {
        userName: "waan",
        password: "test@1234",
        server: "waseemcypressdb.database.windows.net",
        options: {
            database: "cyprdbdemo",
            encrypt: true,
            rowCollectionOnRequestCompletion : true
        }
    }
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      //addCucumberPreprocessorPlugin(on, config);
      //await preprocessor.addCucumberPreprocessorPlugin(on, config);
      //sql server plugin
      tasks = sqlServer.loadDBPlugin(config.db);
      on('task', tasks);
    //Task is need to create to run in backend (Node (backend Javascript to run and when fulfill it goes back to Browser (front end)))
    //Below task is created for Test (HTTPJWTExcel.js)
      on('task', {

      excelToJsonConverter (filePath)

      {
        const result = excelToJson({
          source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer

      });
      return result;
    }

    })
      //on("file:preprocessor", preprocessor);
    
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    //specPattern: 'cypress/integration/examples/BDD/*.feature',
    specPattern: 'cypress/integration/examples/**/*.{js,jsx,ts,tsx}',
    
    
         
  },
});
//Report should be in json file->html