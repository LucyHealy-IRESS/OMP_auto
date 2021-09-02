import * as ClientConstants from "../../constants/client.js";
import * as Constants from "../../constants/Core.js";

Cypress.Commands.add("Partner_Assert_1", (EntityData) => {
    cy.wait(2000); //allow for client summary menu to auto open
    cy.menuClick('Client Summary', ClientConstants.AddPartnerButtonSelector); //Click Client Summary menu and click edit partner button

})
