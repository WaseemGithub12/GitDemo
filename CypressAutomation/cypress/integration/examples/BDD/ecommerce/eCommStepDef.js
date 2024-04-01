/// <reference types="Cypress" />

import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../../cypress/integration/examples/pageObjects/HomePage";
import ProductPage from "../../../../../cypress/integration/examples/pageObjects/ProductPage";

const homePage=new HomePage()
const productpage=new ProductPage()

Given('I open Ecommerce page',function() 
{
        cy.visit (Cypress.env('url')+'/angularpractice/');    
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 8000)
        homePage.getShopTab().click()

   
    // cy.get('input[name="name"]:nth-child(2)').type("Smith")
    // cy.get('select').select('Male')
    // cy.get(':nth-child(4) > .ng-pristine').should('have.value', "Smith")
    // cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
    // //cy.get('input[name="name"]:nth-child(2)').should('have.attr','required type','text')
    // cy.get('#inlineRadio3').should('be.disabled')
    // cy.pause()
    // cy.get(':nth-child(2) > .nav-link').click()
    
    // cy.selectProduct('Blackberry')
    //     cy.selectProduct('Nokia Edge')
    //     cy.get('h4.card-title').each(($el, index, $list) => {
    //        if($el.text().includes('Blackberry'))
    //        {
    //        cy.get('button.btn.btn-info').eq(index).click()
    //        }})
})
//})
//When I add items to card
When('I add items to card',function() 
{
    
    //cy.get('body').should('be.visible')
    homePage.getShopTab().click()
        
    this.data.productName.forEach(function(element) {
        
        cy.selectProduct(element)
     });
    // ProductPage.checkOutButton().click()
    //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
  })
//And Validate the total prices
When ('Validate the total prices',function() 
{
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        //cy.log($el.text())
        
            //YOu need to split amount string into 2 parts ₹. 50000. split currency sign and number. To remove any spaces use trim
            //Now we have to convert string into number to sum up the amount of the cart.
            //Convert the string into number
            //We will get log and see printed values
            //Below code is not cypress. it is javascript, so we need to act accordingly
            const amount=$el.text()
            var res= amount.split(" ")
            res= res[1].trim()
            sum= Number(sum)+Number(res)
               }).then(function()
                //due to javascipt we need to wait till sum is done and then printed. To resolve promise
                                {
                  //cy.log(sum)
                })
              cy.get('h3 strong').then(function(element){
                const amount=element.text()
            var res= amount.split(" ")
            var total= res[1].trim()
            //You need to compare 2 value. For this purpose need assertion. Now need to convert total string into number by adding Number with total
            expect(Number(total)).to.equal(sum)

              })

              })

//Then Select the country, submit and verify Thankyou
    Then('Select the country, submit and verify Thankyou',()=>
    
    {
        cy.get('body').should('be.visible')
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        Cypress.config('defaultCommandTimeout',8000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        cy.get('.alert').then(function(element)
      
        {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true
        } )
    })
    //When I fill the form details
        When('When I fill the form details',function(dataTable)

    {
        // cy.get('body').should('be.visible')
        //[bobz, Male] raw table data from feature file
        //homePage.getEditBox().type(this.data.name)
         name = dataTable.rawTable[1][0]
        homePage.getEditBox().type(dataTable.rawTable[1][0])
        //homePage.getGender().select(this.data.gender)
        homePage.getGender().select(dataTable.rawTable[1][1])
        

    })
//Then Validate the form behaviour
    Then('Validate the forms behaviour',function()
{
    // cy.get('body').should('be.visible')
    homePage.getTwoWayDataBinding().should('have.value', name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
    cy.pause()
})
//And Select the Shop Page
// When('Select the Shop Page',function()

// {
//     //cy.get('body').should('be.visible')
//     homePage.getShopTab().click()
// })