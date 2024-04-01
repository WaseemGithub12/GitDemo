/// <reference types="Cypress" />
//Cypress Test Framework complet test case untill product added and amount verified

import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage"
describe ('My 13th Test case test case-untill product added and amount verified-Test Framework', function()

{
    before(function() {
        // root-level hook
        // runs once before all tests in the block
        //Data will be given in example file under fixture. Data will be on jason format
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })

      })

      it ('My 13th Test Case complet till product add and Amount verified', function (){
        
        const homePage=new HomePage()
        const productpage=new ProductPage()

        //cy.visit ('https://rahulshettyacademy.com/angularpractice/');
        //url is defined as global variable in config file and how it used
        
          cy.visit (Cypress.env('url')+'/angularpractice/');
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 8000)
        homePage.getShopTab().click()
        
        
        //cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        //cy.pause()
        //cy.get(':nth-child(1) > .form-control').type("Smith")
        //cy.get('select').select(this.data.gender)
        //cy.get(':nth-child(4) > .ng-pristine').should('have.value', this.data.name)
        //cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        //cy.get('input[name="name"]:nth-child(2)').should('have.attr','required type','text')
        //cy.get('#inlineRadio3').should('be.disabled')
        //cy.pause()
        //cy.get(':nth-child(2) > .nav-link').click()
        //array is defined in example.json
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)

        })
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
                
       //ProductPage.checkOutButton().click()
                //cy.pause()
        //ProductPage.checkOutButton().click()
        //cy.get('btn btn-success') also used
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        Cypress.config('defaultCommandTimeout',8000)
        cy.get('.suggestions > ul > li > a').click()
        //cy.pause()
        
        //Cypress.config('defaultCommandTimeout',10000)
        //cy.get(".suggestions > ul > li > a").click()
        cy.get('#checkbox2').click({force: true})
        //cy.get('form.ng-untouched > .btn').click() or
        //cy.get('#Purchase').click() or
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element)
      
        {
            

            //res[0]=₹.
            //res[1]=50000
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true
        } )

        

        //cy.selectProduct('Blackberry')
        //cy.selectProduct('Nokia Edge')
        //cy.get('h4.card-title').each(($el, index, $list) => {
           //if($el.text().includes('Blackberry'))
           //{
           // cy.get('button.btn.btn-info').eq(index).click()
          // }

        //})

      })
      

})






