/// <reference types="Cypress" />
//cypress - Spec Handling web tables
describe('My Eighth Test Case for Handling web tables ', () => {
    it('My Eighth Test Case-To see particular data and its value in the table!', () => {
      
      cy.visit ("https://www.rahulshettyacademy.com/AutomationPractice/");

      cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

        const text=$e1.text()
        if(text.includes("Master Selenium Automation in simple Python Language"))
    {
      cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
      {
        const pricetext= price.text()
        expect(pricetext).to.equal('25')
      
      })
    }
  
  })

    })
  })