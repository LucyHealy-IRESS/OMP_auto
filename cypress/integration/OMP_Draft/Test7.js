
describe("Checking menu accessibility", () => {

    beforeEach("Login", () => {
        cy.login("live", "usernameE", "passwordE");
        cy.wait(12000)
    })

    it("Withdraw Button Access", () => {
        cy.get('#DecumulationIconMenu').children().should('not.contain','Upgrade')
        cy.get('#NewDecumulation_Ellipsis_overview').should('be.visible')
            

    })



})