/// <reference types="Cypress" />
//Automating check boxes and dropdowns

describe ('My Fifth Test Case for automating website (Automating check boxes and dropdowns)', function()
{
it ('(Automating check boxes, dropdowns and show/hide buttons)',function () {


cy.visit ("https://www.rahulshettyacademy.com/AutomationPractice/")
//To check or uncheck 1 check box
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

//cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//Multiple check box checked should check type=checkbox. common value for all check boxes which is type
cy.get('input[type="checkbox"]').check(['option1','option2','option3'])
cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')

//static dropdown the tag name value will be always select
cy.get('select').select('option2').should('have.value','option2')

// Dynamic dropdown the tag name value will be always input
cy.get('#autocomplete').type('ind')

//dynamic list click item
cy.get('.ui-menu-item div').each(($el, index, $list) => {
    
    if($el.text()==="India")
    {
              
       cy.wrap($el).click()
    }
})
cy.get('#autocomplete').should('have.value', 'India')
//Show hide text box
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
//Radio button selection
cy.get('[value="radio1"]').check().should('be.checked')

//popup have different types 
//using id. Alert popup with one button
cy.get('#alertbtn').click()
//using value, popup with ok and cancel button (2 Options)
cy.get('[value="Confirm"]').click()

//if need to confirm the popup text, need to use browser events. Cypress can control the dom(Page HTML) window:alert
cy.on('window:alert',(str)=>
{
    //mocha comparison
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

//Popup with confirm where you have 2 options ok or cancel
cy.on('window:confirm',(str)=>
{
    
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})


})
})