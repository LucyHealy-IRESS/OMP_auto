import * as constants from "./constantsSelectors.js";
export const

//ToDo
//Import,Intelligent Office ID,Xplan ID,Transact Key,Drawdown Type,Account Number
Portfolio_BasicDetails_Advanced = {
    ProductID: {
        Selector: ".ProductDrpDwn",
        inputType: "ProductDropdown",
        AccordianSelector:".PA_Details_Accordian",
        AccordianName: 'Details', 
      }, 
    ProviderID: {
        Selector: ".ProviderDrpDwn",
        inputType: "ProviderDropdown",
        AccordianSelector:".PA_Details_Accordian",
        AccordianName: 'Details', 
      }, 
    Reference: {
        Selector: "#PA_Reference",
        inputType: "String",
        AccordianSelector:".PA_Details_Accordian",
        AccordianName: 'Details', 
      }, 
    BenchMark: {
        Selector: ".Benchmark",
        inputType: "Dropdown",
        AccordianSelector:".PA_Details_Accordian",
        AccordianName: 'Details', 
      }, 
    Status: {
        Selector: ".PortfolioStatus",
        inputType: "Dropdown",
        AccordianSelector:".PA_Details_Accordian",
        AccordianName: 'Details', 
      }, 
    NextReviewDate: {
        Selector: "DateOfBirth_TextControl_tooltip",
        inputType: "Date",
        ddSelector: ".Portfolio.day",
        mmSelector: ".Portfolio.month",
        yyyySelector: ".Portfolio.year",
        AccordianSelector:".PA_Details_Accordian",
        AccordianName: 'Details', 
    },
    IsWorkplacePension: {
        Selector: ".IsWorkplacePension",
        inputType: "Checkbox",
        AccordianSelector:".PA_Details_Accordian",
        AccordianName: 'Details', 
      }, 
    IsSharedWithCompany: {
        Selector: ".IsSharedWithCompany",
        inputType: "Checkbox",
        AccordianSelector:".PA_Details_Accordian",
        AccordianName: 'Details', 
      }, 
},

Portfolio_Purpose_Advanced = {
    RiskObj: {
        Selector: ".InvestmentOptions",
        inputType: "DropdownIndex",
        AccordianSelector:".PA_Purpose_Accordian",
        AccordianName: 'Purpose', 
      },
    RiskTargetAmount:{
        Selector: ".purpose_targetamount",
        inputType: "Integer",
        AccordianSelector:".PA_Purpose_Accordian",
        AccordianName: 'Purpose', 
    },
    InceptionDate:{
        Selector: "InceptionDate",
        inputType: "Date",
        ddSelector: ".Inception.day",
        mmSelector: ".Inception.month",
        yyyySelector: ".Inception.year",
        AccordianSelector:".PA_Purpose_Accordian",
        AccordianName: 'Purpose', 
    },
    RiskTermYear:{
        Selector: ".purpose_OriginalTerm",
        inputType: "Integer",
        AccordianSelector:".PA_Purpose_Accordian",
        AccordianName: 'Purpose', 
    },
    MaturityAge: {
        Selector: ".purpose_MaturityAge",
        inputType: "Integer",
        AccordianSelector:".PA_Purpose_Accordian",
        AccordianName: 'Purpose', 
    }
    

},

//Todo: Not Morningstar inputs
Portfolio_RiskProfile_Advanced = {
    Risk: {
        Selector: ".TargetRiskProfile",
        inputType: "DropdownIndex",
        AccordianSelector:".PA_RiskProfile_Accordian",
        AccordianName: 'Risk Profile', 
      },
    RiskEstBy: {
        Selector: ".EstablishedBy",
        inputType: "DropdownIndex",
        AccordianSelector:".PA_RiskProfile_Accordian",
        AccordianName: 'Risk Profile', 
    }
},

AllPortfolioAdvancedInputs = {
...Portfolio_BasicDetails_Advanced,
...Portfolio_Purpose_Advanced,
...Portfolio_RiskProfile_Advanced
}

