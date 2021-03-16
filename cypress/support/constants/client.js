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
    Selector: "#ClientDetailsPopup_MaritalStatus",
    inputType: "Dropdown",
  },
  DependantChildren: {
    Selector: "#ClientDetailsPopup_DependantChildren",
    inputType: "String",
  },
  IndependantChildren: {
    Selector: "#ClientDetailsPopup_IndependantChildren",
    inputType: "String",
  },
  Siblings: {
    Selector: "#ClientDetailsPopup_Siblings",
    inputType: "String",
  }
},


ClientContact = {
  Address1: {
    Selector: constants.clAddress1,
    inputType: "String",
  },
  Address2: {
    Selector: "#ClientDetailsPopup_Address2",
    inputType: "String",
  },
  Address3: {
    Selector: "#ClientDetailsPopup_Address3",
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
    Selector: "#ClientDetailsPopup_Email",
    inputType: "String",
  },
  WorkNumber: {
    Selector: "#ClientDetailsPopup_WorkPhone",
    inputType: "String",
  },
  HomeNumber: {
    Selector: "#ClientDetailsPopup_HomePhone",
    inputType: "String",
  },
  MobileNumber: {
    Selector: "#ClientDetailsPopup_MobilePhone",
    inputType: "String",
  },
},

ClientHealth = {
  HealthStatus: {
    Selector: "#ClientDetailsPopup_HealthIssues",
    inputType: "Dropdown",
  },
  SmokerStatus: {
    Selector: "#ClientDetailsPopup_Smoker",
    inputType: "Dropdown",
  },
  Postcode: {
    Selector: constants.clPostcode,
    inputType: "String",
  }
},

Tax = {
  TaxRegion: {
    Selector: "#ClientDetailsPopup_TaxRegion",
    inputType: "String",
  },
  LifetimeAllowanceType: {
    Selector: "#ClientDetailsPopup_LifetimeAllowanceType",
    inputType: "Dropdown",
  },
  ProtectedAmount: {
    Selector: "#ClientDetailsPopup_ProtectedAmount",
    inputType: "Integer",
  },
  LifetimeAllowancePreviouslyUsed: {
    Selector: "#ClientDetailsPopup_PreviouslyUsed",
    inputType: "Integer",
  }
}