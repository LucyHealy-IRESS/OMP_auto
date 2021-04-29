import * as constants from "./constantsSelectors.js";
export const

ClientEditorSelector = '#SwitchingClientDetailsPopup',

PersonalDetails = {
  Title: {
    Selector: ".Title_tooltip input",
    inputType: "String",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  Firstname: {
    Selector: ".FirstName_tooltip input",
    inputType: "String",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  Surname: {
    Selector: ".Surname_tooltip input",
    inputType: "String",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  DOB: {
    Selector: ".DateOfBirth_tooltip input",
    ddSelector:".SwitchingDOB.day",
    mmSelector:".SwitchingDOB.month",
    yyyySelector:".SwitchingDOB.year",
    inputType: "Date",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  Gender: {
    Selector: ".Reference_tooltip input",
    inputType: "Dropdown",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  PlannedRetirementAge: {
    Selector: ".PlannedRetirementAge",
    inputType: "Integer",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  LifeExpectancy: {
    Selector: ".LifeExpectancy_tooltip input",
    inputType: "Integer",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  TargetRiskProfile: {
    Selector: ".TargetRiskProfile",
    inputType: "Dropdown",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  }
},

FamilyDetails = {
  MaritalStatus: {
    Selector: ".MaritalStatus_tooltip combobox",
    inputType: "Dropdown",
    AccordianSelector:"#FamilyDetails",
    AccordianName: 'Family Details', 
  },
  Partner: {
    Selector: ".PartnerGuid_tooltip combobox",
    inputType: "Dropdown",
    AccordianSelector:"#FamilyDetails",
    AccordianName: 'Family Details', 
  },
  DependantChildren: {
    Selector: ".NoOfDepChildren",
    inputType: "String",
    AccordianSelector:"#FamilyDetails",
    AccordianName: 'Family Details', 
  },
  IndependantChildren: {
    Selector: ".NoOfIndependantChildren",
    inputType: "String",
    AccordianSelector:"#FamilyDetails",
    AccordianName: 'Family Details', 
  },
  Siblings: {
    Selector: ".NoOfSiblings",
    inputType: "String",
    AccordianSelector:"#FamilyDetails",
    AccordianName: 'Family Details', 
  }
},

ClientHealth = {
  HealthIssues: {
    Selector: ".HealthIsues",
    inputType: "Dropdown",
    AccordianSelector:"#HealthDetails",
    AccordianName: 'Health Details', 
  },
  Smoker: {
    Selector: ".smoker",
    inputType: "Dropdown",
    AccordianSelector:"#HealthDetails",
    AccordianName: 'Health Details', 
  },
  Smoker: {
    Selector: ".Postcode",
    inputType: "String",
    AccordianSelector:"#HealthDetails",
    AccordianName: 'Health Details', 
  }
},

Tax = {
  TaxRegion: {
    Selector: ".TaxRegion",
    inputType: "Dropdown",
    AccordianSelector:"#TaxDetails",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  LifetimeAllowanceType: {
    Selector: ".LifetimeAllowanceType_tooltip .combobox",
    inputType: "Dropdown",
    AccordianSelector:"#TaxDetails",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  ProtectedAmount: {
    Selector: ".ProtectedAmount_tooltip input",
    inputType: "Integer",
    AccordianSelector:"#TaxDetails",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  EnhancementFactor: {
    Selector: ".LifetimeAllowanceEnhancementFactor_tooltip input",
    inputType: "Integer",
    AccordianSelector:"#TaxDetails",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  CustomLifetimeAllowance: {
    Selector: ".CustomLifetimeAllowance_tooltip input",
    inputType: "Integer",
    AccordianSelector:"#TaxDetails",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  AllowanceIncreases: {
    Selector: ".AllowanceIncreases_tooltip input",
    inputType: "Dropdown",
    AccordianSelector:"#TaxDetails",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  PreviouslyUsed: {
    Selector: ".LifetimeAllowancePreviouslyUsed_tooltip input",
    inputType: "Integer",
    AccordianSelector:"#TaxDetails",
    AccordianName: 'Tax and Lifetime Allowance', 
  }
},

ServiceBasis = {
  AutomaticallySetServiceBasis: {
    Selector: ".AutoSetServiceBasis",
    inputType: "Checkbox",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  ServiceBasis: {
    Selector: ".ServiceBasis.combobox",
    inputType: "Dropdown",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  EthicalInvestment: {
    Selector: ".EthicalInvestment",
    inputType: "Dropdown",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  PayingFee: {
    Selector: ".PayingFee",
    inputType: "Dropdown",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  NextReviewVisit: {
    Selector: ".ClientNextReview",
    ddSelector:".ClientNextReview.day",
    mmSelector:".ClientNextReview.month",
    yyyySelector:".ClientNextReview.year",
    inputType: "Date",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  ClientStatus: {
    Selector: ".ClientStatus",
    inputType: "Dropdown",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  Adviser: {
    Selector: ".Adviser",
    inputType: "Dropdown",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  }
},

QuoteDetails = {
  Reference: {
    Selector: ".Reference_tooltip input",
    inputType: "String",
    AccordianSelector:"#QuoteDetails",
    AccordianName: 'Quote Details', 
  },
  Status: {
    Selector: ".Status_tooltip input",
    inputType: "Dropdown",
    AccordianSelector:"#QuoteDetails",
    AccordianName: 'Quote Details', 
  },
  Comments: {
    Selector: ".QuoteComments",
    inputType: "String",
    AccordianSelector:"#QuoteDetails",
    AccordianName: 'Quote Details', 
  }
},


AllClientInputs = {
  ...PersonalDetails,
  ...FamilyDetails,
  ...ClientHealth,
  ...Tax,
  ...ServiceBasis,
  ...QuoteDetails
}