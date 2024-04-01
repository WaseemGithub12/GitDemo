/// <reference types="Cypress" />

describe ('RahulShetty Http Response', function()
{

    it ('RahulShetty Http Response',function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        


        cy.intercept({
            method : 'GET', 
           url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
            
        {
            statusCode : 200,
            body :  [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"  }]
        
        }).as('bookretrievals')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals')
        cy.get('p').should('have.text', 'Oops only 1 Book available')

        
})
})