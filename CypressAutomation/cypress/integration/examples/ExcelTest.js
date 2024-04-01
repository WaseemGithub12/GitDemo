/// <reference types="Cypress" />
const ExcelJs = require('exceljs');

//In this exercise-Integration excell with cypress
//This part of the code is to write into excell, first he will read and fine and after that it will write
async function writeexcelTest(SearchText,ReplaceText,change,filePath)
{
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet('Sheet1');
    const output= await readExcel(worksheet,SearchText);
    
    const cell = worksheet.getCell(output.row,output.column+change.colChange);
    cell.value = ReplaceText;
    await workbook.xlsx.writeFile(filePath);
}
//This part of the code is to read into excell

 async function readExcel(worksheet,SearchText)
  {
    let output = {row:-1,column:-1};
 worksheet.eachRow((row,rowNumber) =>
 {
     row.eachCell( (cell,colNumber )=>
     {
        
         if(cell.value ===SearchText)
         {
             output.row=rowNumber;
             output.column=colNumber;
             
         }
     } )
 })
return output;
}
//Update Mango price to 350--Need to introduce new object (change) which fill find Mango and move to column price and update the price
writeexcelTest("Kivi",400,{rowChange:0,colChange:2},"/Users/waan/Downloads/exceldownloadTest.xlsx");




