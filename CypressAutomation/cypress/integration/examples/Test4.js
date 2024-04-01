/// <reference types="Cypress" />
//Automating website till placing orders
describe ('My Forth Test Case for automating website', function()
{
it ('My Forth Test Case for automating website',function () {
cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait (2000)

cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').each(($el, index, $lis) => {
    const textveg=$el.find('h4.product-name').text()
    if(textveg.includes('Cashews'))
    {cy.wrap($el).find('button').click()
    }

})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()

}  )


}  )