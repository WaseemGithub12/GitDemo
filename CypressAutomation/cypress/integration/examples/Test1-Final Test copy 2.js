//To get cypress help 
/// <reference types="Cypress" />
//cypress - Spec or Test File
//jasmine and Mocha frame work to write test cases
//Mocha is the best for cypress
//it block is treated as one test case, All test cases should be wrapped on describe block.

describe('Learning Cypress commands', () => {
   
     it('Learning Cypress Commands', function () {
      cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/");
    })

    it('Practicing different css attriburtes', () => {
      cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get ('.search-keyword').type('ca')
      cy.wait (2000)
      //cy.get('.product').should('have.length', 5)
      //cy.get('.product:visible').should('have.length', 4)
      cy.get('.products').find('.product').should('have.length', 4)
      //cy.get('.product:visible').eq(2).contains('ADD TO CART').click()
      cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
      //Get Array
      cy.get('.products').find('.product').each(($el, index, $lis) => {

        const textveg=$el.find('h4.product-name').text()
        if (textveg.includes('Cashews'))
        {
          cy.wrap($el).find('button').click()
        }

       })
       
       cy.get('.brand').then(function(logoelement)

       {
        cy.log(logoelement.text())
       })

    })

  })