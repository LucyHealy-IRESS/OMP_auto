import * as constants from "../../support/constants/Core.js";

describe("Create Client and Client Portfolios", () => {
    it("Create Client and Portfolio via XML", () => {
      var ExecutiionFolderLocation = "cypress/fixtures/ExecutionFolder/Create";
      cy.ProcessFolder(ExecutiionFolderLocation, constants.Create);
    });
  });

