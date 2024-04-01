/// <reference types="Cypress" />

describe ('Upload-Download Test',()=>
{

it("Verify excel upload and download",()=>
{
//We need to give the task and also give the ovject with the value in the {}. we are changing price
//Excel file always downlaod in cypress download folder
const replaceNum = 350;
const SearchTextFruit = "Apple"
const FilePath = Cypress.config ("fileServerFolder")+"/cypress/downloads/download.xlsx"
cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");
cy.get("#downloadButton").click();
//Task should also be given in single quot ''
cy.task('writeExcelTest',{SearchText:SearchTextFruit,ReplaceText:replaceNum,change:{rowChange:0,colChange:2},filePath:FilePath});
//How to upload excel in Cypress
//Select file need a attribute to work
cy.get("#fileinput").selectFile(FilePath);
//insertion we will find the applie first. Firest find parent, after that go to row level, first parent to its parent
//As we previously do it with reading list and go to element. below is the short method 
cy.contains(SearchTextFruit).parent().parent().find("#cell-4-undefined")
.should('have.text',replaceNum);
})
})