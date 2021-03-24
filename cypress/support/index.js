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
import './functions/Assert/Client_Assert.js'
import './functions/Assert/Clients_Assert.js'
import './functions/Create/Client_Create.js'
import './functions/Create/Clients_Create.js'
import './functions/Assert/Portfolio_Assert.js'
import './functions/Assert/Portfolios_Assert.js'
import './functions/Create/Portfolio_Create.js'
import './functions/Create/Portfolios_Create.js'
import './functions/Assert/PortfolioInvestment_Assert.js'
import './functions/Assert/Investments_Assert.js'
import './functions/Create/PortfolioInvestment_Create.js'
import './functions/Create/Investments_Create.js'

import './functions/Delete/Clients_Delete.js'
import './functions/Delete/Client_Delete.js'
import './functions/Delete/Portfolio_Delete.js'
import './functions/Delete/Portfolios_Delete.js'
import './functions/Delete/Investments_Delete.js'
import './functions/Delete/PortfolioInvestment_Delete.js'

import './functions/Process.js'
import './functions/Process2.js'

import '.'
// Alternatively you can use CommonJS syntax:
// require('./commands')



