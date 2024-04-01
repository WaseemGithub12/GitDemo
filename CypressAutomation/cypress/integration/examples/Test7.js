/// <reference types="Cypress" />
//cypress - Spec Handling Child Windows
describe('My Seventh Test Case for Handling Child Windows', () => {
    it(' My Seventh Test CaseShould handle child window!', () => {
      
      cy.visit ("https://www.rahulshettyacademy.com/AutomationPractice/");

      //To open page on same tab-using jqery attribute.You will see target=blank html in console for the link
      //You have to remove the target=blank to open in the same tab
      //Use Invoke which need fuction (removeAttr) which is a jquery funtion. it will remove the attribute at run time
      cy.get('#opentab').invoke('removeAttr', 'target').click();
      // To check on new page opened in previous command. Handling Cross domain scenario.Cypress can not handle cross domain
      cy.origin("https://www.qaclickacademy.com/",() =>
    {
      cy.get("#navbarSupportedContent a[href*='about']").click()

      cy.get(".mt-50 h2").should('contain','QAClick');

    })
      
      //to open page on different tab
      //cy.get('#opentab').click();
      //If yoy wanna check any thing on newly opened page.



    })
  })