//To get cypress help 
/// <reference types="Cypress" />
//cypress - Spec or Test File
//jasmine and Mocha frame work to write test cases
//Mocha is the best for cypress
//it block is treated as one test case, All test cases should be wrapped on describe block.

describe('Learning Cypress commands', () => {
   
       it('Add Items to cart', () => {
      cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get ('.search-keyword').type('ca')
      cy.wait (2000)
      cy.get('.products').as('prdoucLocater')
      //Get Array
      cy.get('.products').find('.product').each(($el, index, $lis) => {

        const textveg=$el.find('h4.product-name').text()
        if (textveg.includes('Cashews'))
        {
          cy.wrap($el).find('button').click()
        }

       })
       cy.get('.cart-icon > img').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       //Using contains for below command
       cy.contains('Place Order').click()
       cy.get('select').select('Pakistan')
       cy.get('select').should('have.value', 'Pakistan')
       cy.get('.chkAgree').check().should('be.checked')
       cy.get('button').click()
        
      })

  })