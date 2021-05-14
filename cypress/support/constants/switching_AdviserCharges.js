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
  RegularInitial = {
    Reg_RegularPremium: {
      Selector: ".VisibleAdviserChargingSection .InitialRegularType_tooltip input",
      inputType: InputTypes.Input_Dropdown_ReadOnly,
      AccordianSelector: ".VisibleAdviserChargingSection .RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
    Reg_Amount: {
      Selector: ".VisibleAdviserChargingSection .RegularPremiumAmount_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".VisibleAdviserChargingSection .RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
    Reg_Percentage: {
      Selector: ".VisibleAdviserChargingSection .RegularPremiumPercentage_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".VisibleAdviserChargingSection .RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
    Reg_Continuing: {
      Selector: ".VisibleAdviserChargingSection .ContributionBasedStop_tooltip input",
      inputType: InputTypes.Input_Dropdown,
      AccordianSelector: ".VisibleAdviserChargingSection .RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
    Reg_StopAfterMonth: {
      Selector: ".VisibleAdviserChargingSection .ContributionBasedStopAfterMonth_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".VisibleAdviserChargingSection .RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
    Reg_StopAfterReceived: {
      Selector: ".VisibleAdviserChargingSection .ContributionBasedStopAfterAmount_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".VisibleAdviserChargingSection .RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
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
      inputType: InputTypes.Input_Dropdown,
      AccordianSelector: ".VisibleAdviserChargingSection .OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
  },
  Abridged = {
    A_AbridgedChargeAmount: {
      Selector: ".VisibleAdviserChargingSection .AbridgedChargeAmount_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".VisibleAdviserChargingSection .AbridgedAdviceAccordian",
      AccordianName: "Abridged Advice Charges",
    },
  },
AllAdviserChargesInputs = {
  ...SingleInitial,
  ...RegularInitial,
  ...FundBasedOngoing,
  ...Abridged,
};
