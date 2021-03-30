import * as constants from "./constantsSelectors.js";
export const

//ToDo
//Import,Intelligent Office ID,Xplan ID,Transact Key,Drawdown Type,Account Number
Portfolio_BasicDetails_Advanced = {
    ProductID: {
        Selector: ".ProductDrpDwn",
        inputType: "ProductDropdown",
        AccordianSelector: constants.PortfolioAdv_ACBasicDetails,
        AccordianName: 'Details', 
      }, 
    ProviderID: {
        Selector: ".ProviderDrpDwn",
        inputType: "ProviderDropdown",
        AccordianSelector: constants.PortfolioAdv_ACBasicDetails,
        AccordianName: 'Details', 
      }, 
    Reference: {
        Selector: "#PA_Reference",
        inputType: "String",
        AccordianSelector: constants.PortfolioAdv_ACBasicDetails,
        AccordianName: 'Details', 
      }, 
    BenchMark: {
        Selector: ".Benchmark",
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACBasicDetails,
        AccordianName: 'Details', 
      }, 
    Status: {
        Selector: ".PortfolioStatus",
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACBasicDetails,
        AccordianName: 'Details', 
      }, 
    NextReviewDate: {
        Selector: "DateOfBirth_TextControl_tooltip",
        inputType: "Date",
        ddSelector: ".Portfolio.day",
        mmSelector: ".Portfolio.month",
        yyyySelector: ".Portfolio.year",
        AccordianSelector: constants.PortfolioAdv_ACBasicDetails,
        AccordianName: 'Details', 
    },
    IsWorkplacePension: {
        Selector: ".IsWorkplacePension",
        inputType: "Checkbox",
        AccordianSelector: constants.PortfolioAdv_ACBasicDetails,
        AccordianName: 'Details', 
      }, 
    IsSharedWithCompany: {
        Selector: ".IsSharedWithCompany",
        inputType: "Checkbox",
        AccordianSelector: constants.PortfolioAdv_ACBasicDetails,
        AccordianName: 'Details', 
      }, 
},

Portfolio_OngoingContribution_Advanced = {
    OngoingContsPremium: {
        Selector: constants.Portfolio_GrossPremium,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACOngoingContributions,
        AccordianName: 'Ongoing Contributions', 
      },
    OngoingContsType: {
        Selector: constants.Portfolio_Frequency,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACOngoingContributions,
        AccordianName: 'Ongoing Contributions', 
      },
    OngoingContsEscalationRate: {
        Selector: constants.Portfolio_Escalation,
        inputType: "Dropdown_ReadOnly",
        AccordianSelector: constants.PortfolioAdv_ACOngoingContributions,
        AccordianName: 'Ongoing Contributions', 
      },
    OngoingContsEscalationRateOther: {
        Selector: constants.Portfolio_EscalationOther,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACOngoingContributions,
        AccordianName: 'Ongoing Contributions', 
      },
    OngoingContsIncreasingEvery: {
        Selector: constants.Portfolio_IncreasingEvery,
        inputType: "Dropdown_ReadOnly",
        AccordianSelector: constants.PortfolioAdv_ACOngoingContributions,
        AccordianName: 'Ongoing Contributions', 
      },
    ContributionsStop: {
        Selector: constants.Portfolio_ContributionStop,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACOngoingContributions,
        AccordianName: 'Ongoing Contributions', 
      },
    StopAge: {
        Selector: constants.Portfolio_StopAge,
        inputType: "String",
        AccordianSelector: constants.PortfolioAdv_ACOngoingContributions,
        AccordianName: 'Ongoing Contributions', 
      }, 
    ClientExpenses: {
        Selector: constants.Portfolio_ClientExpenses,
        inputType: "DropdownIndex",
        AccordianSelector: constants.PortfolioAdv_ACOngoingContributions,
        AccordianName: 'Ongoing Contributions', 
      }, 
  },


Portfolio_Purpose_Advanced = {
    RiskObj: {
        Selector: ".InvestmentOptions",
        inputType: "DropdownIndex",
        AccordianSelector: constants.PortfolioAdv_ACPurpose,
        AccordianName: 'Purpose', 
      },
    RiskTargetAmount:{
        Selector: ".purpose_targetamount",
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACPurpose,
        AccordianName: 'Purpose', 
    },
    InceptionDate:{
        Selector: "InceptionDate",
        inputType: "Date",
        ddSelector: ".Inception.day",
        mmSelector: ".Inception.month",
        yyyySelector: ".Inception.year",
        AccordianSelector: constants.PortfolioAdv_ACPurpose,
        AccordianName: 'Purpose', 
    },
    RiskTermYear:{
        Selector: ".purpose_OriginalTerm",
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACPurpose,
        AccordianName: 'Purpose', 
    },
    MaturityAge: {
        Selector: ".purpose_MaturityAge",
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACPurpose,
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

Portfolio_ProductCharges_Advanced = {
  FundCharge: {
      Selector: constants.Portfolio_FundCharges,
      inputType: "Value",
      AccordianSelector: constants.PortfolioAdv_ACProductCharges,
      AccordianName: 'Product Charges', 
    },
  PlanCharge: {
      Selector: constants.Portfolio_PlanCharges,
      inputType: "Value",
      AccordianSelector: constants.PortfolioAdv_ACProductCharges,
      AccordianName: 'Product Charges', 
    },
  PolicyFee: {
      Selector: constants.Portfolio_PolicyFee,
      inputType: "Value",
      AccordianSelector: constants.PortfolioAdv_ACProductCharges,
      AccordianName: 'Product Charges', 
    },
  AdviserCharge: {
      Selector: constants.Portfolio_AdviserCharge,
      inputType: "Value",
      AccordianSelector: constants.PortfolioAdv_ACProductCharges,
      AccordianName: 'Product Charges', 
    },
},


Portfolio_GrowthRates_Advanced = {
  GrowthRateBasis: {
      Selector: constants.Portfolio_GrowthRates,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
    },
  GrowthRateLow: {
      Selector: constants.Portfolio_ISLow,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
    },
  GrowthRateMid: {
      Selector: constants.Portfolio_ISMid,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
    },
  GrowthRateHigh: {
      Selector: constants.Portfolio_ISHigh,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
    },
  GrowthRateLow: {
      Selector: constants.Portfolio_IALow,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
    },
  GrowthRateMid: {
      Selector: constants.Portfolio_IAMid,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
    },
  GrowthRateHigh: {
      Selector: constants.Portfolio_IAHigh,
      inputType: "Integer",
            AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
    },
},


AllPortfolioAdvancedInputs = {
...Portfolio_BasicDetails_Advanced,
...Portfolio_OngoingContribution_Advanced,
...Portfolio_Purpose_Advanced,
...Portfolio_RiskProfile_Advanced,
...Portfolio_ProductCharges_Advanced,
...Portfolio_GrowthRates_Advanced
}

