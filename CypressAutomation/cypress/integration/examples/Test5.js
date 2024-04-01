/// <reference types="Cypress" />
//Automating check boxes and dropdowns

describe ('My Fifth Test Case for automating website (Automating check boxes and dropdowns)', function()
{
it ('My Fifth Test Case for automating website (Automating check boxes and dropdowns)',function () {


cy.visit ("https://www.rahulshettyacademy.com/AutomationPractice/")
//To check or uncheck 1 check box
//cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
//cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//Multiple check box checked should check type=checkbox. common value for all check boxes which is type
cy.get('input[type="checkbox"]').check(['option1','option2','option3'])
cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')

//static dropdown the tag name value will be always select
cy.get('select').select('option2').should('have.value','option2')

// Dynamic dropdown the tag name value will be always input
cy.get('#autocomplete').type('ind')
cy.get('#ui-id-1').find('.ui-menu-item').eq(1).contains('India').click()


//Not working dynamic list click item
//cy.get('.ui-menu-item div').each(($el, index, $list) => {
    
    //if($el.text()==="india")
    //{
              
       //$el.click()
    //}
})
})
//})