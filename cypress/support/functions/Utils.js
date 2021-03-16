//SETTING UI ELEMENT UTILITIES
Cypress.Commands.add('SetDropdown',(Selector,Value) => { 
    cy.get(Selector).clear().type(Value);
    cy.get(".wijmo-wijlist-item ").filter(':visible').contains(new RegExp(Value, "g")).click();  //regex to say we want exact match!
})

Cypress.Commands.add('SetDropdown_ByIndex',(Selector,Value) => { 
    cy.get(Selector).closest(".wijmo-wijcombobox").find(".wijmo-wijcombobox-trigger").click(); //to open dropdown
    cy.get(".wijmo-wijlist-item ").filter(':visible') //.contains(new RegExp(Value, "g")).click();  //regex to say we want exact match!
    .each(($el, index, $list) => {
        if(index == (Value-1)){
            cy.wrap($el).click();
        }
    })
})

Cypress.Commands.add('SetSimpleDatefromXMLDateFormat',(ddSelector,mmSelector,yyyySelector,Value) => {    
    var textInput = Value;
         if (textInput) {
           var date = textInput.split("T");
           var datesplit = date[0].split("-");
           var dd = datesplit[2];
           var mm = datesplit[1];
           var yyyy = datesplit[0];
           cy.get(ddSelector).type(dd);
           cy.get(mmSelector).type(mm);
           cy.get(yyyySelector).type(yyyy);
         }
})

//DATE UTILITIES
Cypress.Commands.add('RandomDate',(start, end) => { 
    return new Date(start + Math.random() * ('10/10/2000' - '01/01/1945')); 
})

//when creating dates and we need months and days to have 2 digits e.g. 2 = 02
cy.fixDigit = function(val) {
    return val.toString().length === 1 ? "0" + val : val;
  }

//Convert ISO date to a short date (non simple mode)
Cypress.Commands.add('shortDate',(ISODate) => { 
    var date = ISODate.split('T');
    var datesplit = date[0].split('-')

    var newDOB = (datesplit[2] + "/" + datesplit[1] + "/" + datesplit[0]);
    return newDOB
    //cy.get('#DateOfBirthInput').type(newDOB)
})

//Convert ISO date to a short date (simple mode)
Cypress.Commands.add('simpleDate',(ISODate) => { 
    var date = ISODate.split('T');
    var datesplit = date[0].split('-')
    
    var dd = (datesplit[2]);
    var mm = (datesplit[1]);
    var yyyy = (datesplit[0]);
    return dd, mm, yyyy
})

//OTHER
cy.randomID = function(){
    return "00_" + Math.floor(Math.random() * 10000 + 1);
}



//Click Accordion

Cypress.Commands.add('clickAccordion', (editor, accordion) => {
    cy.get(editor).children().contains(accordion).click({force:true});   
})

//Click Thumbnail

Cypress.Commands.add('clickThumbnail', (thumbnailName) => {
    cy.get('[data-u="thumbnavigator"]').children().contains(thumbnailName).click({force:true});
})

// //click thumnail button such as Home or Client Search
// Cypress.Commands.add("MenuClick", (MenuText) => {
//     cy.get(".thumbNailTitleText").filter(':visible').contains(new RegExp(MenuText, "g")).closest('#JssorThumbnailContainer').click();
//   })