import * as constants from "./constantsSelectors.js";
export const 

  ClientPortfoliosSelector = "#Client_ViewPortfolios",
  ClientIncomesSelector = '#Client_ViewIncomes',
  PortfoliosQuickEditorSelector = "#PortfolioAddPopUp",
  PortfolioQuickAddFundSelector = "PortfolioSimpleEditor_QuickAddFundPopup",
  PortfolioSegmentEditorSelector = '#EditSafeguardedBenefitSegmentPopup',
  Portfolio_Holdings_Editor = {
    Units: {
      Selector: ".editRowPopup .RowEditUnits",
      inputType: "Integer",
    },
  },
  Portfolio_BasicDetails_Simple = {
    Import: {
      Selector: ".PotfolioBasic_Import",
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACBasicDetails,
      AccordianName: "Basic Details",
    },
    XplanID: {
      Selector: ".PotfolioBasic_XplanID",
      inputType: "String",
      AccordianSelector: constants.PortfolioSmp_ACBasicDetails,
      AccordianName: "Basic Details",
    },
    TransactKey: {
      Selector: constants.PortfolioSmp_BDTransactKey,
      inputType: "String",
      AccordianSelector: constants.PortfolioSmp_ACBasicDetails,
      AccordianName: "Basic Details",
    },
    ExternalKey: {
      Selector: constants.PortfolioSmp_BDFNAccountNumber,
      inputType: "String",
      AccordianSelector: constants.PortfolioSmp_ACBasicDetails,
      AccordianName: "Basic Details",
    },
    ProductID: {
      Selector: constants.PortfolioSmp_BDProduct,
      inputType: "ProductDropdown",
      AccordianSelector: constants.PortfolioSmp_ACBasicDetails,
      AccordianName: "Basic Details",
    },
    ProviderID: {
      Selector: constants.PortfolioSmp_BDProvider,
      inputType: "ProviderDropdown",
      AccordianSelector: constants.PortfolioSmp_ACBasicDetails,
      AccordianName: "Basic Details",
    },
    Reference: {
      Selector: constants.PortfolioSmp_BDReference,
      inputType: "String",
      AccordianSelector: constants.PortfolioSmp_ACBasicDetails,
      AccordianName: "Basic Details",
    },
    IsWorkplacePension: {
      Selector: constants.PortfolioSmp_BDWorkplacePension,
      inputType: "Checkbox",
      AccordianSelector: constants.PortfolioSmp_ACBasicDetails,
      AccordianName: "Basic Details",
    },
    SharePortfolio: {
      Selector: "PotfolioBasic_ShareThisPortfolio",
      inputType: "Checkbox",
      AccordianSelector: constants.PortfolioSmp_ACBasicDetails,
      AccordianName: "Basic Details",
    },
  },
  //Wrap Current Values
  Portfolio_BasicDetails_CurrentValue = {
    CurrentValue: {
      Selector: constants.PortfolioSmp_CVCurrentValue,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACCurrentValue,
      AccordianName: "Current Value",
    },
  },
  //Missing Wrap Inputs
  Portfolio_BasicDetails_OngoingContributions = {
    OngoingContsPremium: {
      Selector: constants.PortfolioSmp_OCGrossPremium,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACOngoingContributions,
      AccordianName: "Ongoing Contributions",
    },
    OngoingContsType: {
      Selector: constants.PortfolioSmp_OCFrequency,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACOngoingContributions,
      AccordianName: "Ongoing Contributions",
    },
    OngoingContsEscalationRate: {
      Selector: constants.PortfolioSmp_OCEscalation,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACOngoingContributions,
      AccordianName: "Ongoing Contributions",
    },
    OngoingContsEscalationRateOther: {
      Selector: constants.PortfolioSmp_OCEscalationOther,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACOngoingContributions,
      AccordianName: "Ongoing Contributions",
    },
    OngoingContsIncreasingEvery: {
      Selector: constants.PortfolioSmp_OCIncreasingEvery,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACOngoingContributions,
      AccordianName: "Ongoing Contributions",
    },
    ContributionsStop: {
      Selector: constants.PortfolioSmp_OCContributionStop,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACOngoingContributions,
      AccordianName: "Ongoing Contributions",
    },
    StopAge: {
      Selector: constants.PortfolioSmp_OCStopAge,
      inputType: "String",
      AccordianSelector: constants.PortfolioSmp_ACOngoingContributions,
      AccordianName: "Ongoing Contributions",
    },
    ClientExpenses: {
      Selector: constants.PortfolioSmp_OCClientExpenses,
      inputType: "DropdownIndex",
      AccordianSelector: constants.PortfolioSmp_ACOngoingContributions,
      AccordianName: "Ongoing Contributions",
    },
  },
  Portfolio_BasicDetails_ProductCharges = {
    ProductChargeFundCharge: {
      Selector: ".PotfolioBasic_PC_FundCharge",
      inputType: "Integer",
      AccordianSelector: "#PortfolioSimpleEditor_ProductCharges",
      AccordianName: "Product Charges",
    },
    ProductChargePlanCharge: {
      Selector: ".PotfolioBasic_PC_PlanCharge",
      inputType: "Integer",
      AccordianSelector: "#PortfolioSimpleEditor_ProductCharges",
      AccordianName: "Product Charges",
    },
    ProductChargePolicyFee: {
      Selector: ".PolicyFeeInput",
      inputType: "Integer",
      AccordianSelector: "#PortfolioSimpleEditor_ProductCharges",
      AccordianName: "Product Charges",
    },
    ProductChargeAdviserCharge: {
      Selector: ".PotfolioBasic_PC_AdviserCharge",
      inputType: "Integer",
      AccordianSelector: "#PortfolioSimpleEditor_ProductCharges",
      AccordianName: "Product Charges",
    },
  },
  Portfolio_BasicDetails_Holdings = {
    FundName: {
      Selector: constants.PortfolioSmp_HDName,
      inputType: "String",
      AccordianSelector: constants.PortfolioSmp_ACHoldings,
      AccordianName: "Holdings",
    },
    Investment: {
      Selector: constants.PortfolioSmp_HDAssetType,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACHoldings,
      AccordianName: "Holdings",
    },
    Units: {
      Selector: constants.PortfolioSmp_HDUnits,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACHoldings,
      AccordianName: "Holdings",
    },
    CurrentPrice: {
      Selector: constants.PortfolioSmp_HDCurrentPrice,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACHoldings,
      AccordianName: "Holdings",
    },
    InvestmentStatus: {
      Selector: constants.PortfolioSmp_HDStatus,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACHoldings,
      AccordianName: "Holdings",
    },
    UseCustomFundPrice: {
      Selector: constants.PortfolioSmp_HDEnableCustomFund,
      inputType: "Checkbox",
      AccordianSelector: constants.PortfolioSmp_ACHoldings,
      AccordianName: "Holdings",
    },
    CustomFundPrice: {
      Selector: constants.PortfolioSmp_HDCustomFundPrice,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACHoldings,
      AccordianName: "Holdings",
    },
    InvestmentType: {
      Selector: constants.PortfolioSmp_HD,
      inputType: "",
      AccordianSelector: constants.PortfolioSmp_ACHoldings,
      AccordianName: "Holdings",
    },
    FundName: {
      Selector: constants.PortfolioSmp_HDFundName,
      inputType: "FundPicker",
      AccordianSelector: constants.PortfolioSmp_ACHoldings,
      AccordianName: "Holdings",
    },
    FundPicker: {
      Selector: constants.PortfolioSmp_HDPicker,
      inputType: "FundPicker",
      AccordianSelector: constants.PortfolioSmp_ACHoldings,
      AccordianName: "Holdings",
    },
    // XXX: {
    //     Selector: constants.PortfolioSmp_HDAmountInvested,
    //     inputType: "Dropdown",
    //     AccordianSelector: constants.PortfolioSmp_ACHoldings,
    //     AccordianName: "Holdings",
    //   },
    // XXX: {
    //     Selector: constants.PortfolioSmp_HDCashValue,
    //     inputType: "Integer",
    //     AccordianSelector: constants.PortfolioSmp_ACHoldings,
    //     AccordianName: "Holdings",
    //   },
    // XXX: {
    //     Selector: constants.PortfolioSmp_HDPercentage,
    //     inputType: "Integer",
    //     AccordianSelector: constants.PortfolioSmp_ACHoldings,
    //     AccordianName: "Holdings",
    //   },
    // XXX: {
    //     Selector: constants.PortfolioSmp_HDOfTotalPlan,
    //     inputType: "Integer",
    //     AccordianSelector: constants.PortfolioSmp_ACHoldings,
    //     AccordianName: "Holdings",
    //   },
  },
  Portfolio_BasicDetails_RegWithdrawal = {
    RegularWithdrawal: {
      Selector: constants.PortfolioSmp_RWRegularWithdrawal,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACRegularWithdrawals,
      AccordianName: "Regular Withdrawals",
    },
    RegularWithdrawalAmount: {
      Selector: constants.PortfolioSmp_RWAmount,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACRegularWithdrawals,
      AccordianName: "Regular Withdrawals",
    },
    RegularWithdrawalPercentage: {
      Selector: constants.PortfolioSmp_RWPercentage,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACRegularWithdrawals,
      AccordianName: "Regular Withdrawals",
    },
    RegularWithdrawalFrequency: {
      Selector: constants.PortfolioSmp_RWFrequency,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACRegularWithdrawals,
      AccordianName: "Regular Withdrawals",
    },
    RegularWithdrawalPaidIn: {
      Selector: constants.PortfolioSmp_RWPaidIn,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACRegularWithdrawals,
      AccordianName: "Regular Withdrawals",
    },
    RegularWithdrawalEscalationRate: {
      Selector: constants.PortfolioSmp_RWEscalation,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACRegularWithdrawals,
      AccordianName: "Regular Withdrawals",
    },
    RegularWithdrawalEscalationRateOther: {
      Selector: constants.PortfolioSmp_RWEscalationOther,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACRegularWithdrawals,
      AccordianName: "Regular Withdrawals",
    },
  },
  Portfolio_BasicDetails_DefinedIncome = {
    SafeguardedBenefits: {
      Selector: ".PotfolioBasic_DI_SafeguardedBenefits",
      inputType: "Dropdown",
      AccordianSelector: "#PortfolioSimpleEditor_DefinedIncome",
      AccordianName: "Defined Income",
    },
    DefinedIncomeAnnualIncome: {
      Selector: ".PotfolioBasic_DI_AnnualIncome",
      inputType: "Integer",
      AccordianSelector: "#PortfolioSimpleEditor_DefinedIncome",
      AccordianName: "Defined Income",
    },
    DefinedIncomeEscalationRate: {
      Selector: ".PotfolioBasic_DI_IncomeEscalation",
      inputType: "Dropdown",
      AccordianSelector: "#PortfolioSimpleEditor_DefinedIncome",
      AccordianName: "Defined Income",
    },
    DefinedIncomeEscalationRateOther: {
      Selector: ".PotfolioBasic_DI_Other",
      inputType: "Integer",
      AccordianSelector: "#PortfolioSimpleEditor_DefinedIncome",
      AccordianName: "Defined Income",
    },
    DefinedIncomeStarting: {
      Selector: ".PotfolioBasic_DI_Starting",
      inputType: "Dropdown",
      AccordianSelector: "#PortfolioSimpleEditor_DefinedIncome",
      AccordianName: "Defined Income",
    },
    DefinedIncomeStartingAge: {
      Selector: ".PotfolioBasic_DI_StartingAge",
      inputType: "Integer",
      AccordianSelector: "#PortfolioSimpleEditor_DefinedIncome",
      AccordianName: "Defined Income",
    },
    DefinedIncomeEnding: {
      Selector: ".PotfolioBasic_DI_Ending",
      inputType: "Dropdown",
      AccordianSelector: "#PortfolioSimpleEditor_DefinedIncome",
      AccordianName: "Defined Income",
    },
    DefinedIncomeEndingAge: {
      Selector: ".PotfolioBasic_DI_EndingAge",
      inputType: "Integer",
      AccordianSelector: "#PortfolioSimpleEditor_DefinedIncome",
      AccordianName: "Defined Income",
    },
  },
  Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_BasicDetails = {
    //Basic Details
    IncomeType: {
      Selector: ".BasicDetails_tooltip",
      inputType: "Dropdown_ReadOnly",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorBasicDetails,
      AccordianName: "Basic Details",
    },
    Name: {
      Selector: ".Name_tooltip",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorBasicDetails,
      AccordianName: "Basic Details",
    },
    NRA: {
      Selector: ".NRA_tooltip",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorBasicDetails,
      AccordianName: "Basic Details",
    },
  },  
  Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_IncomeDetails = {
    //Income Details
    IncomeAmount: {
      Selector: ".IncomeAmount_tooltip",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorIncomeDetails,
      AccordianName: "Income Details",
    },
    IncomeAsAt: {
      Selector: ".IncomeAsAt NonWijmoDatePickerElement day",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorIncomeDetails,
      AccordianName: "Income Details",
    },
    IncomeAsAt: {
      Selector: ".IncomeAsAt NonWijmoDatePickerElement month",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorIncomeDetails,
      AccordianName: "Income Details",
    },
    IncomeAsAt: {
      Selector: ".IncomeAsAt NonWijmoDatePickerElement year",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorIncomeDetails,
      AccordianName: "Income Details",
    },
    ERAFactor: {
      Selector: ".ERAFactor_tooltip",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorIncomeDetails,
      AccordianName: "Income Details",
    },
    ALRFactor: {
      Selector: ".ALRFactor_tooltip",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorIncomeDetails,
      AccordianName: "Income Details",
    },
    SegmentSpecificCommutation: {
      Selector: ".wijmo-checkbox-box",
      inputType: "Checkbox",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorIncomeDetails,
      AccordianName: "Income Details",
    },
    SegmentCommutationFactor: {
      Selector: ".SegmentCommutationFactor_tooltip input",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorIncomeDetails,
      AccordianName: "Income Details",
    },
    IncomeStops: {
      Selector: ".IncomeStops_tooltip",
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorIncomeDetails,
      AccordianName: "Income Details",
    },
    OtherAge: {
      Selector: ".OtherAge_tooltip input",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorIncomeDetails,
      AccordianName: "Income Details",
    },
  },  
  Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_RevaluationAndEscalation = {
    //Revaluation and Escalation
    RevaluationRate: {
      Selector: ".RevaluationRaye_tooltip input",
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorRevaluationEscalation,
      AccordianName: "Revaluation and Escalation",
    },
    CustomRevaluationRate: {
      Selector: ".CustomRevaluationRate_tooltip input",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorRevaluationEscalation,
      AccordianName: "Revaluation and Escalation",
    },
    MinRevaluationRate: {
      Selector: ".MinRevaluationRate_tooltip input",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorRevaluationEscalation,
      AccordianName: "Revaluation and Escalation",
    },
    MaxRevaluationRate: {
      Selector: ".MaxRevaluationRate_tooltip input",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorRevaluationEscalation,
      AccordianName: "Revaluation and Escalation",
    },
    RevaluationBasis: {
      Selector: ".RevaluationBasis_tooltip input",
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorRevaluationEscalation,
      AccordianName: "Revaluation and Escalation",
    },
    EscalationRate: {
      Selector: ".EscalationRate_tooltip input",
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorRevaluationEscalation,
      AccordianName: "Revaluation and Escalation",
    },
    CustomEscalationRate: {
      Selector: ".CustomEscalationRate_tooltip input",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorRevaluationEscalation,
      AccordianName: "Revaluation and Escalation",
    },
    MinEscalationRate: {
      Selector: ".MinEscalationRate_tooltip input",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorRevaluationEscalation,
      AccordianName: "Revaluation and Escalation",
    },
    MaxEscalationRate: {
      Selector: ".MaxEscalationRate_tooltip input",
      inputType: "Integer",
      AccordianSelector: constants.PortfolioSmp_ACSegmentEditorRevaluationEscalation,
      AccordianName: "Revaluation and Escalation",
    },
  },   
  Portfolio_BasicDetails_TransferDetails = {
    //Transfer Details
    TransferValue: {
      Selector: ".PotfolioBasic_Transfer_TransferValue",
      inputType: "Integer",
      AccordianSelector: "#Transfer Details",
      AccordianName: "Transfer Details",
    },
    TransferValueAsAt: {
      Selector: ".TransferValueAsAt",
      inputType: "Integer",
      AccordianSelector: "#Transfer Details",
      AccordianName: "Transfer Details",
    },
  },
  

  Portfolio_Simple = {
    ...Portfolio_BasicDetails_Simple,
    ...Portfolio_BasicDetails_CurrentValue,
    ...Portfolio_BasicDetails_OngoingContributions,
    ...Portfolio_BasicDetails_ProductCharges,
    ...Portfolio_BasicDetails_Holdings,
    ...Portfolio_BasicDetails_RegWithdrawal,
    ...Portfolio_BasicDetails_DefinedIncome,
    ...Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_BasicDetails,
    ...Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_IncomeDetails,
    ...Portfolio_BasicDetails_SafeguardedBenefitsSegmentEditor_RevaluationAndEscalation,
    ...Portfolio_BasicDetails_TransferDetails,
  };
