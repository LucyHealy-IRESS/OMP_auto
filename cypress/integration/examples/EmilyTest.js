/// <reference types="cypress" />

describe('Emilys Testing', () =>{

    it('Create Client with Portfolios', () =>{
        cy.Create_Client_API("cypress/fixtures/Clients/EmilyTest.xml");
        //retreive client 

        cy.RetreiveClient_API("EHK_20").then(function(resp){
            if (resp != "") {
                cy.getResponseXMLData(resp.body).then(function(responseXML){             
                    cy.getResponseXMLData_ClientRetreive(responseXML,"Firstname").then(function(firstname){
                        alert(firstname)
                    });
                    cy.getResponseXMLData_ClientRetreive(responseXML,"Surname").then(function(Surname){
                        alert(Surname)
                    });
                })
            }
        })//end retreive client
    })
 
 })