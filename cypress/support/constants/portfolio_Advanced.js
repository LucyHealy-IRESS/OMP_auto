import * as constants from "./constantsSelectors.js";

export const

PortfoliosAdvancedEditorSelector = '#EditPortfolioAdvancedPopup',
PortfolioSegmentEditorSelector = '#EditSafeguardedBenefitSegmentPopup',
//ToDo
//Import,Intelligent Office ID,Xplan ID,Transact Key,Drawdown Type,Account Number, Current salary amount and state pension amount
Portfolio_BasicDetails_Advanced = {
  PortfolioID:{},
  ClientID:{},
  third_party_tag: {},
  RetirementAge:{},
    ProductID: {
        Selector: ".ProductDrpDwn",
        inputType: "ProductDropdown",
        AccordianSelector: constants.PortfolioAdv_ACBasicDetails,
        AccordianName: 'Details', 
      }, 
      DrawdownType: {
        Selector: ".DrawdownTypeDrpDwn",
        inputType: "Dropdown",
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
        AccordianSelector: constants.PortfolioAdv_ACRiskProfile,
        AccordianName: 'Risk Profile', 
      },
    RiskEstBy: {
        Selector: ".EstablishedBy",
        inputType: "DropdownIndex",
         AccordianSelector: constants.PortfolioAdv_ACRiskProfile,
        AccordianName: 'Risk Profile', 
    },
    RiskCategory: {
      Selector: ".CurrentRisk ",
      inputType: "DropdownIndex",
       AccordianSelector: constants.PortfolioAdv_ACRiskProfile,
      AccordianName: 'Risk Profile', 
    },
    RiskMorningstar: {
      Selector: ".TargetRiskProfileRA",
      inputType: "DropdownIndex",
       AccordianSelector: constants.PortfolioAdv_ACRiskProfile,
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
      inputType: "Dropdown_ReadOnly",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
    },
  GrowthRateLow_Nominal: {
      Selector: constants.Portfolio_ISLow,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
      XMLOverride: "GrowthRateLow"
    },
  GrowthRateMid_Nominal: {
      Selector: constants.Portfolio_ISMid,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
      XMLOverride: "GrowthRateMid"
    },
  GrowthRateHigh_Nominal: {
      Selector: constants.Portfolio_ISHigh,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
      XMLOverride: "GrowthRateHigh"
    },
  GrowthRateLow_InflationAdjusted: {
      Selector: constants.Portfolio_IALow,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
      XMLOverride: "GrowthRateLow"
    },
  GrowthRateMid_InflationAdjusted: {
      Selector: constants.Portfolio_IAMid,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
      XMLOverride: "GrowthRateMid"
    },
  GrowthRateHigh_InflationAdjusted: {
      Selector: constants.Portfolio_IAHigh,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACGrowthRates,
      AccordianName: 'Growth Rates', 
      XMLOverride: "GrowthRateHigh"
    },
},


Portfolio_RegularWithdrawals_Advanced = {
  RegularWithdrawal: {
      Selector: ".portfolio_Adv_RW_RegWithdrawal",
      inputType: "Dropdown",
      AccordianSelector: "#PA_RegWithdrawals_Accordian",
      AccordianName: 'Regular Withdrawals', 
    },
  RegularWithdrawalAmount: {
      Selector: ".portfolio_Adv_RW_Amount",
      inputType: "Integer",
      AccordianSelector: "#PA_RegWithdrawals_Accordian",
      AccordianName: 'Regular Withdrawals', 
    },
  RegularWithdrawalPercentage: {
      Selector: ".portfolio_Adv_RW_Percentage",
      inputType: "Integer",
      AccordianSelector: "#PA_RegWithdrawals_Accordian",
      AccordianName: 'Regular Withdrawals', 
    },
  RegularWithdrawalFrequency: {
      Selector: ".portfolio_Adv_RW_Frequency",
      inputType: "Dropdown",
      AccordianSelector: "#PA_RegWithdrawals_Accordian",
      AccordianName: 'Regular Withdrawals', 
    },
  RegularWithdrawalPaidIn: {
      Selector: ".portfolio_Adv_RW_PaidIn",
      inputType: "Dropdown",
      AccordianSelector: "#PA_RegWithdrawals_Accordian",
      AccordianName: 'Regular Withdrawals', 
    },
  RegularWithdrawalEscalationRate: {
      Selector: ".portfolio_Adv_RW_Escalation",
      inputType: "Dropdown",
      AccordianSelector: "#PA_RegWithdrawals_Accordian",
      AccordianName: 'Regular Withdrawals', 
    },
  RegularWithdrawalEscalationRateOther: {
      Selector: ".portfolio_Adv_RW_EscOther",
      inputType: "Integer",
      AccordianSelector: "#PA_RegWithdrawals_Accordian",
      AccordianName: 'Regular Withdrawals', 
    },
 },


