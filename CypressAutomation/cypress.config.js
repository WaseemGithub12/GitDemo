const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor/').default
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const { error } = require("console");


async function setupNodeEvents(on, config) {

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
//This is require for the preprocessor to be able to generate JSON reports after each run, and
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
  //to define task use on, and should be written in blog{}- This task is written for excel
  on('task',{
    excelToJsonConverter(filePath)
    {
      const result = excelToJson({
      source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
    });
    return result;
    }
  })
  //rahual
  on('task', {
 
    async writeExcelTest({searchText,replaceText,change,filePath})
     {
         
       const workbook = new ExcelJs.Workbook();
       await workbook.xlsx.readFile(filePath);
       const worksheet = workbook.getWorksheet('Sheet1');
       const output= await readExcel(worksheet,searchText);
     
       const cell = worksheet.getCell(output.row,output.column+change.colChange);
       cell.value = replaceText;
       //pending resolved rejected
       return workbook.xlsx.writeFile(filePath).then(()=>
       {
         return true;
       })
       .catch((error)=>
         {
           return false;
         })
  
     
     }
  
   })
  
  
  
  
 async function readExcel(worksheet,searchText)
 {
     let output = {row:-1,column:-1};
     worksheet.eachRow((row,rowNumber) =>
     {
           row.eachCell((cell,colNumber) =>
           {
               if(cell.value === searchText)
               {
                   output.row=rowNumber;
                   output.column=colNumber;
               }
   
   
           }  )
     
     })
     return output;
 }
}
  //rahual
//   //Write an excell coordinate to read, write. "Important to Remember" For multi paramerter, we should used {SearchText,ReplaceText,change,filePath} to rape as object
//   on('task', {
//     //This code is from Javascript excel test
//     async writeExcelTest({SearchText,ReplaceText,change,filePath})
// {
//     const workbook = new ExcelJs.Workbook();
//     await workbook.xlsx.readFile(filePath);
//     const worksheet = workbook.getWorksheet('Sheet1');
//     const output= await readExcel(worksheet,SearchText);
    
//     const cell = worksheet.getCell(output.row,output.column+change.colChange);
//     cell.value = ReplaceText;
//     //There is three types of promise pending, resolved and rejected
//     return workbook.xlsx.writeFile(filePath).then(()=>
//     {
//       return true;
//     })
//     //write error condition
//     .catch((error)=>
//       {
//         return false;
//       })
// }

//   })
//   //Make sure to return the config object as it might have been modified by the plugin
//       return config;
// }

// async function readExcel(worksheet,SearchText)
// {
//   let output = {row:-1,column:-1};
// worksheet.eachRow((row,rowNumber) =>
// {
//    row.eachCell( (cell,colNumber) =>
//    {
      
//        if(cell.value === SearchText)
//        {
//            output.row=rowNumber;
//            output.column=colNumber;
           
//        }
//    } )
// })
// return output;
// }

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
    setupNodeEvents,
    //specPattern: 'cypress/integration/examples/BDD/*.feature',
    specPattern: 'cypress/integration/examples/**/*.{js,jsx,ts,tsx}',
    
         
  },
});
    // {
    //   on('file:preprocessor', cucumber())

    //   config.db = {
    //     userName: "waan",
    //     password: "test@1234",
    //     server: "waseemcypressdb.database.windows.net",
    //     options: {
    //         database: "cyprdbdemo",
    //         encrypt: true,
    //         rowCollectionOnRequestCompletion : true
    //     }
    // }
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      //addCucumberPreprocessorPlugin(on, config);
      //await preprocessor.addCucumberPreprocessorPlugin(on, config);
      //sql server plugin
      // tasks = sqlServer.loadDBPlugin(config.db);
      // on('task', tasks);
    //Task is need to create to run in backend (Node (backend Javascript to run and when fulfill it goes back to Browser (front end)))
    //Below task is created for Test (HTTPJWTExcel.js)
    //   on('task', {

    //   excelToJsonConverter (filePath)

    //   {
    //     const result = excelToJson({
    //       source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer

    //   });
    //   return result;
    // }

    // })
    //   //on("file:preprocessor", preprocessor);
    
    //   // Make sure to return the config object as it might have been modified by the plugin.
    //   return config;
    // },
    
//Report should be in json file->html