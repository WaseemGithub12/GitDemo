/// <reference types="Cypress" />
// Handling frames in the website//Problem to find two products in frame-Not Resolved-Commented the code 
///<reference types="Cypress"/>
///<reference types="Cypress-iframe"/>
//Add these 2 above line in the Test code to get help cypress iframe auto suggestion
import 'cypress-iframe'

describe('My 10th Test case for Frames Testing', function() {
  it('My 10th Test case for Frames Testing', function(){

//handling iframes in the html page. Page within the other html page

cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

cy.frameLoaded('#courses-iframe')
cy.iframe().find("a[href*='mentorship']").eq(0).click()
//cy.pause()
//cy.iframe().find(".platinum-color .bg-pattern-1 .pricing-title']")

//cy.iframe().find(".platinum-color .bg-pattern-1 .pricing-title']")

//cy.iframe().find("h1[class*='pricing-title text-white ls-1']")
//.should('have.length',2)


//.should('have.length',2)


  })
})