Portfolio_DefinedIncome_Advanced = {
  DefinedIncomeSafeguardedBenefits: {
      Selector: ".portfolio_Adv_DI_SafeguardedBenefits",
      inputType: "Dropdown",
      AccordianSelector: "#PA_DefinedIncome_Accordian",
      AccordianName: 'Defined Income', 
    },
  DefinedIncomeAnnualIncome: {
      Selector: ".portfolio_Adv_DI_AnnualIncome",
      inputType: "Integer",
      AccordianSelector: "#PA_DefinedIncome_Accordian",
      AccordianName: 'Defined Income', 
    },
  DefinedIncomeEscalationRate: {
      Selector: ".portfolio_Adv_DI_IncomeEsc",
      inputType: "Dropdown",
      AccordianSelector: "#PA_DefinedIncome_Accordian",
      AccordianName: 'Defined Income', 
    },  
  DefinedIncomeEscalationRateOther: {
      Selector: ".portfolio_Adv_DI_IncomeEscOthe",
      inputType: "Integer",
      AccordianSelector: "#PA_DefinedIncome_Accordian",
      AccordianName: 'Defined Income', 
    },
  DefinedIncomeStarting: {
      Selector: ".portfolio_Adv_DI_Starting",
      inputType: "Dropdown",
      AccordianSelector: "#PA_DefinedIncome_Accordian",
      AccordianName: 'Defined Income', 
    },   
  DefinedIncomeStartingAge: {
      Selector: ".portfolio_Adv_DI_StartingAge",
      inputType: "Integer",
      AccordianSelector: "#PA_DefinedIncome_Accordian",
      AccordianName: 'Defined Income', 
    },
    DefinedIncomeEnding: {
      Selector: ".portfolio_Adv_DI_Ending",
      inputType: "Dropdown",
      AccordianSelector: "#PA_DefinedIncome_Accordian",
      AccordianName: 'Defined Income', 
    },   
    DefinedIncomeEndingAge: {
      Selector: ".portfolio_Adv_DI_EndingAge",
      inputType: "Integer",
      AccordianSelector: "#PA_DefinedIncome_Accordian",
      AccordianName: 'Defined Income', 
    },
    // IncomeType: {
    //   Selector: ".BasicDetails_tooltip > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper > .wijmo-wijcombobox-input",
    //   inputType: "Dropdown_ReadOnly",
    //   AccordianSelector: "#SafeguardedBenefitsSegmentEditorAccordian > .ui-corner-bottom",
    //   AccordianName: 'Defined Income', 
    // },
    // Name: {
    //   Selector: ".Name_tooltip",
    //   inputType: "String",
    //   AccordianSelector: "#SafeguardedBenefitsSegmentEditorAccordian > .ui-corner-bottom",
    //   AccordianName: 'Defined Income', 
    // },
    // IncomeAmount: {
    //   Selector: ".IncomeAmount_tooltip",
    //   inputType: "Integer",
    //   AccordianSelector: "#SafeguardedBenefitsSegmentEditorAccordian > .ui-corner-bottom",
    //   AccordianName: 'Defined Income', 
    // },

},


