// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
require('cypress-plugin-tab')
// Import commands.js using ES2015 syntax:
import './commands'
import './functions/login.js'
import './functions/API_Call.js'
import './functions/baseProcessing.js'
import './functions/Utils.js'
// Alternatively you can use CommonJS syntax:
// require('./commands')



