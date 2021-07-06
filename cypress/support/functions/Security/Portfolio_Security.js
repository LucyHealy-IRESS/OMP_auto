
Cypress.Commands.add("Portfolio_Security_Access", (xmlDoc, totalEntity) => {

    cy.Security_PortfolioSearch(xmlDoc, totalEntity, 1)
    
});


Cypress.Commands.add("Portfolio_Security_NoAccess", (xmlDoc, totalEntity) => {

    cy.Security_PortfolioSearch(xmlDoc, totalEntity, 0)
    
});
