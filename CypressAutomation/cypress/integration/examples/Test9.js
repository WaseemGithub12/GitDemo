/// <reference types="Cypress" />
//cypress - Spec Handling Mouse Hover
describe('My Ninth Test case for Handling Mouse Hover ', () => {
    it('My Ninth Test case-Using jqery to handle Mouse Hover bc cypress is not supporting Mouse Hover!', () => {
      
      cy.visit ("https://www.rahulshettyacademy.com/AutomationPractice/");
//Using imidate parent instead of Grand parent which is id=mousehover so instead of id, we are using class with div.Using show method of jquery
      //cy.get('div.mouse-hover-content').invoke('show')
      //cy.contains('Top').click()
      //cy.url().should('include','top')

      //You can also forcefully click on hidden item in cypress without using jquery show method, as two hidden item in a mouse hover Top and Reload
      cy.contains('Top').click({force:true})
      cy.url().should('include','top')

    })
  })