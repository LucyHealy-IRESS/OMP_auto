/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs')

module.exports = (on, config) => {
  on('file:preprocessor', cucumber(),
  on("task", {
    ReadFolderDirectory({path,fileNo}){
      var fs = require('fs');
      var files = fs.readdirSync(path);
      // if(fileNo < files.length ){
      //   return files[fileNo];
      // }      
      return files; 
    }
   }),
   on("task", {
    CreateFile({filePath,content}){
      var fs = require('fs');
      var file = fs.appendFile(filePath, content);  
      return 1
      
    }
   })
  )
}


