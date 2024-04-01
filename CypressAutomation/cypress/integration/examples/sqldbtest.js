/// <reference types="Cypress" />

context ('Window', () =>
{

    it ('sql db interaction', () => {

       cy.sqlServer("select * from Persons").then(function(result)
       
       {
        //To get all results
         //console.log(result)
         //To get city of the 954 person
         console.log(result[1][3])
       })




    })
    })