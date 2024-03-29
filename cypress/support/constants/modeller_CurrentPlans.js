import * as constants from "./constantsSelectors.js";
import * as InputTypes from "./Core.js";
export const CurrentPlanListSelector = "#RetirementOptionCurrentPlansListPopUp",

ScenarioEditorSelector = ".quick-editor-body",
CurrentPlanEditorSelector = "#EditRetirementOptionCurrentPlanPopup",
BasicDetails = {
  ProductID: {
    Selector: ".Product_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianName: "Basic Details",
    AccordianSelector: "#BasicDetails",
  },
  Provider: {
    Selector: ".Provider",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianName: "Basic Details",
    AccordianSelector: "#BasicDetails",
  },
  CurrentPlanName: {
    Selector: ".ProductName_tooltip input",
    inputType: InputTypes.Input_String ,
    AccordianName: "Basic Details",
    AccordianSelector: "#BasicDetails",
  },
  
  Isworkplacepension: {
    Selector: "IsWorkplacePension",
    inputType: InputTypes.Input_Checkbox,
    AccordianName: "Basic Details",
    AccordianSelector: "#BasicDetails",
  },
},

CurrentValue = {
   AsAtDate: {
     Selector: ".PolicyValuesAsAtDate_tooltip input",
     ddSelector: "#wijmo_input_16",
     mmSelector: "#wijmo_input_17",
     yyyySelector: "#wijmo_input_18",
     inputType: InputTypes.Input_Date,
     AccordianName: "Current Value",
     AccordianSelector: "#CurrentValue",
  },
  CurrentValue: {
    Selector: ".PolicyValuesCurrentValue_tooltip input",
    inputType: InputTypes.Input_Integer ,
    AccordianName: "Current Value",
    AccordianSelector: "#CurrentValue",
  },
  TransferValue: {
    Selector: ".PolicyValuesTransferValue_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Current Value",
    AccordianSelector: "#CurrentValue",
  },
},
SuppliedMaturityValues = {
  SMV_ValueatRetirementAge: {
    Selector: ".ProjectedMaturityBasis_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianName: "Supplied Maturity Values",
    AccordianSelector: "#SuppliedMaturityValues",
  },
  SMV_Value: {
    Selector: ".ValueatRetirementAge_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianName: "Supplied Maturity Values",
    AccordianSelector: "#SuppliedMaturityValues",
  },
},
GrowthRates = {
  GrowthRateBasis: {
    Selector: ".GrowthRatesBasis_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianSelector: "#GrowthRates",
    AccordianName: "Growth Rates",
  },
  GrowthRateLow_Nominal: {
    Selector: ".GrowthRatesLow_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#GrowthRates",
    AccordianName: "Growth Rates",
    XMLOverride: "GrowthRateLow",
  },
  GrowthRateMid_Nominal: {
    Selector: ".GrowthRatesMid_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#GrowthRates",
    AccordianName: "Growth Rates",
    XMLOverride: "GrowthRateMid",
  },
  GrowthRateHigh_Nominal: {
    Selector: ".GrowthRatesHigh_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#GrowthRates",
    AccordianName: "Growth Rates",
    XMLOverride: "GrowthRateHigh",
  },
  GrowthRateLow_InflationAdjusted: {
    Selector: ".GrowthRateLowInflationAdjusted_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#GrowthRates",
    AccordianName: "Growth Rates",
    XMLOverride: "GrowthRateLow",
  },
  GrowthRateMid_InflationAdjusted: {
    Selector: ".GrowthRateMidInflationAdjusted_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#GrowthRates",
    AccordianName: "Growth Rates",
    XMLOverride: "GrowthRateMid",
  },
  GrowthRateHigh_InflationAdjusted: {
    Selector: ".GrowthRateHighInflationAdjusted_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#GrowthRates",
    AccordianName: "Growth Rates",
    XMLOverride: "GrowthRateHigh",
  },
},
//Some properties in here are the same as in other accordians
ProductChages = {
  PC_FundCharge: {
    Selector: ".FundCharge_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#ProductCharges",
    AccordianName: "Product Charges",
  },
  PC_PlanCharge: {
    Selector: ".PlanCharge_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#ProductCharges",
    AccordianName: "Product Charges",
  },
  PC_PolicyFee: {
    Selector: ".PolicyFee_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#ProductCharges",
    AccordianName: "Product Charges",
  },
  PC_AdviserCharge: {
    Selector: ".AdviserCharge_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#ProductCharges",
    AccordianName: "Product Charges",
  },
},

