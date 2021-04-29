import * as constants from"./constantsSelectors.js";
export const

ClientEditorSelector = '#SwitchingClientDetailsPopup',


PersonalDetails = {
  Title: {
    Selector: "wijmo-wijinput-input ui-corner-all",
    inputType: "String",
    AccordianSelector:"",
    AccordianName: "Personal  Details",
  },
  FirstName: {
      Selector: "wijmo-wijinput-input ui-corner-all",
      inputType: "String",
      AccordianSelector:"",
      AccordianName: "Personal  Details",
    },
  Surname: {
      Selector: "wijmo-wijinput-input ui-corner-all",
      inputType: "String",
      AccordianSelector:"",
      AccordianName: "Personal  Details",
    },
  DateOfBirth: {
      Selector: "SwitchingDOB NonWijmoDatePickerElement day wijmo-wijinput-input ui-corner-all",
      inputType: "Integer",
      AccordianSelector:"",
      AccordianName: "Personal  Details",
    },
  DateOfBirth: {
      Selector: "SwitchingDOB NonWijmoDatePickerElement month wijmo-wijinput-input ui-corner-all",
      inputType: "Integer",
      AccordianSelector:"",
      AccordianName: "Personal  Details",
    },
  DateOfBirth: {
      Selector: "SwitchingDOB NonWijmoDatePickerElement year wijmo-wijinput-input ui-corner-all",
      inputType: "Integer",
      AccordianSelector:"",
      AccordianName: "Personal  Details",
    },
  Gender: {
      Selector: "combobox wijmo-wijcombobox-input",
      inputType: "Dropdown",
      AccordianSelector:"",
      AccordianName: "Personal  Details",
    },
  TargetRiskProfile: {
      Selector: "wijmo-wijcombobox-wrapper ui-state-default ui-corner-all",
      inputType: "Dropdown",
      AccordianSelector:"",
      AccordianName: "Personal  Details",
    },
},

FamilyDetails = {
 MaritalStatus: {
    Selector: "combobox wijmo-wijcombobox-input",
    inputType: "Dropdown",
    AccordianSelector:"",
    AccordianName: "Family Details",
  },
Partner: {
    Selector: "combobox wijmo-wijcombobox-input",
    inputType: "Dropdown",
    AccordianSelector:"",
    AccordianName: "Family Details",
  },
NumberofDependentChildren: {
    Selector: "ui-corner-all wijmo-wijinput-numeric wijmo-wijinput-input",
    inputType: "Integer",
    AccordianSelector:"",
    AccordianName: "Family Details",
  },
NumberofIndpendentChildren: {
    Selector: "ui-corner-all wijmo-wijinput-numeric wijmo-wijinput-input",
    inputType: "Integer",
    AccordianSelector:"",
    AccordianName: "Family Details",
  },
NumberofSiblings: {
    Selector: "ui-corner-all wijmo-wijinput-numeric wijmo-wijinput-input",
    inputType: "Integer",
    AccordianSelector:"",
    AccordianName: "Family Details",
  },
},

ClientHealth = {
  HealthIssues: {
    Selector: "combobox wijmo-wijcombobox-input",
    inputType: "Dropdown",
    AccordianSelector:"",
    AccordianName: "Health Details",
  },
  Smoker: {
      Selector: "combobox wijmo-wijcombobox-input",
      inputType: "Dropdown",
      AccordianSelector:"",
      AccordianName: "Health Details",
    },
  Postcode: {
      Selector: "wijmo-wijinput ui-widget ui-helper-clearfix ui-state-default ui-corner-all",
      inputType: "String",
      AccordianSelector:"",
      AccordianName: "Health Details",
    },
},

Tax = {
  TaxRegion: {
    Selector: "wijmo-wijcombobox-wrapper ui-state-default ui-corner-all",
    inputType: "Dropdown",
    AccordianSelector:"",
    AccordianName: "Tax and Lifetime Allowance",
  },
  LifetimeAllowanceType: {
      Selector: "combobox wijmo-wijcombobox-input",
      inputType: "Dropdown",
      AccordianSelector:"",
      AccordianName: "Tax and Lifetime Allowance",
  },
  PreviouslyUsed: {
      Selector: "",
      inputType: "Integer",
      AccordianSelector:"",
      AccordianName: "Tax and Lifetime Allowance",
  },
},

ServiceBasis = {
 Autosetservicebasisbasedonassetsundermanagement: {
    Selector: "wijmo-checkbox-box ui-widget ui-state-default ui-corner-all wijmo-checkbox-relative",
    inputType: "Checkbox",
    AccordianSelector:"",
    AccordianName: "Service Basis",
  },
ServiceBasis: {
    Selector: "combobox wijmo-wijcombobox-input",
    inputType: "Dropdown",
    AccordianSelector:"",
    AccordianName: "Service Basis",
  },
EthicalInvestment: {
    Selector: "combobox wijmo-wijcombobox-input",
    inputType: "Dropdown",
    AccordianSelector:"",
    AccordianName: "Service Basis",
  },
PayingFee: {
    Selector: "combobox wijmo-wijcombobox-input",
    inputType: "Dropdown",
    AccordianSelector:"",
    AccordianName: "Service Basis",
  },
NextReviewVisitDD: {
    Selector: "ClientNextReview NonWijmoDatePickerElement day ui-corner-all wijmo-wijinput-input",
    inputType: "Integer",
    AccordianSelector:"",
    AccordianName: "Service Basis",
  },
NextReviewVisitMM: {
    Selector: "ClientNextReview NonWijmoDatePickerElement month ui-corner-all wijmo-wijinput-input",
    inputType: "Integer",
    AccordianSelector:"",
    AccordianName: "Service Basis",
  },
NextReviewVisitYYYY: {
    Selector: "ClientNextReview NonWijmoDatePickerElement year ui-corner-all wijmo-wijinput-input",
    inputType: "Integer",
    AccordianSelector:"",
    AccordianName: "Service Basis",
  },
ClientStatus: {
    Selector: "combobox wijmo-wijcombobox-input",
    inputType: "Dropdown",
    AccordianSelector:"",
    AccordianName: "Service Basis",
  },
Adviser: {
    Selector: "combobox wijmo-wijcombobox-input",
    inputType: "Dropdown",
    AccordianSelector:"",
    AccordianName: "Service Basis",
  },
SharethisClient: {
    Selector: "wijmo-checkbox-box ui-widget ui-state-default ui-corner-all wijmo-checkbox-relative",
    inputType: "Checkbox",
    AccordianSelector:"",
    AccordianName: "Service Basis",
  },
},

QuoteDetails = {
  Reference: {
    Selector:".Reference_tooltip input",
    inputType:"String",
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