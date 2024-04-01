/// <reference types="Cypress" />

describe ('My Third Test Case Defining Variable for product List', function()
{
it ('My Third Test Case Defining Variable for product List',function () {
cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait (2000)
//cypress get acts like findelement
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
//parent child chaining using products grid
//instead of using products 3 time, we will define variable and call it. use coments as alias
cy.get('.products').as('productlocator')

cy.get('@productlocator').find('.product').should('have.length',4)
// Add to cart for second product
cy.get(':nth-Child(3) > .product-action > button').click()
cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()
console.log('sfLoging')
cy.get('@productlocator').find('.product').each(($el, index, $lis) => {
    const textveg=$el.find('h4.product-name').text()
    if(textveg.includes('Cashews'))
    {cy.wrap($el).find('button').click()
    }

})
//Definig veriable with constent and also handling promise to use const. const is not cypress variable. text is also not cypress comment/method 
//const logo=cy.get('.brand')
//cy.log(logo.text())
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
//This is to print in logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
})

}  )

}  )