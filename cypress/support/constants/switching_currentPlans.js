import * as constants from "./constantsSelectors.js";
export const

CurrentPlanListSelector = "#SwitchingCurrentPlansListPopUp",
CurrentPlanEditorSelector = '#EditCurrentPlanPopup',

BasicDetails = {
  ProductID: {
      Selector: '.productCombo',
      inputType: "ProductDropdown",
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
 
},

AllCurrentPlanInputs = {
  ...BasicDetails,
  ...CurrentValue
}