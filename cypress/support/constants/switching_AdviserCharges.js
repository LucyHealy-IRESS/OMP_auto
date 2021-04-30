import * as InputTypes from "./Core.js";
export const AdviserChargesListSelector = ".AdvsierChargesListPopup",
  AdviserChargesEditorSelector = "#adviserChargesPopup",
  SingleInitial = {
    SIA_SinglePremium: {
      Selector: ".InitialSingleType_tooltip input",
      inputType:  InputTypes.Input_Dropdown,
      AccordianSelector: ".SingleInitialAccordian",
      AccordianName: "Contribution Based Single Initial",
    },
    SIA_Amount: {
      Selector: ".SinglePremiumAmount_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".SingleInitialAccordian",
      AccordianName: "Contribution Based Single Initial",
    },
    SIA_Percentage: {
      Selector: ".SinglePremiumPercentage_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".SingleInitialAccordian",
      AccordianName: "Contribution Based Single Initial",
    },
  },
  RegularInitial = {
    Reg_RegularPremium: {
      Selector: ".InitialRegularType_tooltip input",
      inputType: InputTypes.Input_Dropdown,
      AccordianSelector: ".RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
    Reg_Amount: {
      Selector: ".RegularPremiumAmount_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
    Reg_Percentage: {
      Selector: ".RegularPremiumPercentage_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
    Reg_Continuing: {
      Selector: ".ContributionBasedStop_tooltip input",
      inputType: InputTypes.Input_Dropdown,
      AccordianSelector: ".RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
    Reg_StopAfterMonth: {
      Selector: ".ContributionBasedStopAfterMonth_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
    Reg_StopAfterReceived: {
      Selector: ".ContributionBasedStopAfterAmount_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".RegularInitialAccordian",
      AccordianName: "Contribution Based Regular Initial",
    },
  },
  FundBasedOngoing = {
    O_Ongoing: {
      Selector: ".OngoingType_tooltip input",
      inputType: InputTypes.Input_Dropdown,
      AccordianSelector: ".OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
    O_AnnualAmount: {
      Selector: ".OngoingAmount_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
    O_AmountPaid: {
      Selector: ".OngoingAmountFrequency_tooltip input",
      inputType: InputTypes.Input_Dropdown,
      AccordianSelector: ".OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
    O_AnnualPercentage: {
      Selector: ".OngoingPercentage_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
    O_PercentagePaid: {
      Selector: ".OngoingPercentageFrequency_tooltip input",
      inputType: InputTypes.Input_Dropdown,
      AccordianSelector: ".OngoingInitialAccordian",
      AccordianName: "Fund Based On-Going",
    },
  },
  Abridged = {
    A_AbridgedChargeAmount: {
      Selector: ".AbridgedChargeAmount_tooltip input",
      inputType: InputTypes.Input_Integer,
      AccordianSelector: ".AbridgedAdviceAccordian",
      AccordianName: "Abridged Advice Charges",
    },
  },
AllAdviserChargesInputs = {
  ...SingleInitial,
  ...RegularInitial,
  ...FundBasedOngoing,
  ...Abridged,
};
