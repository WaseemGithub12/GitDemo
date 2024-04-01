/// <reference types="Cypress" />
//Cypress Calender =>
describe ('My 11th Test Case to Test Calender', function()
{
it ('My 11th Test Case to Verify and Test Date calender Function', ()=>
{
    const monthNumber="6"
    const date="15"
    const year="2027"
    const expectedList = [monthNumber,date,year];
    
    //cy.visit ("https://rahulshettyacademy.com/seleniumPractise/#/offers");
     //url is defined as global variable in config file and how it used
     cy.visit (Cypress.env('url')+'/seleniumPractise/#/offers/');
    cy.get (".react-date-picker__inputGroup").click();
    cy.get (".react-calendar__navigation__label").click();
    cy.get (".react-calendar__navigation__label").click();
    cy.contains ("button",year).click();
    //Need to have list for all 12 months, as list always start from zero and don't need to hard code, we have to use const with minus 1
    cy.get (".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
    cy.contains ("abbr",date).click();

    cy.get(".react-date-picker__inputGroup__input").each(($el, index) =>
{
    cy.wrap($el).invoke('val').should('eq',expectedList[index]);
})
})


} )



