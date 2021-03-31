describe('CreateFile', () => {
  

    it('test', () => {

        var path = "cypress/screenshots/newFile6.csv";
        var content = "hello"
        cy.task("CreateFile", {filePath:path,content:content}).then(() => {

            //cy.writeFile(path, content)

        })
    })
})
