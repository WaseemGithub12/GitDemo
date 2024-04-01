/// <reference types="Cypress" />
//Automating check boxes and dropdowns Show/hide text box functionality

describe ('My Sixth Test Case for automating website, Show/hide text box functionality', function()
{
it ('My sixth Test Case for automating website, Show/hide text box functionality',function () {


cy.visit ("https://www.rahulshettyacademy.com/AutomationPractice/")

//Show hide text box
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//Radio button selection
cy.get('[value="radio2"]').check().should('be.checked')
cy.get('[value="radio3"]').check()

//popup 2 types 
//using id
cy.get('#alertbtn').click()
//using value
cy.get('[value="Confirm"]').click()
//if need to confirm the popup text, need to use browser events. Cypress can control the dom(Page HTML) window:alert
cy.on('window:alert',(String)=>
{
    //mocha Hello , share this practice page and share your knowledge
    expect(String).to.equal('Hello , share this practice page and share your knowledge')
})

//Popup with confirm where you have 2 options ok or cancel
cy.on('window:confirm',(String)=>
{
    
    expect(String).to.equal('Hello , Are you sure you want to confirm?')
})



//Not working dynamic list click item
//cy.get('.ui-menu-item div').each(($el, index, $list) => {
    
    //if($el.text()==="india")
    //{
              
       //$el.c
    //}
})
})
//})