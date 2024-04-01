//cypress - Spec
//jasmine and Mocha frame work to write test cases
//Modha is the best for cypress
//it block is treated as one test case, All test cases should be wrapped on describe block.

describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })

    it('Does not do much!', () => {
      cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/");
    })

    it('Practicing different css attriburtes', () => {
      cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/");
      //Identifying search field using different css attributes
      //Using class name
      //cy.get ('.search-keyword').type('ca')
      //Using id name
      cy.get ('input[placeholder="Search for Vegetables and Fruits"]').type('ca')
      //Using tag name
      //cy.get ('input[type="search"]').type('ca')
      //In case of search, validate the results
      cy.wait (2000)
      cy.get('.product').should('have.length', 4)
      //in 
      
    })

  })