/// <reference types="Cypress" />
const neatCSV = require('neat-csv')
let productName
describe ('RahulShetty Http JWT Test-Login (SessionTest)', function() {

    it ('RahulShetty Http RHttp JWT Test, call from command.js file under Support folder',async function() {


        //call to login to get token. LoginAPI custom command define in command.js file

        cy.loginAPI().then(function()
        {
            cy.visit("https://rahulshettyacademy.com/client",
            {
                onBeforeLoad :function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
    
            })       
    
        })
        //Here we are getting the product name to match with the product name csv. for this purpose, we get all the product and select index 1. Ayncronus call so need to resolve
        //using then function. this is required because we are using text. We get the product name here and matches with the end code of csv
        cy.get(".card-body b").eq(1).then(function(ele)
          {
          productName = ele.text();
          })

        cy.get('.card-body button:last-of-type').eq(1).click();
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
        cy.get(".order-summary button").contains("Click To Download Order Details in CSV").click()

        //convert all the content of csv to Javascript object. we have to read download csv file to convert into text.Give the path
        //Dynamic generate the download path. Use cypress global object
        //Cypress.config("fileServerFolder")
        //cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_waan.csv")
        cy.readFile("/Users/waan/CypressAutomation/cypress/downloads/order-invoice_waan.csv")
        .then(async(text)=>
        {
            //If we use await, it automatically resolve the promise. for wait async function to need to work wait
            const csv = await neatCSV(text)
            console.log(csv)
            //We printed the log in console above, now we will see the index and find the product name
            //If we have space in the property name we will use[] and ""
            const actualProductCSV = csv [0]["Product Name"]
            expect(productName).to.equal(actualProductCSV)
            //the other way to read csv. Detail explanation is in excell file
        })



    })
})