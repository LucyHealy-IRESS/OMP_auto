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

ClientContact = {
  Address1: {
    Selector: constants.clAddress1,
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
},

ClientHealth = {
  Postcode: {
    Selector: constants.clPostcode,
    inputType: "String",
  }
}