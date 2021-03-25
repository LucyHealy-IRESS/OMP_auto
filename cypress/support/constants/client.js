import * as constants from "../constants/constantsSelectors.js";
export const

ClientEditorSelector = '#EditClientPopup',

PersonalDetails = {
  Title: {
    Selector: constants.Client_Title,
    inputType: "String",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  Firstname: {
    Selector: constants.Client_Firstname,
    inputType: "String",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  Surname: {
    Selector: constants.Client_Surname,
    inputType: "String",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  DateOfBirth: {
    Selector: constants.Client_DOB,
    ddSelector:constants.Client_DOB_DD,
    mmSelector:constants.Client_DOB_MM,
    yyyySelector:constants.Client_DOB_YYYY,
    inputType: "Date",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  Gender: {
    Selector: constants.Client_Gender,
    inputType: "Dropdown",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
  PlannedRetirementAge: {
    Selector: constants.Client_PlannedRetirementAge,
    inputType: "ValueOrClick",
    AccordianSelector:"#PersonalDetails",
    AccordianName: 'Personal Details', 
  },
},

FamilyDetails = {
  MaritalStatus: {
    Selector: constants.Client_MaritalStatus,
    inputType: "Dropdown",
    AccordianSelector:"#FamilyDetails",
    AccordianName: 'Family Details', 
  },
  DependantChildren: {
    Selector: constants.Client_DependantChildren,
    inputType: "String",
    AccordianSelector:"#FamilyDetails",
    AccordianName: 'Family Details', 
  },
  IndependantChildren: {
    Selector: constants.Client_IndependantChildren,
    inputType: "String",
    AccordianSelector:"#FamilyDetails",
    AccordianName: 'Family Details', 
  },
  Siblings: {
    Selector: constants.Client_Siblings,
    inputType: "String",
    AccordianSelector:"#FamilyDetails",
    AccordianName: 'Family Details', 
  }
},


ClientContact = {
  Address1: {
    Selector: constants.Client_Address1,
    inputType: "String",
    AccordianSelector:"#ContactDetails",
    AccordianName: 'Contact Details', 
  },
  Address2: {
    Selector: constants.Client_Address2,
    inputType: "String",
    AccordianSelector:"#ContactDetails",
    AccordianName: 'Contact Details', 
  },
  Address3: {
    Selector: constants.Client_Address3,
    inputType: "String",
    AccordianSelector:"#ContactDetails",
    AccordianName: 'Contact Details', 
  },
  City: {
    Selector: constants.Client_City,
    inputType: "String",
    AccordianSelector:"#ContactDetails",
    AccordianName: 'Contact Details', 
  },
  County: {
    Selector: constants.Client_County,
    inputType: "String",
    AccordianSelector:"#ContactDetails",
    AccordianName: 'Contact Details', 
  },
  Email: {
    Selector: constants.Client_Email,
    inputType: "String",
    AccordianSelector:"#ContactDetails",
    AccordianName: 'Contact Details', 
  },
  WorkNumber: {
    Selector: constants.Client_WorkNumber,
    inputType: "String",
    AccordianSelector:"#ContactDetails",
    AccordianName: 'Contact Details', 
  },
  HomeNumber: {
    Selector: constants.Client_HomeNumber,
    inputType: "String",
    AccordianSelector:"#ContactDetails",
    AccordianName: 'Contact Details', 
  },
  MobileNumber: {
    Selector: constants.Client_MobileNumber,
    inputType: "String",
    AccordianSelector:"#ContactDetails",
    AccordianName: 'Contact Details', 
  },
},

ClientHealth = {
  HealthStatus: {
    Selector: constants.Client_HealthStatus,
    inputType: "Dropdown",
    AccordianSelector:"#HealthDetails",
    AccordianName: 'Health Details', 
  },
  SmokerStatus: {
    Selector: constants.Client_SmokerStatus,
    inputType: "Dropdown",
    AccordianSelector:"#HealthDetails",
    AccordianName: 'Health Details', 
  },
  Postcode: {
    Selector: constants.Client_Postcode,
    inputType: "String",
    AccordianSelector:"#HealthDetails",
    AccordianName: 'Health Details', 
  }
},

Tax = {
  TaxRegion: {
    Selector: constants.Client_TaxRegion,
    inputType: "String",
    AccordianSelector:"#TaxAndLifetimeAllowance",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  LifetimeAllowanceType: {
    Selector: constants.Client_LifetimeAllowanceType,
    inputType: "Dropdown",
    AccordianSelector:"#TaxAndLifetimeAllowance",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  ProtectedAmount: {
    Selector: constants.Client_ProtectedAmount,
    inputType: "Integer",
    AccordianSelector:"#TaxAndLifetimeAllowance",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  LifetimeAllowancePreviouslyUsed: {
    Selector: constants.Client_LifetimeAllowancePreviouslyUsed,
    inputType: "Integer",
    AccordianSelector:"#TaxAndLifetimeAllowance",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  LifetimeAllowanceEnhancementFactor: {
    Selector: constants.Client_LifetimeAllowanceEnhancementFactor,
    inputType: "Integer",
    AccordianSelector:"#TaxAndLifetimeAllowance",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  CustomLifetimeAllowance: {
    Selector: constants.Client_CustomLifetimeAllowance,
    inputType: "Integer",
    AccordianSelector:"#TaxAndLifetimeAllowance",
    AccordianName: 'Tax and Lifetime Allowance', 
  },
  AllowanceIncreases: {
    Selector: constants.Client_AllowanceIncreases,
    inputType: "Dropdown",
    AccordianSelector:"#TaxAndLifetimeAllowance",
    AccordianName: 'Tax and Lifetime Allowance', 
  }
  
},


ServiceBasis = {
  ServiceBasis: {
    Selector: constants.Client_ServiceBasis,
    inputType: "DropdownIndex",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  EthicalInvestment: {
    Selector: constants.Client_EthicalInvestment,
    inputType: "DropdownIndex",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  PayingFee: {
    Selector: constants.Client_PayingFee,
    inputType: "Dropdown",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  NextReviewDate: {
    Selector: constants.dd,
    ddSelector: constants.Client_NextReviewVisit_Day,
    mmSelector: constants.Client_NextReviewVisit_Month,
    yyyySelector: constants.Client_NextReviewVisit_Year,
    inputType: "Date",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  ClientStatus: {
    Selector: constants.Client_Status,
    inputType: "Dropdown",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  IsSharedWithCompany:{
    Selector: constants.Client_IsSharedWithCompany,
    inputType: "Checkbox",
    AccordianSelector:"#ServiceBasis",
    AccordianName: 'Service Basis', 
  },
  //Adviser is ownerguid, not done yet
 
},

AllClientInputs = {
  ...PersonalDetails,
  ...FamilyDetails,
  ...ClientHealth,
  ...Tax,
  ...ClientContact,
  ...ServiceBasis
}