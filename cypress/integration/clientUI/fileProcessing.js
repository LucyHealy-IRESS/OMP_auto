describe('Engine Iteration', () => {
  

    it('test', () => {
        cy.login()
        
        var path = "cypress/screenshots/newFile5.csv";
        var content = "hello"
        cy.task("CreateFile", {filePath:path,content:content}).then(() => {

            //cy.writeFile(path, content)

        })
    })
})
