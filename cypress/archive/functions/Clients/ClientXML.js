import * as constants from "../../constantsSelectors.js"
import * as constantsProviders from "../../constantsProviders.js"
import * as constantsProductID from "../../constantsProductID.js"


//Get Client data from the XML
Cypress.Commands.add("getXMLData_Client", (location, attribute) => {
  cy.readFile(location).then(content => {
    
   var retValue = "";
  
   var callback = function (err, result) {
    //debugger;
     var clientData = result.Root.Clients.Client;
     retValue = clientData[attribute];
   };
 
   cy.xml2JS_parseString(content, callback);
   //debugger;
   return retValue.trim();
   
 })

});

//Insert data to the UI
Cypress.Commands.add("inputXMLData", (location, selector, value) => {
  
  cy.getXMLData_Client(location, value).then(function(inserValue){
    cy.get(selector).type(inserValue)
  });

});

//Retrieve data from the UI to assert
Cypress.Commands.add("retrieveAssertUIData", (location, selector, value) => {

  cy.getXMLData_Client(location, value).then(function(readValue){
    cy.get(selector).should('have.value', readValue)
  });

});

//--------------------------------------------------------------------------------------------------------------------------
// import * as constants from "../../constantsSelectors.js"

Cypress.Commands.add("createClientXml", (fileLocation) => {
  cy.get('#NewClientIconMenu', { timeout: 16000 }).click()
  //cy.wait(16000)
     cy.inputXMLData(fileLocation, constants.titleconst, "Title");
     cy.inputXMLData(fileLocation, constants.firstnameconst, "Firstname");
     cy.inputXMLData(fileLocation, constants.surnameconst, "Surname");
     
     cy.getXMLData_Client(fileLocation,"DateOfBirth").then(function(DOB){
           var date = DOB.split('T');
           var datesplit = date[0].split('-')
           var dd = (datesplit[2]);
           var mm = (datesplit[1]);
           var yyyy = (datesplit[0]);
        cy.get(constants.dobDD).type(dd)
        cy.get(constants.dobMM).type(mm)
        cy.get(constants.dobYYYY).type(yyyy)
     });
        
     cy.get(constants.genderconst).clear();
     cy.inputXMLData(fileLocation, constants.genderconst, "Gender").type(`{enter}`).type(`{enter}`);
     cy.get(constants.plannedretirementage).click();
     //cy.get('.ui-dialog-buttonset > .ui-button > .ui-button-text').click(); //OK button in the Client Editor

     cy.get('.btn-viewportfolios-action > .ui-button-text').click(); //Next to Portfolios in the Client Editor 
     
})


Cypress.Commands.add("reloadClientXML", (fileLocation) => {
  cy.get('#Continue').click({force:true});
         cy.wait(16000)
         cy.get('[style="text-align:right;margin-top:24pt"] > button').click({force:true});
         cy.get('[data-u="thumbnavigator"]').children().contains('Client Summary').click({force:true});
         cy.get('#EditClientIconMenu').click();

         cy.retrieveAssertUIData(fileLocation, constants.titleconst, "Title");
         cy.retrieveAssertUIData(fileLocation, constants.firstnameconst, "Firstname");
         cy.retrieveAssertUIData(fileLocation, constants.surnameconst, "Surname");
         cy.retrieveAssertUIData(fileLocation, constants.genderconst, "Gender");


})












//--------------------------------------------------------------------------------------------------------------------------




//Get Portfolio data from the XML
//Get portfolio data

Cypress.Commands.add("getPortfolios", (file) => {
  cy.readFile(file).then((contents) => {
    
    var retValue = "";
    var callback = function (err, result) {
      var portfolioData = result.Root.Clients.Client.Portfolios;
      retValue =  portfolioData;
    };

    cy.xml2JS_parseString(contents, callback);

    return retValue;
  });
});

//---
Cypress.Commands.add("getXMLData_Portfolios", (file) => {
  cy.getPortfolios(file).then((content) => {
    debugger;
    // if (content) {//I dont need this bit to store on a array, not sure if I need, I dont think I do , I think the import call needs it
    //   if (Array.isArray(content.Portfolio)) {
        for (var x = 0; x < content.Portfolio.length; x++) {
          var Portfolio = content.Portfolio[x];  //GET EACH PORTFOLIO THEN DO STUFF BELLOW:
          
          var ProductID = Portfolio['ProductID'].trim();
          var ProductID = ["P", ProductID];
              ProductID = ProductID.join("_");

          var PortfolioID = Portfolio['PortfolioID'].trim();
          var ClientID = Portfolio['ClientID'].trim()
          var Reference = Portfolio['Reference'].trim();
          var third_party_tag = Portfolio['third_party_tag'].trim();
          var Status = Portfolio['Status'].trim();
          var Provider = Portfolio['ProviderID'];
              Provider = Provider
              .replace(/-/g, "")
              .trim();         

              cy.contains('Add New Portfolio').click();
              //cy.get(constants.nameconst).type(constantsProductID[ProductID] + ClientID + ' - ' + PortfolioID + ' - ' + Reference);    //test line
              cy.get(constants.productconst).clear().type(constantsProductID[ProductID]).type(`{enter}`);
              cy.get('.ui-priority-primary').click();
              //cy.get('[style="text-align:right;margin-top:24pt"] > button').click({force:true}); //is staging triggers licensing issues
              cy.get(constants.nameconst).type(ClientID + ' - ' + PortfolioID + ' - ' + Reference);
              cy.get(constants.providerconst).clear().type(constantsProviders[Provider]); //to go and read constant file for the Providers, must to this for the ProductID

            {
            for (var y = 0; y < Portfolio.Investments.PortfolioInvestment.length; y++) {
              var PortfolioInvestment = Portfolio.Investments.PortfolioInvestment[y];
              var FundID = PortfolioInvestment['FundID'].trim();
              cy.get(constants.ptAddFund).click();
              cy.get(constants.ptFundPicker).click();
              cy.wait(10000);
              cy.get(constants.ptFundName).type(FundID).type(`{enter}`).wait(4000).type(`{downarrow}`, `{enter}`); //NEEDS FIXING AS IT DOESNT SELECT THE FUND
              cy.get('[aria-describedby="ui-id-4"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(2) > .ui-button-text').click(); //NEEDS FIXING AS IT DOESNT CLOSES THE POPUP
              //cy.get(constants.ptFundPickerOk).click({force:true})
              }
            }
            
          
          cy.get('[aria-describedby="PortfolioAddPopUp"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text').click({force:true})//close popup


            //NEEDS TO RETRIEVE PORTFOLIO TO ASSERT DATA ALSO TO ADD UNITS AND AMOUNTS

        }
    //   } else {
    //     var Portfolio = content.Portfolio;
    //     debugger;
    //   }
    // }
  });
});


// Cypress.Commands.add("inputXMLPortfolioData", (file, selector, attribute) => {
  
//   cy.getXMLData_Portfolios(file, attribute).then(function(inserValue){
//     debugger;
//     cy.get(selector).type(inserValue)
//     debugger;
//   });

// });