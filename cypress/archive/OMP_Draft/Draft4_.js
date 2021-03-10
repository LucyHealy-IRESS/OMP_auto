

describe("new test", () => {
   it("Create Client via XML", () =>{
      var fileLocation = 'cypress/fixtures/Clients/LucyTest1.xml';


      cy.login('live', 'username1', 'password1');
      cy.wait(16000);
         //Create Client + Portfolio

         cy.createClientXml(fileLocation);
         cy.getXMLData_Portfolios(fileLocation, { timeout: 16000 });

         //RETRIEVE
         cy.reload();
         cy.login('uat', 'username2', 'password2');
            cy.wait(16000);
         cy.reloadClientXML(fileLocation)

            
   })



})