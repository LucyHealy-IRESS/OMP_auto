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

import './functions/Client/Assert.js'
import './functions/Client/create.js'
import './functions/Client/Client_Assert.js'
import './functions/Client/Clients_Assert.js'
import './functions/Client/Client_Create.js'
import './functions/Client/Clients_Create.js'
import './functions/Client/Portfolio_Assert.js'
import './functions/Client/Portfolios_Assert.js'
import './functions/Client/Portfolio_Create.js'
import './functions/Client/Portfolios_Create.js'

import './functions/Process.js'
import './functions/Process2.js'

import '.'
// Alternatively you can use CommonJS syntax:
// require('./commands')



