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
    },
Provider: {
      Selector: "wijmo-wijcombobox-wrapper ui-state-default ui-corner-all ui-state-focus",
      inputType: "Dropdown",
      AccordianSelector: "",
      AccordianName: "Basic Details",
    },
IncludeinConsolidatedReport: {
      Selector: "wijmo-checkbox-box ui-widget ui-state-default ui-corner-all wijmo-checkbox-relative ui-state-active",
      inputType: "Checkbox",
      AccordianSelector: "",
      AccordianName: "Basic Details",
    },
Isworkplacepension: {
      Selector: "wijmo-checkbox-box ui-widget ui-state-default ui-corner-all wijmo-checkbox-relative ui-state-active",
      inputType: "Checkbox",
      AccordianSelector: "",
      AccordianName: "Basic Details",
    },
},

CurrentValue = { 
  CurrentValue: {
    Selector: '.PolicyValuesCurrentValue_tooltip input',
    inputType: "Integer",
    AccordianName: 'Current Value',
    AccordianSelector: '.CurrentValueAccordian',
  }, 
AsAtDate: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all ui-input-trigger-right",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Current Value",
  },
AsAtDate: {
    Selector: "",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Current Value",
  },
AsAtDate: {
    Selector: "",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Current Value",
  },
TransferValue: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Current Value",
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
  },
ProjectedMaturityBasis: {
    Selector: "projectedMaturityBasis wijmo-wijcombobox-input",
    inputType: "Dropdown",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
MaturityValuesProjected: {
    Selector: "maturityValuesProjected wijmo-wijcombobox-input",
    inputType: "Dropdown",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
Term: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
LowRateMaturityValue: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
MidRateMaturityValue: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
HighRateMaturityValue: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
AMC: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
AnnualProductChargesFundCharge: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
AnnualProductChargesPlanCharge: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
AnnualProductChargesPolicyFee: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
AnnualProductchargesAdviserCharge: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Supplied Maturity Values",
  },
},

GrowthRates = {
NominalLow: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Growth Rates",
  },
NominalMid: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Growth Rates",
 },
NominalHigh: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Growth Rates",
  },
InflationAdjustedLow: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Growth Rates",
  },
InflationAdjustedMid: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Growth Rates",
  },
InflationAdjustedHigh: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Growth Rates",
  },
}

OngoingContributions = {

GrossPremium: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Ongoing Contributions",
  },
Frequency: {
    Selector: "wijmo-wijcombobox-wrapper ui-state-default ui-corner-all",
    inputType: "Dropdown",
    AccordianSelector: "",
    AccordianName: "Ongoing Contributions",
  },
Escalation: {
    Selector: "wijmo-wijcombobox-wrapper ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Ongoing Contributions",
  },
OtherEscalation: {
    Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
    inputType: "Integer",
    AccordianSelector: "",
    AccordianName: "Ongoing Contributions",
  },
PolicyAnniversary: {
    Selector: "wijmo-wijcombobox-wrapper ui-state-default ui-corner-all",
    inputType: "Dropdown",
    AccordianSelector: "",
    AccordianName: "Ongoing Contributions",
  },
IncreasingEvery: {
    Selector: "wijmo-wijcombobox-wrapper ui-state-default ui-corner-all",
    inputType: "Dropdown",
    AccordianSelector: "",
    AccordianName: "Ongoing Contributions",
  },
ClientExpenses: {
    Selector: "wijmo-wijcombobox-wrapper ui-state-default ui-corner-all",
    inputType: "Dropdown",
    AccordianSelector: "",
    AccordianName: "Ongoing Contributions",
  },
}

PaidUpMaturityValues = {
PUPMaturityValueLow: {
    Selector: "PUPMaturityValueLow_tooltip",
    inputType: "",
    AccordianSelector: "",
    AccordianName: "Paid Up Maturity Values",
  },
PUPMaturityValueMid: {
    Selector: "PUPMaturityValueMid_tooltip",
    inputType: "",
    AccordianSelector: "",
    AccordianName: "Paid Up Maturity Values",
  },
PUPMaturityValueHigh: {
    Selector: "PUPMaturityValueHigh_tooltip",
    inputType: "",
    AccordianSelector: "",
    AccordianName: "Paid Up Maturity Values",
  },
AsAtDate: {
    Selector: "PupMaturityValuesAsAtDate NonWijmoDatePickerElement day ui-corner-all wijmo-wijinput-input",
    inputType: "",
    AccordianSelector: "",
    AccordianName: "Paid Up Maturity Values",
  },
AsAtDate: {
    Selector: "PupMaturityValuesAsAtMonth NonWijmoDatePickerElement day ui-corner-all wijmo-wijinput-input",
    inputType: "",
    AccordianSelector: "",
    AccordianName: "Paid Up Maturity Values",
  },
AsAtDate: {
    Selector: "PupMaturityValuesAsAtYearNonWijmoDatePickerElement day ui-corner-all wijmo-wijinput-input",
    inputType: "",
    AccordianSelector: "",
    AccordianName: "Paid Up Maturity Values",
  },
}

AllCurrentPlanInputs = {
  ...BasicDetails,
  ...CurrentValue,
  ...SuppliedMaturityValues,
  ...GrowthRates,
  ...OngoingContributions,
  ...PaidUpMaturityValues

}