OngoingContributions = {
  GrossPremium: {
    Selector: ".OngoingContsPremium_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#OngoingConts",
    AccordianName: "Ongoing Contributions",
  },
  GP_Frequency: {
    Selector: ".OngoingContsAccordian .OngoingContsType_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianSelector: "#OngoingConts",
    AccordianName: "Ongoing Contributions",
  },
  GP_Escalation: {
    Selector: ".OngoingContsAccordian .OngoingContsEscalationRate_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianSelector: "#OngoingConts",
    AccordianName: "Ongoing Contributions",
  },
  GP_EscalationOther: {
    Selector: ".OngoingContsAccordian .OngoingContsEscalationRateOther_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#OngoingConts",
    AccordianName: "Ongoing Contributions",
  },
  GP_IncreasingEvery: {
    Selector: ".OngoingContsAccordian .OngoingContsIncreasingEvery_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianSelector: "#OngoingConts",
    AccordianName: "Ongoing Contributions",
  },
  ClientExpenses: {
    Selector: ".ClientExpenses_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianSelector: "#OngoingConts",
    AccordianName: "Ongoing Contributions",
  },
},

DefinedIncome = {
  DI_SafeguardedBenefits: {
    Selector: ".SafeguardedBenefits_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_SchemeNormalRetirementAge: {
    Selector: ".SchemeNRA_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_SchemeNormalRetirementAge: {
    Selector: ".SchemeNRA_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_BenefitsStartingAge: {
    Selector: ".BenefitsStartingAge_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_DateLeftScheme: {
    Selector: ".DateLeftScheme_tooltip",
    ddSelector:".DateLeftScheme.day",
    mmSelector:".DateLeftScheme.month",
    yyyySelector:".DateLeftScheme.year",
    inputType: InputTypes.Input_Date,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_GrossAnnualIncome: {
    Selector: ".AnnualIncome_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_IncomeEscalation: {
    Selector: ".IncomeEscalationRate_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_IncomeEscalationOther: {
    Selector: ".IncomeEscalationRateOther_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_IncomeEscalationStarting: {
    Selector: ".Starting_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianSelector: ".DefinedIncomeAccordian",
    AccordianName: "Defined Income",
  },
  DI_IncomeEscalationStartingAge: {
    Selector: ".StartingAge_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_IncomeEscalationEnding: {
    Selector: ".Ending_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_IncomeEscalationEndingAge: {
    Selector: ".EndingAge_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_PCLSAtStart: {
    Selector: ".TaxFreeCashAtStart_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
  DI_PCLSPaid: {
    Selector: ".PCLSPaid_tooltip input",
    inputType: InputTypes.Input_Dropdown_ReadOnly,
    AccordianSelector: "#DefinedIncome",
    AccordianName: "Defined Income",
  },
},
SchemeTransferDetails = {
  TD_TransferValue: {
    Selector: ".TransferValue_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_ValueAsAt: {
    Selector: ".TransferValueAsAt_tooltip input",
    ddSelector:".TransferValueAsAt.day",
    mmSelector:".TransferValueAsAt.month",
    yyyySelector:".TransferValueAsAt.year",
    inputType: InputTypes.Input_Date,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_RefinePCLSCommutationDetails: {
    Selector: ".RefinePCLSCommDetails",
    inputType: InputTypes.Input_Checkbox,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_PCLSbyCommutationNotAvailable: {
    Selector: ".PCLSCommNotAvailable",
    inputType: InputTypes.Input_Checkbox,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_CommutationFactor: {
    Selector: ".CommutationFactor_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_PCLSToTake: {
    Selector: ".PCLSToTake_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_AmountInTodaysTerms: {
    Selector: ".PCLSToTakeAmount_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_IncludeAdditionalVoluntaryContributions: {
    Selector: ".IncludeAdditionalVolConts",
    inputType: InputTypes.Input_Checkbox,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_AVCValue: {
    Selector: ".AVCV_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_AVCValueAsAt: {
    Selector: ".AVCValueAsAt_tooltip input",
    ddSelector:".AVCValueAsAt.day",
    mmSelector:".AVCValueAsAt.month",
    yyyySelector:".AVCValueAsAt.year",
    inputType: InputTypes.Input_Date,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_RefineDependantsDetails: {
    Selector: ".RefineDependantsDetails",
    inputType: InputTypes.Input_Checkbox,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_DependantsGender: {
    Selector: ".DependantsGender_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_DependantsDOB: {
    Selector: ".DependantsDOB_tooltip input",
    ddSelector:".DependantsDOB.day",
    mmSelector:".DependantsDOB.month",
    yyyySelector:".DependantsDOB.year",
    inputType: InputTypes.Input_Date,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_PreRetirement: {
    Selector: ".DependantsPensionPreNRA_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_PostRetirement: {
    Selector: ".DependantsPensionPostNRA_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_BasedOn: {
    Selector: ".SpousesPensionBasedOn_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_RefundOfContributionsForDeath: {
    Selector: ".RefundOfContributionsForDeathBenefits",
    inputType: InputTypes.Input_Checkbox,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_TotalMemberContributionstoScheme: {
    Selector: ".TotalMemberContributionsToScheme_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
  TD_RefundofContributionsInterestRate: {
    Selector: ".RefundOfContributionsInterestRate_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#SchemeTransferDetails",
    AccordianName: "Scheme & Transfer Details",
  },
},
AssumptionsUsed = { 
  AU_GrowthRateToUse: {
    Selector: ".GrowthRateType_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianSelector: "#AssumptionsUsed",
    AccordianName: "Assumptions Used",
  },
  AU_Rate: {
    Selector: ".GrowthRateToUse_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianSelector: "#AssumptionsUsed",
    AccordianName: "Assumptions Used",
  },
  AU_Nominal: {
    Selector: ".Nominal_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#AssumptionsUsed",
    AccordianName: "Assumptions Used",
  },
  AU_InflationAdjusted: {
    Selector: ".InflationAdjusted_tooltip input",
    inputType: InputTypes.Input_Integer,
    AccordianSelector: "#AssumptionsUsed",
    AccordianName: "Assumptions Used",
  },
  AU_DateCeased: {
    Selector: ".DateCeasedContractingOut_tooltip input",
    ddSelector:".DateCeasedContractingOut.day",
    mmSelector:".DateCeasedContractingOut.month",
    yyyySelector:".DateCeasedContractingOut.year",
    inputType: InputTypes.Input_Date,
    AccordianSelector: "#AssumptionsUsed",
    AccordianName: "Assumptions Used",
  },
  AU_IndexMonth: {
    Selector: ".IndexMonthForRevaluation_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianSelector: "#AssumptionsUsed",
    AccordianName: "Assumptions Used",
  },
  AU_ERFApplied: {
    Selector: ".ERFAppliedToBenefitsRevaluedTo_tooltip input",
    inputType: InputTypes.Input_Dropdown,
    AccordianSelector: "#AssumptionsUsed",
    AccordianName: "Assumptions Used",
  },
},

RetirementIncome = {
   RI_RetirementIncome: {
       Selector: constants.Portfolio_RIRetirementIncome,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PensionIncomeType: {
       Selector: constants.Portfolio_RIPensionIncomeType,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_Product: {
       Selector: constants.Portfolio_RINewProductToUse,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_AnnualIncome: {
       Selector: constants.Portfolio_RIAnnualIncome,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_AnnualAmountInTodaysTerms: {
       Selector: constants.Portfolio_RIAnnualIncomeInTodaysTerms,
       inputType: InputTypes.Input_Integer,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_AnnualPercentage: {
       Selector: constants.Portfolio_RIAnnualPercentage,
       inputType: InputTypes.Input_Integer,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_IncomeEscalation: {
       Selector: constants.Portfolio_RIIncomeEscalation,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_IncomeEscalationOther: {
       Selector: constants.Portfolio_RIOtherEscalation,
       inputType: InputTypes.Input_Integer,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PCLSStarting: {
       Selector: constants.Portfolio_RIStarting,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PCLSAge: {
       Selector: constants.Portfolio_RIStartingAge,
       inputType: InputTypes.Input_Integer,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_AvailableFrom: {
       Selector: constants.Portfolio_RIAvailableFrom,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_AvailableFromAge: {
       Selector: constants.Portfolio_RIAvailableFromAge,
       inputType: InputTypes.Input_Integer,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PCLSAvailable: {
       Selector: constants.Portfolio_RIPCLSAvailable,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PCLSAvailableOther: {
       Selector: constants.Portfolio_RIOtherPercentage,
       inputType: InputTypes.Input_Integer,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PCLSTaken: {
       Selector: constants.Portfolio_RIPCLSTaken,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PCLSAmountInTodaysTerms: {
       Selector: constants.Portfolio_RIAnnualAmountTodaysTerms,
       inputType: InputTypes.Input_Integer,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PCLSStarting: {
       Selector: constants.Portfolio_RIPCLSStarting,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PCLSAge: {
       Selector: constants.Portfolio_RIPCLSStartingAge,
       inputType: InputTypes.Input_Integer,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PCLSWithdrawalEscalation: {
       Selector: constants.Portfolio_RIWithdrawalEscalation,
       inputType: InputTypes.Input_Dropdown,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   RI_PCLSOtherEscalation: {
       Selector: constants.Portfolio_RIWithdrawalOtherEscalation,
       inputType: InputTypes.Input_Integer,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   ExcludeFromLifetimeAllowanceCalculations: {
       Selector: constants.Portfolio_RIExcludeFromLTCalcs,
       inputType: InputTypes.Input_Checkbox,
       AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
       AccordianName: "Retirement Income",
     },
   },




AllCurrentPlanInputs = {
  ...BasicDetails,
  ...CurrentValue,
  ...SuppliedMaturityValues,
  ...GrowthRates,
  ...ProductChages,
  ...OngoingContributions,
  ...DefinedIncome,
  ...SchemeTransferDetails,
  ...AssumptionsUsed
};
