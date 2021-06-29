import * as InputTypes from "./Core.js";
export const AdviserChargesListSelector = ".AdvsierChargesListPopup",

  AdviserChargesEditorSelector = "#adviserChargesPopup",
  
  SingleInitial = {
    SIA_SinglePremium: {
      Selector: ".VisibleAdviserChargingSection .InitialSingleType_tooltip input",
      inputType:  InputTypes.Input_Dropdown_ReadOnly,
      AccordianSelector: ".VisibleAdviserChargingSection .SingleInitialAccordian",
      AccordianName: "Contribution Based Single Initial",
    },
    SIA_Amount: {
      Selector: ".VisibleAdviserChargingSection .SinglePremiumAmount_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".VisibleAdviserChargingSection .SingleInitialAccordian",
      AccordianName: "Contribution Based Single Initial",
    },
    SIA_Percentage: {
      Selector: ".VisibleAdviserChargingSection .SinglePremiumPercentage_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".VisibleAdviserChargingSection .SingleInitialAccordian",
      AccordianName: "Contribution Based Single Initial",
    },
  },

  FundBasedOngoing = {
    O_Ongoing: {
      Selector: ".VisibleAdviserChargingSection .OngoingType_tooltip input",
      inputType: InputTypes.Input_Dropdown_ReadOnly,
      AccordianSelector: ".VisibleAdviserChargingSection .OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
    O_AnnualAmount: {
      Selector: ".VisibleAdviserChargingSection .OngoingAmount_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".VisibleAdviserChargingSection .OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
    O_AmountPaid: {
      Selector: ".VisibleAdviserChargingSection .OngoingAmountFrequency_tooltip input",
      inputType: InputTypes.Input_Dropdown_ReadOnly,
      AccordianSelector: ".VisibleAdviserChargingSection .OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
    O_AnnualPercentage: {
      Selector: ".VisibleAdviserChargingSection .OngoingPercentage_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".VisibleAdviserChargingSection .OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
    O_PercentagePaid: {
      Selector: ".VisibleAdviserChargingSection .OngoingPercentageFrequency_tooltip input",
      inputType: InputTypes.Input_Dropdown_ReadOnly,
      AccordianSelector: ".VisibleAdviserChargingSection .OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
  },

AllAdviserChargesInputs = {
  ...SingleInitial,
  ...FundBasedOngoing,
};