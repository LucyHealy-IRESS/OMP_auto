import * as constants from "../constants/constantsSelectors.js";
export const

CurrentPlanListSelector = "#SwitchingCurrentPlansListPopUp",
CurrentPlanEditorSelector = '#EditCurrentPlanPopup',

SwitchingCurrentPlan = {
  ProductID: {
      Selector: '.productCombo',
      inputType: "ProductDropdown",
      AccordianName: 'Basic Details',
      AccordianSelector: '.wijmo-wijaccordion-content-active',
    }, 
  Reference: {
      Selector: '.ProductName_tooltip',
      inputType: "String",
      AccordianName: 'Basic Details',
      AccordianSelector: '.wijmo-wijaccordion-content-active',
    }
},