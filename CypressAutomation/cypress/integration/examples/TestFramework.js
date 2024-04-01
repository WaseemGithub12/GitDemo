/// <reference types="Cypress" />
//Cypress Test Framework. Till adding product into cart

describe ('My 12th tese Case for Test Framework', function()

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

      it ('My 12th tese Case for Test Framework', function (){
        //cy.visit ('https://rahulshettyacademy.com/angularpractice/');
         //url is defined as global variable in config file and how it used
        cy.visit (Cypress.env('url')+'/angularpractice/');
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        //cy.pause()
        //cy.get(':nth-child(1) > .form-control').type("Smith")
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-pristine').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        //cy.get('input[name="name"]:nth-child(2)').should('have.attr','required type','text')
        cy.get('#inlineRadio3').should('be.disabled')
        //cy.pause()
        cy.get(':nth-child(2) > .nav-link').click()
        //array is defined in example.json
        //this.data.productName.forEach(function(element) {
            //cy.selectProduct(element)

        })
        

        //cy.selectProduct('Blackberry')
        //cy.selectProduct('Nokia Edge')
        //cy.get('h4.card-title').each(($el, index, $list) => {
           //if($el.text().includes('Blackberry'))
           //{
           // cy.get('button.btn.btn-info').eq(index).click()
          // }

        //})

      })
      








