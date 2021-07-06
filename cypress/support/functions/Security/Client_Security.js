
Cypress.Commands.add("Client_Security_Access", (xmlDoc, totalEntity) => {
    
    cy.Security_ClientSearch(xmlDoc, totalEntity, 1);
})

Cypress.Commands.add("Client_Security_NoAccess", (xmlDoc, totalEntity) => {
    
    cy.Security_ClientSearch(xmlDoc, totalEntity, 0);
})
    
