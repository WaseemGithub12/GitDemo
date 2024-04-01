/// <reference types="Cypress" />

        const excelToJson = require('convert-excel-to-json');
        const fs = require('fs');
    let productName
describe ('RahulShetty Http JWT Test-Login-(Excel Task Validation)', function() {

    it ('RahulShetty Http RHttp JWT Test, call from command.js file under Support folder',function() {


        //call to login to get token. LoginAPI custom command define in command.js file

        cy.loginAPI().then(function()
        {

            cy.visit('https://rahulshettyacademy.com/client',
            {
                //This event needed to be loaded the event before the url-Need javascript function to inject token into local storage
                onBeforeLoad: function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body button:last-of-type').eq(1).click();
        //This above line is changed as csv changed to find the product name
        cy.get(".card-body b").eq(1).then(function(ele)
          {
          productName = ele.text();
          })
        //cy.get('[routerlink*='cart']).click()
        cy.get(':nth-child(4) > .btn').click()
        cy.get('.subtotal > ul > :nth-child(3) > .btn').click();
        //cy.contains('CheckOut').click();
                //cy.get('.form-group > .input')-
        cy.get("[placeHolder*='Country']").type('indi')
        //cy.get(':nth-child(3) > .ng-star-inserted') India option from dropdown
        cy.get('.ta-results button').each(($el, index, $list) => 
        {
            if($el.text()===(' India'))
            {
                cy.wrap($el).click()
            }
        })
        //cy.get('.btnn') Place Order
        cy.get(".action__submit").click();
        cy.wait(3000)
        cy.get(".order-summary button").contains("Click To Download Order Details in Excel").click();
        const filePath = Cypress.config ("fileServerFolder")+"/cypress/downloads/order-invoice_waan.xlsx"
        cy.task('excelToJsonConverter',filePath).then(function(result)
        {
            //cy.log(result);
            //Now we are finding the order id-Find the product name above and now matches with the csv
            cy.log(result.data[1].A);
            expect(productName).to.equal(result.data[1].B);


        })
        //Shortest way to read csv, HTML and read excel files. we can use readFile command. We will convert it into text.As above we used lot of plugins etc. but below is the simple way
        cy.readFile(filePath).then(function(text)
        {
            expect(text).to.include(productName);
        })

        //console.log(result);
        //cy.readFile("/Users/waan/CypressAutomation/cypress/downloads/order-invoice_waan.xlsx")
        //Now called task from config.js file and define in the actual test
        
        // cy.task('excelToJsonConverter',filePath).then(function(result)
        // {
        //     cy.log(result);

        // })
        //copy below code and add to config.js to create task
        //understing fs
        //Browser(Engine) - js code -> Client Side Enviornment (Front end) - Cypress
        //Node (engine) - JS code -> Back end Applications/Environment
        //Accessing files - fs, Database Access, 
        //fs is not supported by brownser as it is back end, It will be created as task
        //Task - (Files, DB) -> need to be created in config.js file. So readFileSync should be reaped as task in config.js file. It should be named (ExcelToJson) ->cy.task (ExcelToJson)
        // go to cypress task to understand how it works
        // const result = excelToJson({
        //     source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
        // });
        

        //Other method of doing above job to read excell file and find the product name
        //cy.readFile(filePath).then (function(text)
        //{
            //expect(text).to.include(productName);
       //})

    })
})