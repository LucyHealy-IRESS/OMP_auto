import * as constants from "../constants/constantsSelectors.js";
export const

ClientInputs = {
  Title: {
    Selector: constants.titleconst,
    inputType: "String",
  },
  Firstname: {
    Selector: constants.firstnameconst,
    inputType: "String",
  },
  Surname: {
    Selector: constants.surnameconst,
    inputType: "String",
  },
  DateOfBirth: {
    Selector: constants.dobDD,
    ddSelector:constants.dobDD,
    mmSelector:constants.dobMM,
    yyyySelector:constants.dobYYYY,
    inputType: "Date",
  },
  Gender: {
    Selector: constants.genderconst,
    inputType: "Dropdown",
  },
  PlannedRetirementAge: {
    Selector: constants.plannedretirementage,
    inputType: "ValueOrClick",
  },
},

FamilyDetails = {
  MaritalStatus: {
    Selector: constants.clMaritalStatus,
    inputType: "Dropdown",
  },
  DependantChildren: {
    Selector: constants.clDependantChildren,
    inputType: "String",
  },
  IndependantChildren: {
    Selector: constants.clIndependantChildren,
    inputType: "String",
  },
  Siblings: {
    Selector: constants.clSiblings,
    inputType: "String",
  }
},


ClientContact = {
  Address1: {
    Selector: constants.clAddress1,
    inputType: "String",
  },
  Address2: {
    Selector: constants.clAddress2,
    inputType: "String",
  },
  Address3: {
    Selector: constants.clAddress3,
    inputType: "String",
  },
  City: {
    Selector: constants.clCity,
    inputType: "String",
  },
  County: {
    Selector: constants.clCounty,
    inputType: "String",
  },
  Email: {
    Selector: constants.clEmail,
    inputType: "String",
  },
  WorkNumber: {
    Selector: constants.clWorkNumber,
    inputType: "String",
  },
  HomeNumber: {
    Selector: constants.clHomeNumber,
    inputType: "String",
  },
  MobileNumber: {
    Selector: constants.clMobileNumber,
    inputType: "String",
  },
},

ClientHealth = {
  HealthStatus: {
    Selector: constants.clHealthStatus,
    inputType: "Dropdown",
  },
  SmokerStatus: {
    Selector: constants.clSmokerStatus,
    inputType: "Dropdown",
  },
  Postcode: {
    Selector: constants.clPostcode,
    inputType: "String",
  }
},

Tax = {
  TaxRegion: {
    Selector: constants.clTaxRegion,
    inputType: "String",
  },
  LifetimeAllowanceType: {
    Selector: constants.clLifetimeAllowanceType,
    inputType: "Dropdown",
  },
  ProtectedAmount: {
    Selector: constants.clProtectedAmount,
    inputType: "Integer",
  },
  LifetimeAllowancePreviouslyUsed: {
    Selector: constants.clLifetimeAllowancePreviouslyUsed,
    inputType: "Integer",
  },
  LifetimeAllowanceEnhancementFactor: {
    Selector: constants.clLifetimeAllowanceEnhancementFactor,
    inputType: "Integer",
  },
  CustomLifetimeAllowance: {
    Selector: constants.clCustomLifetimeAllowance,
    inputType: "Integer",
  },
  AllowanceIncreases: {
    Selector: constants.clAllowanceIncreases,
    inputType: "Dropdown",
  }
  
},


ServiceBasis = {
  ServiceBasis: {
    Selector: constants.clServiceBasis,
    inputType: "DropdownIndex",
  },
  EthicalInvestment: {
    Selector: constants.clEthicalInvestment,
    inputType: "DropdownIndex",
  },
  PayingFee: {
    Selector: constants.clPayingFee,
    inputType: "Dropdown",
  },
  NextReviewDate: {
    Selector: constants.clNextReviewVisit_Day,
    ddSelector: constants.clNextReviewVisit_Day,
    mmSelector: constants.clNextReviewVisit_Month,
    yyyySelector: constants.clNextReviewVisit_Year,
    inputType: "Date",
  },
  ClientStatus: {
    Selector: constants.clClientStatus,
    inputType: "Dropdown",
  },
  IsSharedWithCompany:{
    Selector: constants.clIsSharedWithCompany,
    inputType: "Checkbox",
  }
  //Adviser is ownerguid, not done yet
  
}