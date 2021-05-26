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
import './functions/InputProcessing.js'
import './functions/Utils.js'

import './functions/Process.js'

import './functions/Create/Clients_Create.js'
import './functions/Create/Client_Create.js'
import './functions/Create/Portfolios_Create.js'
import './functions/Create/Portfolio_Create.js'
import './functions/Create/PortfolioInvestment_Create.js'
import './functions/Create/Investments_Create.js'
import './functions/Create/PortfolioTargetAssetAllocation_Create.js'
import './functions/Create/TargetAssetAllocations_Create.js'
import './functions/Create/SafeguardedBenefitsSegments_Create.js'
import './functions/Create/SafeguardedBenefitsSegment_Create.js'
import './functions/Create/SwitchingQuotes_Create.js'
import './functions/Create/SwitchingQuote_Create.js'
import './functions/Create/Switching_CurrentPlans_Create.js'
import './functions/Create/Switching_CurrentPlan_Create.js'
import './functions/Create/Switching_CurrentPlanHolding_Create.js'
import './functions/Create/Switching_CurrentPlanHoldings_Create.js'
import './functions/Create/Switching_ClientDetails_Create.js'
import './functions/Create/Switching_NewInvestments_Create.js'
import './functions/Create/Switching_NewInvestments_ABI_Sectors_Create.js'
import './functions/Create/Switching_NewInvestments_ABI_SubSectors_Create.js'
import './functions/Create/Switching_AdviserCharges_Create.js'  
import './functions/Create/Switching_AdviserCharging_Create.js'
import './functions/Create/Switching_ProductFilters_Create.js'
import './functions/Create/Switching_ProductFeatures_Create.js'
import './functions/Create/Switching_SafeguardedBenefitsSegments_Create.js'
import './functions/Create/Switching_SafeguardedBenefitsSegment_Create.js'
import './functions/Create/Switching_NewInvestments_Funds_Create.js'
import './functions/Create/Switching_NewInvestments_Fund_Create.js'
import './functions/Create/PortfolioSearch_Create.js'

import './functions/Assert/Clients_Assert.js'
import './functions/Assert/Client_Assert.js'
import './functions/Assert/Portfolios_Assert.js'
import './functions/Assert/Portfolio_Assert.js'
import './functions/Assert/PortfolioInvestment_Assert.js'
import './functions/Assert/Investments_Assert.js'
import './functions/Assert/PortfolioTargetAssetAllocation_Assert.js'
import './functions/Assert/TargetAssetAllocations_Assert.js'
import './functions/Assert/SafeguardedBenefitsSegments_Assert.js'
import './functions/Assert/SafeguardedBenefitsSegment_Assert.js'
import './functions/Assert/SwitchingQuotes_Assert.js'
import './functions/Assert/SwitchingQuote_Assert.js'
import './functions/Assert/Switching_CurrentPlans_Assert.js'
import './functions/Assert/Switching_CurrentPlan_Assert.js'
import './functions/Assert/Switching_CurrentPlanHolding_Assert.js'
import './functions/Assert/Switching_CurrentPlanHoldings_Assert.js'
import './functions/Assert/Switching_ClientDetails_Assert.js'
import './functions/Assert/Switching_NewInvestments_Assert.js' 
import './functions/Assert/Switching_NewInvestments_ABI_Sectors_Assert.js' 
import './functions/Assert/Switching_NewInvestments_ABI_SubSectors_Assert.js' 
import './functions/Assert/Switching_AdviserCharges_Assert.js'
import './functions/Assert/Switching_AdviserCharging_Assert.js'
import './functions/Assert/Switching_ProductFilters_Assert.js'
import './functions/Assert/Switching_ProductFeatures_Assert.js'
import './functions/Assert/Switching_SafeguardedBenefitsSegments_Assert.js'
import './functions/Assert/Switching_SafeguardedBenefitsSegment_Assert.js'
import './functions/Assert/Switching_NewInvestments_Funds_Assert.js'
import './functions/Assert/Switching_NewInvestments_Fund_Assert.js'
import './functions/Assert/PortfolioSearch_Assert.js'

import './functions/Delete/Clients_Delete.js'
import './functions/Delete/Client_Delete.js'
import './functions/Delete/Portfolio_Delete.js'
import './functions/Delete/Portfolios_Delete.js'
import './functions/Delete/Investments_Delete.js'
import './functions/Delete/PortfolioInvestment_Delete.js'
import './functions/Delete/PortfolioTargetAssetAllocation_Delete.js'
import './functions/Delete/TargetAssetAllocations_Delete.js'
import './functions/Delete/SafeguardedBenefitsSegments_Delete.js'
import './functions/Delete/SafeguardedBenefitsSegment_Delete.js'
import './functions/Delete/SwitchingQuotes_Delete.js'
import './functions/Delete/SwitchingQuote_Delete.js'
import './functions/Delete/Switching_CurrentPlans_Delete.js'
import './functions/Delete/Switching_CurrentPlan_Delete.js'
import './functions/Delete/Switching_CurrentPlanHolding_Delete.js'
import './functions/Delete/Switching_CurrentPlanHoldings_Delete.js'
import './functions/Delete/Switching_ClientDetails_Delete.js'
import './functions/Delete/Switching_NewInvestments_Delete.js' 
import './functions/Delete/Switching_NewInvestments_ABI_Sectors_Delete.js' 
import './functions/Delete/Switching_NewInvestments_ABI_SubSectors_Delete.js' 
import './functions/Delete/Switching_AdviserCharges_Delete.js'
import './functions/Delete/Switching_AdviserCharging_Delete.js'
import './functions/Delete/Switching_ProductFilters_Delete.js'
import './functions/Delete/Switching_ProductFeatures_Delete.js'
import './functions/Delete/Switching_SafeguardedBenefitsSegments_Delete.js'
import './functions/Delete/Switching_SafeguardedBenefitsSegment_Delete.js'
import './functions/Delete/Switching_NewInvestments_Funds_Delete.js'
import './functions/Delete/Switching_NewInvestments_Fund_Delete.js'
import './functions/Delete/PortfolioSearch_Delete.js'


import '.'
// Alternatively you can use CommonJS syntax:
// require('./commands')



