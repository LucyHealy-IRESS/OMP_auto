import * as constants from "./constantsSelectors.js";
export const

ClientEditorSelector = '#SwitchingClientDetailsPopup',


PersonalDetails = {
},

FamilyDetails = {
},

ClientHealth = {
},

Tax = {
},

ServiceBasis = {
},

QuoteDetails = {
  Reference: {
    Selector: ".Reference_tooltip input",
    inputType: "String",
    AccordianSelector:"#QuoteDetails",
    AccordianName: 'Quote Details', 
  },
},


AllClientInputs = {
  ...PersonalDetails,
  ...FamilyDetails,
  ...ClientHealth,
  ...Tax,
  ...ServiceBasis,
  ...QuoteDetails
}