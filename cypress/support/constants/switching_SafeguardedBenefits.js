import * as InputTypes from "./Core.js";
export const

SBS_Editor = "#EditSafeguardedBenefitSegmentPopup",

BasicDetails = {
  IncomeType: {
    Selector: ".BasicDetails_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianName: "Basic Details",
    AccordianSelector: ".SafeGuardedEditor_BasicDetails",
  },
  Name: {
    Selector: ".Name_tooltip input",
    inputType: InputTypes.Input_String,
    AccordianName: "Basic Details",
    AccordianSelector: ".SafeGuardedEditor_BasicDetails",
  },
  NRA: {
    Selector: ".NRA_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Basic Details",
    AccordianSelector: ".SafeGuardedEditor_BasicDetails",
  },
},

IncomeDetails = {
  Amount: {
    Selector: ".IncomeAmount_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianName: "Income Details",
    AccordianSelector: ".SafeGuardedEditor_IncomeDetails",
  },
  AsAtDate: {
    Selector: ".IncomeAsAt_tooltip input",
    ddSelector:".IncomeAsAt.day",
    mmSelector:".IncomeAsAt.month",
    yyyySelector:".IncomeAsAt.year",
    inputType: InputTypes.Input_Date ,
    AccordianName: "Income Details",
    AccordianSelector: ".SafeGuardedEditor_IncomeDetails",
  },
  ERA_Factor: {
    Selector: ".ERAFactor_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Income Details",
    AccordianSelector: ".SafeGuardedEditor_IncomeDetails",
  },
  ALR_Factor: {
    Selector: ".ALRFactor_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Income Details",
    AccordianSelector: ".SafeGuardedEditor_IncomeDetails",
  },
  SegmenSpecificCommutation: {
    Selector: ".SegmentSpecificCommutationChkbox",
    inputType: InputTypes.Input_Checkbox,
    AccordianName: "Income Details",
    AccordianSelector: ".SafeGuardedEditor_IncomeDetails",
  },
  SegmentCommutationFactor: {
    Selector: ".SegmentCommutationFactor_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Income Details",
    AccordianSelector: ".SafeGuardedEditor_IncomeDetails",
  },
  IncomeStops: {
    Selector: ".IncomeStops_tooltip input",
    inputType: InputTypes.Input_Dropdownr,
    AccordianName: "Income Details",
    AccordianSelector: ".SafeGuardedEditor_IncomeDetails",
  },
  StopOtherAge: {
    Selector: ".OtherAge_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Income Details",
    AccordianSelector: ".SafeGuardedEditor_IncomeDetails",
  },
},

RevaluationandEscalation = {
  RevaluationRate: {
    Selector: ".RevaluationRaye_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianName: "Revaluation and Escalation",
    AccordianSelector: ".SafeGuardedEditor_RandE",
  },
  CustomRevaluationRate: {
    Selector: ".CustomRevaluationRate_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Revaluation and Escalation",
    AccordianSelector: ".SafeGuardedEditor_RandE",
  },
  MinRevaluationRate: {
    Selector: ".MinRevaluationRate_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Revaluation and Escalation",
    AccordianSelector: ".SafeGuardedEditor_RandE",
  },
  MaxRevaluationRate: {
    Selector: ".MaxRevaluationRate_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Revaluation and Escalation",
    AccordianSelector: ".SafeGuardedEditor_RandE",
  },
  RevaluationBasis: {
    Selector: ".RevaluationBasis_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianName: "Revaluation and Escalation",
    AccordianSelector: ".SafeGuardedEditor_RandE",
  },
  EscalationRate: {
    Selector: ".EscalationRate_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianName: "Revaluation and Escalation",
    AccordianSelector: ".SafeGuardedEditor_RandE",
  },
  CustomEscalationRate: {
    Selector: ".CustomEscalationRate_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Revaluation and Escalation",
    AccordianSelector: ".SafeGuardedEditor_RandE",
  },
  MinEscalationRate: {
    Selector: ".MinEscalationRate_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Revaluation and Escalation",
    AccordianSelector: ".SafeGuardedEditor_RandE",
  },
  MaxEscalationRate: {
    Selector: ".MaxEscalationRate_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Revaluation and Escalation",
    AccordianSelector: ".SafeGuardedEditor_RandE",
  },
},

AllSafeguardedBenefitsSegmentsInputs = {
  ...BasicDetails,
  ...IncomeDetails,
  ...RevaluationandEscalation
} 