Portfolio_SchemeAndTransferDetails_Advanced = {
    TransferValue: {
      Selector: ".portfolio_Adv_SchemeDetails_TransferValue",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    TransferValueAsAt: {
      Selector: ".TransferValueAsAt NonWijmoDatePickerElement day",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    TransferValueAsAt: {
      Selector: ".TransferValueAsAt NonWijmoDatePickerElement month",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    TransferValueAsAt: {
      Selector: ".TransferValueAsAt NonWijmoDatePickerElement year",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    RefinePCLSCommutationDetails: {
      Selector: ".wijmo-checkbox-box",
      inputType: "Checkbox",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    PCLSByCommutationNotAvailable: {
      Selector: ".wijmo-checkbox-box",
      inputType: "Checkbox",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    CommutationFactor: {
      Selector: ".portfolio_Adv_SchemeDetails_CommutationFactor",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    PCLSToTake: {
      Selector: ".portfolio_Adv_SchemeDetails_PCLSTake",
      inputType: "Dropdown",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    PCLSToTakeAmount: {
      Selector: ".portfolio_Adv_SchemeDetails_AmountToday",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    Include_Additional_Voluntary_Contributions: {
      Selector: ".wijmo-checkbox-box",
      inputType: "Checkbox",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    AVCValue: {
      Selector: ".portfolio_Adv_SchemeDetails_AMCValue",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    AVCValueAsAt: {
      Selector: ".AVCValueAsAt NonWijmoDatePickerElement day",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },


    AVCValueAsAt: {
      Selector: ".AVCValueAsAt NonWijmoDatePickerElement month",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    AVCValueAsAt: {
      Selector: ".AVCValueAsAt NonWijmoDatePickerElement year",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    Refine_Dependants_Details: {
      Selector: ".wijmo-checkbox-box",
      inputType: "Checkbox",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    DependantsGender: {
      Selector: ".portfolio_Adv_SchemeDetails_DepsGender",
      inputType: "Dropdown",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    DependantsDOB: {
      Selector: ".DependantsDOB NonWijmoDatePickerElement day",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    DependantsDOB: {
      Selector: ".DependantsDOB NonWijmoDatePickerElement month",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    DependantsDOB: {
      Selector: ".DependantsDOB NonWijmoDatePickerElement year",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    DependantsPensionPreNRA: {
      Selector: ".portfolio_Adv_SchemeDetails_PreRetirement",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    DependantsPensionPostNRA: {
      Selector: ".portfolio_Adv_SchemeDetails_PostRetirement",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    SpousesPensionBasedOn: {
      Selector: ".portfolio_Adv_SchemeDetails_BasedOn",
      inputType: "Dropdown",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    Refund_of_contributions_for_Death_Benefits: {
      Selector: ".wijmo-checkbox-box",
      inputType: "Checkbox",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    TotalMemberContributionsToScheme: {
      Selector: ".portfolio_Adv_SchemeDetails_TotalMemberConts",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },

    RefundOfContributionsInterestRate: {
      Selector: ".portfolio_Adv_SchemeDetails_RefundContsIntRate",
      inputType: "Integer",
      AccordianSelector: "#PA_TransferDetails_Accordian",
      AccordianName: 'Scheme & Transfer Details', 
    },
  },

  Portfolio_AssumptionsUsed_Advanced = {
    ReceivingPlanName: {
      Selector: ".portfolio_Adv_AU_ReceivingPlanName",
      inputType: "String",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    ReceivingFundCharge: {
      Selector: ".portfolio_Adv_AU_ReceivingFundCharge",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    ReceivingPlanCharge: {
      Selector: ".portfolio_Adv_AU_ReceivingPlanCharge",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    ReceivingPolicyFee: {
      Selector: ".portfolio_Adv_AU_PolicyFee",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    ReceivingAdviserCharge: {
      Selector: ".portfolio_Adv_AU_AdviserCharge",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    GrowthRateType: {
      Selector: ".portfolio_Adv_AU_GrowthRates",
      inputType: "Dropdown",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    NominalLow: {
      Selector: ".portfolio_Adv_AU_Low",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    NominalMid: {
      Selector: ".portfolio_Adv_AU_Mid",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    NominalHigh: {
      Selector: ".portfolio_Adv_AU_High",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    InflationAdjustedLow: {
      Selector: ".portfolio_Adv_AU_Low_InflAdj",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    InflationAdjustedMid: {
      Selector: ".portfolio_Adv_AU_Mid_InflAdj",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    InflationAdjustedHigh: {
      Selector: ".portfolio_Adv_AU_High_InflAdj",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    DateCeasedContractingOut: {
      Selector: ".DateCeasedContractingOut NonWijmoDatePickerElement day",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    DateCeasedContractingOut: {
      Selector: ".DateCeasedContractingOut NonWijmoDatePickerElement month",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    DateCeasedContractingOut: {
      Selector: ".DateCeasedContractingOut NonWijmoDatePickerElement year",
      inputType: "Integer",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    IndexMonthForRevaluation: {
      Selector: ".portfolio_Adv_AU_IndexMonth",
      inputType: "Dropdown",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },

    ERFAppliedToBenefitsRevaluedTo: {
      Selector: ".portfolio_Adv_AU_ERFApplied",
      inputType: "Dropdown",
      AccordianSelector: "#PA_AssumptionsUsed_Accordian",
      AccordianName: 'Assumptions Used', 
    },
  },    

  Portfolio_RetirementIncome_Advanced = {
    RI_RetirementIncome: {
        Selector: constants.Portfolio_RIRetirementIncome,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PensionIncomeType: {
        Selector: constants.Portfolio_RIPensionIncomeType,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_Product: {
        Selector: constants.Portfolio_RINewProductToUse,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_AnnualIncome: {
        Selector: constants.Portfolio_RIAnnualIncome,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_AnnualAmountInTodaysTerms: {
        Selector: constants.Portfolio_RIAnnualIncomeInTodaysTerms,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_AnnualPercentage: {
        Selector: constants.Portfolio_RIAnnualPercentage,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_IncomeEscalation: {
        Selector: constants.Portfolio_RIIncomeEscalation,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_IncomeEscalationOther: {
        Selector: constants.Portfolio_RIOtherEscalation,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PCLSStarting: {
        Selector: constants.Portfolio_RIStarting,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PCLSAge: {
        Selector: constants.Portfolio_RIStartingAge,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_AvailableFrom: {
        Selector: constants.Portfolio_RIAvailableFrom,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_AvailableFromAge: {
        Selector: constants.Portfolio_RIAvailableFromAge,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PCLSAvailable: {
        Selector: constants.Portfolio_RIPCLSAvailable,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PCLSAvailableOther: {
        Selector: constants.Portfolio_RIOtherPercentage,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PCLSTaken: {
        Selector: constants.Portfolio_RIPCLSTaken,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PCLSAmountInTodaysTerms: {
        Selector: constants.Portfolio_RIAnnualAmountTodaysTerms,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PCLSStarting: {
        Selector: constants.Portfolio_RIPCLSStarting,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PCLSAge: {
        Selector: constants.Portfolio_RIPCLSStartingAge,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PCLSWithdrawalEscalation: {
        Selector: constants.Portfolio_RIWithdrawalEscalation,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    RI_PCLSOtherEscalation: {
        Selector: constants.Portfolio_RIWithdrawalOtherEscalation,
        inputType: "Integer",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    ExcludeFromLifetimeAllowanceCalculations: {
        Selector: constants.Portfolio_RIExcludeFromLTCalcs,
        inputType: "Checkbox",
        AccordianSelector: constants.PortfolioAdv_ACRetirementIncome,
        AccordianName: "Retirement Income",
      },
    },

    
Portfolio_AssetAllocation_Advanced = {
  Tier1ID: {
      Selector: constants.Portfolio_AATier1,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioAdv_ACAssetAllocation,
      AccordianName: "Asset Allocation",
    },
  Tier2ID: {
      Selector: constants.Portfolio_AATier2,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioAdv_ACAssetAllocation,
      AccordianName: "Asset Allocation",
    },
  Tier3ID: {
      Selector: constants.Portfolio_AATier3,
      inputType: "Dropdown",
      AccordianSelector: constants.PortfolioAdv_ACAssetAllocation,
      AccordianName: "Asset Allocation",
    },
  Value: {
      Selector: constants.Portfolio_AAAllocation,
      inputType: "Integer",
      AccordianSelector: constants.PortfolioAdv_ACAssetAllocation,
      AccordianName: "Asset Allocation",
    },
  },

Portfolio_Holdings_Advanced = {
  FundID: {}, //only needed by the API
  TotalValue:{},
  InvestmentType:{},
  Status:{},
  FundName: {
    Selector: constants.Portfolio_HDName,
    inputType: "FundPicker",
    AccordianSelector: constants.PortfolioAdv_ACHoldings,
    AccordianName: "Holdings",
  },
  Investment: {
    Selector: constants.Portfolio_HDAssetType,
    inputType: "Dropdown",
    AccordianSelector: constants.PortfolioAdv_ACHoldings,
    AccordianName: "Holdings",
  },
  Units: {
    Selector: constants.Portfolio_HDUnits,
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACHoldings,
    AccordianName: "Holdings",
  },
  CurrentPrice: {
    Selector: constants.Portfolio_HDCurrentPrice,
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACHoldings,
    AccordianName: "Holdings",
  },
  InvestmentStatus: {
    Selector: constants.Portfolio_HDStatus,
    inputType: "Dropdown",
    AccordianSelector: constants.PortfolioAdv_ACHoldings,
    AccordianName: "Holdings",
  },
  UseCustomFundPrice: {
    Selector: constants.Portfolio_HDEnableCustomFund,
    inputType: "Checkbox",
    AccordianSelector: constants.PortfolioAdv_ACHoldings,
    AccordianName: "Holdings",
  },
  CustomFundPrice: {
    Selector: constants.Portfolio_HDCustomFundPrice,
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACHoldings,
    AccordianName: "Holdings",
  },
  FundPicker: {
    Selector: constants.Portfolio_HDFundName,
    inputType: "FundPicker",
    AccordianSelector: constants.PortfolioAdv_ACHoldings,
    AccordianName: "Holdings",
  },
},

Portfolio_DrawdownIncome_Advanced = {
  AnnualIncome: {
    Selector: constants.Portfolio_CurrentAnnualPension,
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_DrawdownIncome,
    AccordianName: "Drawdown Income"
  },
  IncomeType: {
    Selector: constants.Portfolio_IncomeType,
    inputType: "Dropdown",
    AccordianSelector: constants.PortfolioAdv_DrawdownIncome,
    AccordianName: "Drawdown Income"
  },
  Date: {
    Selector: ".DrwDwnInc_Day Date NonWijmoDatePickerElement day",
    inputType: "Integer",
    AccordianSelector: "#EditDrawdownIncomeEntityPopup",
    AccordianName: "Drawdown Income Editor"
  },
  Date: {
    Selector: ".DrwDwnInc_Day Date NonWijmoDatePickerElement month",
    inputType: "Integer",
    AccordianSelector: "#EditDrawdownIncomeEntityPopup",
    AccordianName: "Drawdown Income Editor"
  },
  Date: {
    Selector: ".DrwDwnInc_Day Date NonWijmoDatePickerElement year",
    inputType: "Integer",
    AccordianSelector: "#EditDrawdownIncomeEntityPopup",
    AccordianName: "Drawdown Income Editor"
  },
  DrawdownFundValueatDate: {
    Selector: ".DrwDwnInc_FundValueAtDate",
    inputType: "Integer",
    AccordianSelector: "#EditDrawdownIncomeEntityPopup",
    AccordianName: "Drawdown Income Editor"
  },
  IncomeTypeFromDate: {
    Selector: ".DrwDwnInc_IncomeTypeFromDate",
    inputType: "Dropdown",
    AccordianSelector: "#EditDrawdownIncomeEntityPopup",
    AccordianName: "Drawdown Income Editor"
  },
  AnnualIncomeFromDate: {
    Selector: ".DrwDwnInc_AnnualIncomeFromDate",
    inputType: "Integer",
    AccordianSelector: "#EditDrawdownIncomeEntityPopup",
    AccordianName: "Drawdown Income Editor"
  },
  Paid: {
    Selector: ".DrwDwnInc_Paid",
    inputType: "Dropdown",
    AccordianSelector: "#EditDrawdownIncomeEntityPopup",
    AccordianName: "Drawdown Income Editor"
  },
  LumpSumType: {
    Selector: ".DrwDwnInc_LumpSumType",
    inputType: "Dropdown",
    AccordianSelector: "#EditDrawdownIncomeEntityPopup",
    AccordianName: "Drawdown Income Editor"
  },
  LumpSumAmount: {
    Selector: ".DrwDwnInc_LumpSumAmount",
    inputType: "Integer",
    AccordianSelector: "#EditDrawdownIncomeEntityPopup",
    AccordianName: "Drawdown Income Editor"
  },

},

Portfolio_SafeguardedBenefitsSegmentEditor_BasicDetails_Advanced = {
  IncomeType: {
    Selector: ".BasicDetails_tooltip input",
    inputType: "Dropdown_ReadOnly",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorBasicDetails,
    AccordianName: "Basic Details",
  },
  Name: {
    Selector: ".Name_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorBasicDetails,
    AccordianName: "Basic Details",
  },
  NRA: {
    Selector: ".NRA_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorBasicDetails,
    AccordianName: "Basic Details",
  },
},  

Portfolio_SafeguardedBenefitsSegmentEditor_IncomeDetails_Advanced = {

  IncomeAmount: {
    Selector: ".IncomeAmount_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorIncomeDetails,
    AccordianName: "Income Details",
  },
  IncomeAsAt: {
    Selector: ".IncomeAsAt NonWijmoDatePickerElement day",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorIncomeDetails,
    AccordianName: "Income Details",
  },
  IncomeAsAt: {
    Selector: ".IncomeAsAt NonWijmoDatePickerElement month",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorIncomeDetails,
    AccordianName: "Income Details",
  },
  IncomeAsAt: {
    Selector: ".IncomeAsAt NonWijmoDatePickerElement year",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorIncomeDetails,
    AccordianName: "Income Details",
  },
  ERAFactor: {
    Selector: ".ERAFactor_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorIncomeDetails,
    AccordianName: "Income Details",
  },
  ALRFactor: {
    Selector: ".ALRFactor_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorIncomeDetails,
    AccordianName: "Income Details",
  },
  SegmentSpecificCommutation: {
    Selector: ".wijmo-checkbox-box",
    inputType: "Checkbox",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorIncomeDetails,
    AccordianName: "Income Details",
  },
  SegmentCommutationFactor: {
    Selector: ".SegmentCommutationFactor_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorIncomeDetails,
    AccordianName: "Income Details",
  },
  IncomeStops: {
    Selector: ".IncomeStops_tooltip input",
    inputType: "Dropdown",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorIncomeDetails,
    AccordianName: "Income Details",
  },
  OtherAge: {
    Selector: ".OtherAge_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorIncomeDetails,
    AccordianName: "Income Details",
  },
},  

Portfolio_SafeguardedBenefitsSegmentEditor_RevaluationAndEscalation_Advanced = {
  RevaluationRate: {
    Selector: ".RevaluationRaye_tooltip input",
    inputType: "Dropdown",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorRevaluationEscalation,
    AccordianName: "Revaluation and Escalation",
  },
  CustomRevaluationRate: {
    Selector: ".CustomRevaluationRate_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorRevaluationEscalation,
    AccordianName: "Revaluation and Escalation",
  },
  MinRevaluationRate: {
    Selector: ".MinRevaluationRate_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorRevaluationEscalation,
    AccordianName: "Revaluation and Escalation",
  },
  MaxRevaluationRate: {
    Selector: ".MaxRevaluationRate_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorRevaluationEscalation,
    AccordianName: "Revaluation and Escalation",
  },
  RevaluationBasis: {
    Selector: ".RevaluationBasis_tooltip input",
    inputType: "Dropdown",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorRevaluationEscalation,
    AccordianName: "Revaluation and Escalation",
  },
  EscalationRate: {
    Selector: ".EscalationRate_tooltip input",
    inputType: "Dropdown",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorRevaluationEscalation,
    AccordianName: "Revaluation and Escalation",
  },
  CustomEscalationRate: {
    Selector: ".CustomEscalationRate_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorRevaluationEscalation,
    AccordianName: "Revaluation and Escalation",
  },
  MinEscalationRate: {
    Selector: ".MinEscalationRate_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorRevaluationEscalation,
    AccordianName: "Revaluation and Escalation",
  },
  MaxEscalationRate: {
    Selector: ".MaxEscalationRate_tooltip input",
    inputType: "Integer",
    AccordianSelector: constants.PortfolioAdv_ACSegmentEditorRevaluationEscalation,
    AccordianName: "Revaluation and Escalation",
  },
},   

AllPortfolioAdvancedInputs = {
...Portfolio_BasicDetails_Advanced,
...Portfolio_OngoingContribution_Advanced,
...Portfolio_Purpose_Advanced,
...Portfolio_RiskProfile_Advanced,
...Portfolio_ProductCharges_Advanced,
...Portfolio_GrowthRates_Advanced,
...Portfolio_RegularWithdrawals_Advanced,
...Portfolio_DefinedIncome_Advanced,
...Portfolio_SchemeAndTransferDetails_Advanced,
...Portfolio_AssumptionsUsed_Advanced,
...Portfolio_RetirementIncome_Advanced,
...Portfolio_AssetAllocation_Advanced,
...Portfolio_Holdings_Advanced,
...Portfolio_DrawdownIncome_Advanced,
...Portfolio_SafeguardedBenefitsSegmentEditor_BasicDetails_Advanced,
...Portfolio_SafeguardedBenefitsSegmentEditor_IncomeDetails_Advanced,
...Portfolio_SafeguardedBenefitsSegmentEditor_RevaluationAndEscalation_Advanced, 
}

