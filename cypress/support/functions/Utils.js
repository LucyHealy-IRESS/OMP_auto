import * as portfolioMapping from "../../support/constants/portfolio.js";

//SETTING UI ELEMENT UTILITIES
Cypress.Commands.add('SetDropdown',(Selector,Value) => { 
    cy.get(Selector).clear().type(Value);
    cy.get(".wijmo-wijlist-item ").filter(':visible').contains(new RegExp(Value, "g")).click();  //regex to say we want exact match!
})

Cypress.Commands.add('SetDropdown_OpenDropdown',(Selector,Value) => { 
    cy.get(Selector).filter(':visible').click();
    cy.get(".wijmo-wijlist-item ").filter(':visible').contains(new RegExp(Value, "g")).click();  //regex to say we want exact match!
})

Cypress.Commands.add('SetDropdown_ByIndex',(Selector,Value) => { 
    cy.get(Selector).closest(".wijmo-wijcombobox").find(".wijmo-wijcombobox-trigger").click(); //to open dropdown
    cy.get(".wijmo-wijlist-item ")//.filter(':visible') //.contains(new RegExp(Value, "g")).click();  //regex to say we want exact match!, had to comment filter:visible as it wasnt fiding items at the bottom of the list
    .each(($el, index, $list) => {
        if(index == (Value-1)){
            cy.wrap($el).click({force:true});
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

Cypress.Commands.add("TranslateProductID", (Portfolio, XmlInputObject) => {
    var ProductID = Portfolio["ProductID"].trim();
    ProductID = ["P", ProductID];
    ProductID = ProductID.join("_");
    cy.SetDropdown(XmlInputObject.Selector, portfolioMapping[ProductID]);
  });
  //could both of thse be grouped into one function with an if statement?
  Cypress.Commands.add("TranslateProviderID", (Portfolio, XmlInputObject) => {
    var ProviderID = Portfolio["ProviderID"].toUpperCase().trim();
    ProviderID = ProviderID.replace(/-/g, "");
    cy.SetDropdown(XmlInputObject.Selector, portfolioMapping[ProviderID]);
  });

  // Cypress.Commands.add('ProductIdType', () =>{
  //   var ProductID = EntityData["ProductID"].trim();
  //   ProductID = ["PD", ProductID];
  //   ProductID = ProductID.join("_");
  //   //var obj = {};
    
  //   return portfolioMapping.ProductIDs.[ProductID].pType;
  // })


//Open an accordian, check first if accordian is already open, else a click will close it
Cypress.Commands.add("ProcessAccordian",(EditorSelector,mapping,xmlInput,XMLDataObject,InputMappings,isCreate,EditorName) => {
    cy.get(mapping.AccordianSelector).then(function ($AccordianSelector) {
      if($AccordianSelector.hasClass('wijmo-wijaccordion-content-active')){
        cy.ProcesssInput(XMLDataObject,xmlInput,InputMappings,isCreate,EditorName);
      }
      else {
        cy.clickAccordion(EditorSelector, mapping.AccordianName);
        cy.get(mapping.AccordianSelector + ".wijmo-wijaccordion-content-active").then(function () {
          cy.ProcesssInput(XMLDataObject,xmlInput,InputMappings,isCreate,EditorName);
        });
      }          
    });
  })


//DATE UTILITIES
Cypress.Commands.add('RandomDate',(start, end) => { 
    return new Date(start + Math.random() * ('10/10/2000' - '01/01/1945')); 
})

//when creating dates and we need months and days to have 2 digits e.g. 2 = 02
cy.fixDigit = function(val) {
    return val.toString().length === 1 ? "0" + val : val;
  }


  cy.removeDuplicatesInArray = function(arr) {
    var i,
        len = arr.length,
        out = [],
        obj = { };
    
    // for (i = 0; i < len; i++) {
    for (var i = len - 1; i >= 0; i--) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
};

// cy.removeDuplicatesInArray  = function(array){
//     return Cypress.$.grep(array,function(el,index){
//         return index == Cypress.$.inArray(el,array);
//     });
// }


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
    cy.get(editor + " h3").contains(accordion).click({force:true});   
})


Cypress.Commands.add("clickAccordion_PreCheck",(accordionSelector,editor, accordion) => {
    cy.get(accordionSelector).then(function ($AccordianDiv) {
      if(!$AccordianDiv.hasClass('wijmo-wijaccordion-content-active')){   //only click the accoredian if its not open  
        cy.clickAccordion(editor, accordion);
      }          
    });
})

//Click Thumbnail
Cypress.Commands.add('clickThumbnail', (thumbnailName) => {
    cy.get('[data-u="thumbnavigator"]').children().contains(thumbnailName).click({force:true});
})

//Click Menu Button
Cypress.Commands.add('menuClick', (thumbnailName, button) => {
  cy.clickThumbnail(thumbnailName);
  cy.wait(2000);
  cy.get(button).click();
})


Cypress.Commands.add('clickButtonInPopup', (PopupID, ButtonText) => {
    cy.get("[aria-describedby='" + PopupID.replace("#","") + "']").contains(ButtonText).click({force:true});
})

// //click thumnail button such as Home or Client Search
// Cypress.Commands.add("MenuClick", (MenuText) => {
//     cy.get(".thumbNailTitleText").filter(':visible').contains(new RegExp(MenuText, "g")).closest('#JssorThumbnailContainer').click();
//   })



