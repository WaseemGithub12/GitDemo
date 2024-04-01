/// <reference types="Cypress" />
//const neatCSV = require('neat-csv')

describe ('RahulShetty Http JWT Test-Login', function() {

    it ('RahulShetty Http RHttp JWT Test, call from command.js file under Support folder',async function() {


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

        
        // cy.readFile(Cypress.config)("fileServerFolder")+"/cypress/downloads/order-invoice_waan.csv"
        // .then(async(text)) => 
        // {
        //     const csv = await neatCSV(text)
        //     console.log(csv)
        //     const actualProductCSV = csv [0]["Product Name"]
        //     expect(productName).to.equal(actualProductCSV)
        // }



    })
})