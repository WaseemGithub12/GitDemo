/// <reference types="Cypress" />

describe ('Http API Testing', function()
{

    it ('Http API Testing',function () {

        //cy.request(method,url,body)
        cy.request('POST','https://216.10.245.166/Library/Addbook.php',
        {
            "name": "Learn Appium Automation with Java",
                    "isbn": "bcdsss",
                    "aisle": "22s7",
                    "author": "John foe" 
        }).then(function(response)
{
    expect(response.body).to.have.property("msg",'successfully added')
    expect(response.status).to.eq(200)
})

})
})