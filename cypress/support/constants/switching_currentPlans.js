import * as constants from "./constantsSelectors.js";
export const

CurrentPlanListSelector = "#SwitchingCurrentPlansListPopUp",
CurrentPlanEditorSelector = '#EditCurrentPlanPopup',

BasicDetails = {
  ProductID: {
      Selector: '.productCombo',
      inputType: "Dropdown_ReadOnly",
      AccordianName: 'Basic Details',
      AccordianSelector: '.BasicDetailsAccordian',
    }, 
  Reference: {
      Selector: '.ProductName_tooltip input',
      inputType: "String",
      AccordianName: 'Basic Details',
      AccordianSelector: '.BasicDetailsAccordian',
    }
},

CurrentValue = { 
  CurrentValue: {
    Selector: '.PolicyValuesCurrentValue_tooltip input',
    inputType: "Integer",
    AccordianName: 'Current Value',
    AccordianSelector: '.CurrentValueAccordian',
  }, 
},


SuppliedMaturityValues = { 
  ProjectedMaturityBasis: {
    Selector: '.projectedMaturityBasis ',
    inputType: "Dropdown_ReadOnly",
    AccordianName: 'Supplied Maturity Values',
    AccordianSelector: '.SuppliedMaturityValuesAccordian',
  }, 
  RetirementAge: {
    Selector: '.RetirementAge_tooltip input',
    inputType: "Integer",
    AccordianName: 'Supplied Maturity Values',
    AccordianSelector: '.SuppliedMaturityValuesAccordian',
  }
},

AllCurrentPlanInputs = {
  ...BasicDetails,
  ...CurrentValue,
  ...SuppliedMaturityValues
}