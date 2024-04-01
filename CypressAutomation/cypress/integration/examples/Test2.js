/// <reference types="Cypress" />
//Test Case 3 and 4 is also part of this test case. do things differently

describe ('My Second Test Case Finding Product from list', function()
{
it ('My Second Test Case Finding Product from list',function () {
cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait (2000)
//cypress get acts like find element
cy.get('.product').should('have.length',5)
//To get visible products
cy.get('.product:visible').should('have.length',4)
//parent child chaining using products grid
cy.get('.products').find('.product').should('have.length',4)
// Add to cart for second product
cy.get(':nth-Child(3) > .product-action > button').click()
cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
console.log('Loging')
cy.get('.products').find('.product').each(($el, index, $lis) => {
    const textveg=$el.find('h4.product-name').text()
    if(textveg.includes('Cashews'))
    {cy.wrap($el).find('button').click()
    }
    //cy.get('.cart-icon > img').click()
})
//Definig veriable with constent and also handling promise to use const. const is not cypress variable. text is also not cypress comment/method 
//const logo=cy.get('.brand')
//cy.log(logo.text())
//cy.get('.brand').should('have.text','GREENKART')
//cy.get('.brand').then(function(logoelement)
//{
    //cy.log(logoelement.text())
//})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click();

}  )

}  )