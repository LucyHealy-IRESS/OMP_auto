import * as constants from "../constants/constantsSelectors.js";
export const

ClientEditorSelector = '#EditClientPopup',

ClientInputs = {
  Title: {
    Selector: constants.Client_Title,
    inputType: "String",
  },
  Firstname: {
    Selector: constants.Client_Firstname,
    inputType: "String",
  },
  Surname: {
    Selector: constants.Client_Surname,
    inputType: "String",
  },
  DateOfBirth: {
    Selector: constants.Client_DOB,
    ddSelector:constants.Client_DOB_DD,
    mmSelector:constants.Client_DOB_MM,
    yyyySelector:constants.Client_DOB_YYYY,
    inputType: "Date",
  },
  Gender: {
    Selector: constants.Client_Gender,
    inputType: "Dropdown",
  },
  PlannedRetirementAge: {
    Selector: constants.Client_PlannedRetirementAge,
    inputType: "ValueOrClick",
  },
},

FamilyDetails = {
  MaritalStatus: {
    Selector: constants.Client_MaritalStatus,
    inputType: "Dropdown",
  },
  DependantChildren: {
    Selector: constants.Client_DependantChildren,
    inputType: "String",
  },
  IndependantChildren: {
    Selector: constants.Client_IndependantChildren,
    inputType: "String",
  },
  Siblings: {
    Selector: constants.Client_Siblings,
    inputType: "String",
  }
},


ClientContact = {
  Address1: {
    Selector: constants.Client_Address1,
    inputType: "String",
  },
  Address2: {
    Selector: constants.Client_Address2,
    inputType: "String",
  },
  Address3: {
    Selector: constants.Client_Address3,
    inputType: "String",
  },
  City: {
    Selector: constants.Client_City,
    inputType: "String",
  },
  County: {
    Selector: constants.Client_County,
    inputType: "String",
  },
  Email: {
    Selector: constants.Client_Email,
    inputType: "String",
  },
  WorkNumber: {
    Selector: constants.Client_WorkNumber,
    inputType: "String",
  },
  HomeNumber: {
    Selector: constants.Client_HomeNumber,
    inputType: "String",
  },
  MobileNumber: {
    Selector: constants.Client_MobileNumber,
    inputType: "String",
  },
},

ClientHealth = {
  HealthStatus: {
    Selector: constants.Client_HealthStatus,
    inputType: "Dropdown",
  },
  SmokerStatus: {
    Selector: constants.Client_SmokerStatus,
    inputType: "Dropdown",
  },
  Postcode: {
    Selector: constants.Client_Postcode,
    inputType: "String",
  }
},

Tax = {
  TaxRegion: {
    Selector: constants.Client_TaxRegion,
    inputType: "String",
  },
  LifetimeAllowanceType: {
    Selector: constants.Client_LifetimeAllowanceType,
    inputType: "Dropdown",
  },
  ProtectedAmount: {
    Selector: constants.Client_ProtectedAmount,
    inputType: "Integer",
  },
  LifetimeAllowancePreviouslyUsed: {
    Selector: constants.Client_LifetimeAllowancePreviouslyUsed,
    inputType: "Integer",
  },
  LifetimeAllowanceEnhancementFactor: {
    Selector: constants.Client_LifetimeAllowanceEnhancementFactor,
    inputType: "Integer",
  },
  CustomLifetimeAllowance: {
    Selector: constants.Client_CustomLifetimeAllowance,
    inputType: "Integer",
  },
  AllowanceIncreases: {
    Selector: constants.Client_AllowanceIncreases,
    inputType: "Dropdown",
  }
  
},


ServiceBasis = {
  ServiceBasis: {
    Selector: constants.Client_ServiceBasis,
    inputType: "DropdownIndex",
  },
  EthicalInvestment: {
    Selector: constants.Client_EthicalInvestment,
    inputType: "DropdownIndex",
  },
  PayingFee: {
    Selector: constants.Client_PayingFee,
    inputType: "Dropdown",
  },
  NextReviewDate: {
    Selector: constants.dd,
    ddSelector: constants.Client_NextReviewVisit_Day,
    mmSelector: constants.Client_NextReviewVisit_Month,
    yyyySelector: constants.Client_NextReviewVisit_Year,
    inputType: "Date",
  },
  ClientStatus: {
    Selector: constants.Client_Status,
    inputType: "Dropdown",
  },
  IsSharedWithCompany:{
    Selector: constants.Client_IsSharedWithCompany,
    inputType: "Checkbox",
  },
  //Adviser is ownerguid, not done yet
 
},

ClientAccordians = {
  PersonalDetails: {
    AccordianName: 'Personal Details', 
    AccordianSelector:"#PersonalDetails",   
    AccordianContentMappings:ClientInputs
  },
  FamilyDetails: {
    AccordianName: 'Family Details', 
    AccordianSelector:"#FamilyDetails",   
    AccordianContentMappings:FamilyDetails
  },
  HealthDetails: {
    AccordianName: 'Health Details', 
    AccordianSelector:"#HealthDetails",   
    AccordianContentMappings:ClientHealth
  },
  TaxandLifetimeAllowance: {
    AccordianName: 'Tax and Lifetime Allowance', 
    AccordianSelector:"#TaxAndLifetimeAllowance",   
    AccordianContentMappings:Tax
  },
  ContactDetails: {
    AccordianName: 'Contact Details', 
    AccordianSelector:"#ContactDetails",   
    AccordianContentMappings:ClientContact
  },
  ServiceBasis: {
    AccordianName: 'Service Basis', 
    AccordianSelector:"#ServiceBasis",   
    AccordianContentMappings:ServiceBasis
  }
}