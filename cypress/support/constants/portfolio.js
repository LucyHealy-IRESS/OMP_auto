import * as constants from "../constants/constantsSelectors.js";
import * as InputTypes from "../constants/Core.js";
export const

ClientPortfoliosSelector = "#Client_ViewPortfolios",
PortfoliosQuickEditorSelector = "#PortfolioAddPopUp",
PortfolioQuickAddFundSelector = "PortfolioSimpleEditor_QuickAddFundPopup",
PortfoliosAdvancedEditorSelector = '#EditPortfolioAdvancedPopup', //depends where we lands from

Portfolio_BasicDetailsInputs_EmilyBasic = {
  ProductID: {
      Selector: constants.Portfolio_Product,
      inputType: InputTypes.Input_ProductDropdown,
      AccordianName: 'Basic Details',
      AccordianSelector: '#PortfolioSimpleEditor_BasicDetails',
    },
  ProviderID: {
      Selector: constants.Portfolio_Provider,
      inputType: InputTypes.Input_ProviderDropdown,
      AccordianName: 'Basic Details',
      AccordianSelector: '#PortfolioSimpleEditor_BasicDetails',
    }, 
  Reference: {
      Selector: constants.Portfolio_Reference,
      inputType: InputTypes.Input_String ,
      AccordianName: 'Basic Details',
      AccordianSelector: '#PortfolioSimpleEditor_BasicDetails',
    }
},

Portfolio_BasicDetailsAdvanced = {
  // third_party_tag: { //needs a better selector
  //   Selector: constants.ptImport,
  //   inputType: "Dropdown",
  //   },
  ExternalKey: {
      Selector: constants.Portfolio_XplanID,
      inputType: InputTypes.Input_String,
    },
  TransactKey: {
      Selector: constants.Portfolio_TransactKey,
      inputType: InputTypes.Input_String,
    },
  ExternalKey: {
      Selector: constants.Portfolio_FNAccountNumber,
      inputType: InputTypes.Input_String,
    },
  ProductID: {
      Selector: constants.Portfolio_AProduct,
      inputType: InputTypes.Input_ProductDropdown,
    }, 
  ProviderID: {
      Selector: constants.Portfolio_AProvider,
      inputType: InputTypes.Input_ProviderDropdown,
    }, 
  Reference: {
      Selector: constants.Portfolio_Reference,
      inputType: InputTypes.Input_String,
    }, 
  BenchMark: {
      Selector: constants.Portfolio_Benchmark,
      inputType: "Dropdown",
    }, 
  Status: {
      Selector: constants.Portfolio_Status,
      inputType: "Dropdown",
    }, 
  NextReviewDate: {
      Selector: constants.Portfolio_NextReviewDate,
      inputType: "Date",
    },
  IsWorkplacePension: {
      Selector: constants.Portfolio_WorkplacePension,
      inputType: "Checkbox",
    }, 
  IsSharedWithCompany: {
      Selector: constants.Portfolio_ASharePortfolio,
      inputType: "Checkbox",
    }, 
},

Portfolio_BasicDetailsSimple = {
  // third_party_tag: {  //needs a better selector
  //   Selector: constants.ptImport,
  //   inputType: "Dropdown",
  //   },
  ExternalKey: {
      Selector: constants.Portfolio_XplanID,
      inputType: InputTypes.Input_String,
    },
  TransactKey: {
      Selector: constants.Portfolio_TransactKey,
      inputType: InputTypes.Input_String,
    },
  ExternalKey: {
      Selector: constants.Portfolio_FNAccountNumber,
      inputType: InputTypes.Input_String,
    },
  ProductID: {
      Selector: constants.Portfolio_Product,
      inputType: "ProductDropdown",
    },
  ProviderID: {
      Selector: constants.Portfolio_Provider,
      inputType: "ProviderDropdown",
    },  
  Reference: {
      Selector: constants.Portfolio_Reference,
      inputType: InputTypes.Input_String,
    }, 
  IsWorkplacePension: {
      Selector: constants.Portfolio_WorkplacePension,
      inputType: "Checkbox",
    }, 
},

Portfolio_CurrentValue = {
  currentValue: {
    Selector: constants.Portfolio_CurrentValue,
    inputType: "Value",
  },
},

Portfolio_OngoingContribution = {
  OngoingContsPremium: {
      Selector: constants.Portfolio_GrossPremium,
      inputType: "Value",
    },
  OngoingContsType: {
      Selector: constants.Portfolio_Frequency,
      inputType: "Dropdown",
    },
  OngoingContsEscalationRate: {
      Selector: constants.Portfolio_Escalation,
      inputType: "Dropdown",
    },
  OngoingContsEscalationRateOther: {
      Selector: constants.Portfolio_EscalationOther,
      inputType: "Value",
    },
  OngoingContsIncreasingEvery: {
      Selector: constants.Portfolio_IncreasingEvery,
      inputType: "Dropdown",
    },
  ContributionsStop: {
      Selector: constants.Portfolio_ContributionStop,
      inputType: "Value",
    },
  StopAge: {
      Selector: constants.Portfolio_StopAge,
      inputType: InputTypes.Input_String,
    }, 
  ClientExpenses: {
      Selector: constants.Portfolio_ClientExpenses,
      inputType: "Dropdown",
    }, 
  },



Portfolio_Holdings = {
  FundPicker: {
    Selector: constants.FundPicker,
    inputType: "FundPicker",
  },  
},

Portfolio_Purpose = {
  DN: {
    Selector: constants.Portfolio_InvestmentObjective,
    inputType: "Dropdown",
  },
  RiskTargetAmount: {
    Selector: constants.Portfolio_TargetAmount,
    inputType: InputTypes.Input_String,
  },
  InceptionDate: {
    Selector: constants.Portfolio_InceptionDate,
    inputType: "Date",
  },
  DN: {
    Selector: constants.Portfolio_OriginalTerm,
    inputType: InputTypes.Input_String,
  },
  DN: {
    Selector: constants.Portfolio_MaturityAge,
    inputType: "Value",
  },
},

Portfolio_Risk = {
  RiskBasis: {
    Selector: constants.Portfolio_TargetRisk,
    inputType: "Dropdown",
  },
  RiskEstBy: {
    Selector: constants.Portfolio_EstablishedBy,
    inputType: "Dropdown",
  },
  Risk: {
    Selector: constants.Portfolio_CurrentRisk,
    inputType: "Dropdown",
  },
},

Portfolio_GrowthRates = {
  GrowthRateBasis: {
      Selector: constants.Portfolio_GrowthRates,
      inputType: "Dropdown",
    },
  GrowthRateLow: {
      Selector: constants.Portfolio_ISLow,
      inputType: "Value",
    },
  GrowthRateMid: {
      Selector: constants.Portfolio_ISMid,
      inputType: "Value",
    },
  GrowthRateHigh: {
      Selector: constants.Portfolio_ISHigh,
      inputType: "Value",
    },
  GrowthRateLow: {
      Selector: constants.Portfolio_IALow,
      inputType: "Value",
    },
  GrowthRateMid: {
      Selector: constants.Portfolio_IAMid,
      inputType: "Value",
    },
  GrowthRateHigh: {
      Selector: constants.Portfolio_IAHigh,
      inputType: "Value",
    },
},

Portfolio_ProductCharges = {
  FundCharge: {
      Selector: constants.Portfolio_FundCharges,
      inputType: "Value",
    },
  PlanCharge: {
      Selector: constants.Portfolio_PlanCharges,
      inputType: "Value",
    },
  PolicyFee: {
      Selector: constants.Portfolio_PolicyFee,
      inputType: "Value",
    },
  AdviserCharge: {
      Selector: constants.Portfolio_AdviserCharge,
      inputType: "Value",
    },
},

Portfolio_AssetAllocation = {
  Category_Name: {
      Selector: constants.Portfolio_Tier1,
      inputType: "Dropdown",
    },
  Subcategory_Name: {
      Selector: constants.Portfolio_Tier2,
      inputType: "Dropdown",
    },
  Subcategory_Two_Name: {
      Selector: constants.Portfolio_Tier3,
      inputType: "Dropdown",
    },
  Value: {
      Selector: constants.Portfolio_Allocation,
      inputType: "Value",
    },
},

Portfolio_DrawdownIncome = {
  CurrentAnnualPensionIncome: {
      Selector: constants.Portfolio_CurrentAnnualPension,
      inputType: "Value",
    },
  CurrentIncomeType: {
      Selector: constants.Portfolio_IncomeType,
      inputType: "Dropdown",
    },
  Date: {
      Selector: constants.Portfolio_Date,
      inputType: "Date",
    },
  FundValue: {
      Selector: constants.Portfolio_DrawdownFundValue,
      inputType: "Value",
    },
  IncomeType: {
      Selector: constants.Portfolio_IncomeTypeFromDate,
      inputType: "Dropdown",
    },
  AnnualIncome: {
      Selector: constants.Portfolio_AnnualIncomeFromDate,
      inputType: "Value",
    },
  Paid: {
      Selector: constants.Portfolio_Paid,
      inputType: "Dropdown",
    },
  LumpSumType: {
      Selector: constants.Portfolio_LumpSumType,
      inputType: "Dropdown",
    },
  LumpSumAmount: {
      Selector: constants.Portfolio_LumpSumAmount,
      inputType: "Value",
    },
},


AllPortfolioSimpleInputs = {
...Portfolio_BasicDetailsInputs_EmilyBasic
},


// BasicDetailsSimple: {
//   AccordianName: 'Basic Details',
//   AccordianSelector: '#PortfolioSimpleEditor_BasicDetails',
//   AccordianContentMappings: Portfolio_BasicDetailsSimple
// }

PortfolioAccordioansAdvanced = {
  BasicDetailsAdvanced: {
    AccordianName: 'Basic Details',
    AccordianSelector: '#portfolio_info_table',
    AccordianContentMappings: Portfolio_BasicDetailsAdvanced
  }

},







   P_1 = "Personal Pension",
   P_2 = "SIPP",
   P_3 = "SSAS",
   P_4 = "Drawdown",
   P_5 = "InvestmentBond Onshore",
   P_6 = "InvestmentBond Offshore",
   P_7 = "Stocks and Shares ISA",
   P_8 = "Bank Account",
   P_9 = "Property",
   P_10 = "Structured Product",
   P_11 = "Shares",
   P_12 = "General Investment Account (GIA)",
   P_13 = "Annuity in Payment",
   P_14 = "Defined Benefit Pension",
   P_15 = "Earned Income",
   P_16 = "Other Defined Contribution Pension",
   P_17 = "Current Salary",
   P_18 = "State Pension",
   P_19 = "Tax Free Income",
   P_20 = "Cash ISA",
   P_21 = "Wrap Account",


BBBBBBBB555500000000000000000001 = "Scottish Widows",
BBBBBBBB555500000000000000000002 = "AEGON",
BBBBBBBB555500000000000000000003 = "Prudential",
BBBBBBBB555500000000000000000004 = "Aviva",
BBBBBBBB555500000000000000000005 = "Guardian",
BBBBBBBB555500000000000000000007 = "NPI",
BBBBBBBB555500000000000000000008 = "Clerical Medical",
BBBBBBBB555500000000000000000009 = "Friends Life",
BBBBBBBB555500000000000000000011 = "Standard Life",
BBBBBBBB555500000000000000000012 = "LV=",
BBBBBBBB555500000000000000000013 = "Canada Life",
BBBBBBBB555500000000000000000014 = "Eagle Star",
BBBBBBBB555500000000000000000015 = "AXA Wealth",
BBBBBBBB555500000000000000000016 = "Scottish Mutual",
BBBBBBBB555500000000000000000018 = "Scottish Life",
BBBBBBBB555500000000000000000022 = "Legal & General",
BBBBBBBB555500000000000000000023 = "Alba",
BBBBBBBB555500000000000000000024 = "Equitable Life",
BBBBBBBB555500000000000000000025 = "Scottish Provident",
BBBBBBBB555500000000000000000026 = "Allied Dunbar",
BBBBBBBB555500000000000000000028 = "Skandia",
BBBBBBBB555500000000000000000038 = "Lautro",
BBBBBBBB555500000000000000000043 = "Phoenix",
BBBBBBBB555500000000000000000045 = "Portfolio",
BBBBBBBB555500000000000000000046 = "Abbey Life",
BBBBBBBB555500000000000000000048 = "Nil Charge Company",
BBBBBBBB555500000000000000000060 = "Abbey National",
BBBBBBBB555500000000000000000061 = "United Friendly",
BBBBBBBB555500000000000000000064 = "AMP",
BBBBBBBB555500000000000000000067 = "Barclays Life",
BBBBBBBB555500000000000000000068 = "Britannic Assurance",
BBBBBBBB555500000000000000000069 = "SLFC",
BBBBBBBB555500000000000000000327 = "Old Mutual",
BBBBBBBB555500000000000000000231 = "Suffolk Life",
BBBBBBBB555500000000000000000232 = "Parmenion",
BBBBBBBB555500000000000000000233 = "AXA Isle of Man",
BBBBBBBB555500000000000000000234 = "AXA Life Invest",
BBBBBBBB555500000000000000000235 = "Alliance Trust",
BBBBBBBB555500000000000000000236 = "Retirement Advantage",
BBBBBBBB555500000000000000000237 = "Jupiter",
BBBBBBBB555500000000000000000238 = "Reassure",
BBBBBBBB555500000000000000000239 = "Novia Financial",
BBBBBBBB555500000000000000000240 = "Amber Wrap",
BBBBBBBB555500000000000000000241 = "Other",
BBBBBBBB555500000000000000000242 = "Tenet",
BBBBBBBB555500000000000000000244 = "Vitality",
BBBBBBBB555500000000000000000245 = "Curtis Banks",
BBBBBBBB555500000000000000000155 = "Forester",
BBBBBBBB555500000000000000000156 = "Nationwide",
BBBBBBBB555500000000000000000159 = "Virgin Direct",
BBBBBBBB555500000000000000000160 = "Slc Confed",
BBBBBBBB555500000000000000000161 = "Alliance & Leicester",
BBBBBBBB555500000000000000000162 = "Edinburgh Fund Managers",
BBBBBBBB555500000000000000000163 = "Woolwich",
BBBBBBBB555500000000000000000165 = "Tesco",
BBBBBBBB555500000000000000000166 = "Fidelity",
BBBBBBBB555500000000000000000167 = "Direct Line",
BBBBBBBB555500000000000000000169 = "Phillips & Drew",
BBBBBBBB555500000000000000000171 = "Alico",
BBBBBBBB555500000000000000000172 = "Hambro Assured",
BBBBBBBB555500000000000000000173 = "Invesco",
BBBBBBBB555500000000000000000174 = "BlackRock Pensions Ltd",
BBBBBBBB555500000000000000000176 = "J P Morgan",
BBBBBBBB555500000000000000000177 = "Baillie Gifford",
BBBBBBBB555500000000000000000178 = "Bank of Scotland Inv Club",
BBBBBBBB555500000000000000000179 = "Deutsche Asset Management",
BBBBBBBB555500000000000000000182 = "Scottish Friendly",
BBBBBBBB555500000000000000000183 = "Swiss Life Pioneer",
BBBBBBBB555500000000000000000184 = "Gerrard",
BBBBBBBB555500000000000000000185 = "LionTrust",
BBBBBBBB555500000000000000000186 = "Threadneedle",
BBBBBBBB555500000000000000000187 = "CS Pooled Pension Ltd",
BBBBBBBB555500000000000000000188 = "Credit Suisse",
BBBBBBBB555500000000000000000189 = "Sterling",
BBBBBBBB555500000000000000000190 = "Scottish Legal",
BBBBBBBB555500000000000000000191 = "U B S Group",
BBBBBBBB555500000000000000000192 = "C I S Ltd",
BBBBBBBB555500000000000000000193 = "Barclays Global Investor",
BBBBBBBB555500000000000000000194 = "Friends Ivory",
BBBBBBBB555500000000000000000246 = "Wealthtime",
BBBBBBBB555500000000000000000143 = "Lloyds T S B",
BBBBBBBB555500000000000000000144 = "Tunbridge Wells",
BBBBBBBB555500000000000000000145 = "Wesleyan",
BBBBBBBB555500000000000000000146 = "Windsor Life",
BBBBBBBB555500000000000000000147 = "Zurich Assurance",
BBBBBBBB555500000000000000000148 = "Nfu Mutual",
BBBBBBBB555500000000000000000149 = "Marks & Spencer F S",
BBBBBBBB555500000000000000000150 = "Sector Averages",
BBBBBBBB555500000000000000000151 = "Halifax Life",
BBBBBBBB555500000000000000000152 = "Fleming",
BBBBBBBB555500000000000000000153 = "National Australia",
BBBBBBBB555500000000000000000154 = "Indices",
BBBBBBBB555500000000000000000070 = "Century Life",
BBBBBBBB555500000000000000000075 = "Cornhill Insurance",
BBBBBBBB555500000000000000000080 = "Family Assurance",
BBBBBBBB555500000000000000000081 = "F & B",
BBBBBBBB555500000000000000000082 = "Professional Life",
BBBBBBBB555500000000000000000083 = "Gartmore",
BBBBBBBB555500000000000000000084 = "Generali",
BBBBBBBB555500000000000000000090 = "Hearts Of Oak",
BBBBBBBB555500000000000000000093 = "Irish Life",
BBBBBBBB555500000000000000000094 = "SEB Trygg",
BBBBBBBB555500000000000000000095 = "J Rothschild",
BBBBBBBB555500000000000000000099 = "London Life",
BBBBBBBB555500000000000000000100 = "Medical Sickness",
BBBBBBBB555500000000000000000102 = "M G M",
BBBBBBBB555500000000000000000103 = "Sanlam Investments & Pens",
BBBBBBBB555500000000000000000104 = "HSBC",
BBBBBBBB555500000000000000000105 = "Midland Life",
BBBBBBBB555500000000000000000108 = "Manchester Unity",
BBBBBBBB555500000000000000000110 = "Natwest Life",
BBBBBBBB555500000000000000000111 = "Pearl Assurance",
BBBBBBBB555500000000000000000112 = "Eurolife",
BBBBBBBB555500000000000000000113 = "Winterthur Life",
BBBBBBBB555500000000000000000116 = "Reliance",
BBBBBBBB555500000000000000000117 = "Royal Heritage",
BBBBBBBB555500000000000000000118 = "Royal Liver",
BBBBBBBB555500000000000000000120 = "Royal London",
BBBBBBBB555500000000000000000121 = "Royal Scottish",
BBBBBBBB555500000000000000000122 = "Save & Prosper",
BBBBBBBB555500000000000000000137 = "Sun Life Of Canada",
BBBBBBBB555500000000000000000139 = "Swiss Life",
BBBBBBBB555500000000000000000140 = "Teachers",
BBBBBBBB555500000000000000000195 = "St James's Place UK",
BBBBBBBB555500000000000000000196 = "Liverpool & Victoria",
BBBBBBBB555500000000000000000197 = "State Street Global Adv",
BBBBBBBB555500000000000000000198 = "UBS Global Asst Man Life",
BBBBBBBB555500000000000000000199 = "Swiss R?",
BBBBBBBB555500000000000000000200 = "Aberdeen Fund Man Ltd",
BBBBBBBB555500000000000000000201 = "Britanic Asset Man",
BBBBBBBB555500000000000000000202 = "Scot Eq Intl Dublin Plc",
BBBBBBBB555500000000000000000203 = "Ecclesiastical Life",
BBBBBBBB555500000000000000000204 = "Police Mutual",
BBBBBBBB555500000000000000000205 = "The Hartford",
BBBBBBBB555500000000000000000206 = "Henderson Global Inv",
BBBBBBBB555500000000000000000207 = "Royal London Pooled Pen",
BBBBBBBB555500000000000000000208 = "City Of Westminster",
BBBBBBBB555500000000000000000209 = "Met Life",
BBBBBBBB555500000000000000000210 = "Architas Multi-Mgr Ltd.",
BBBBBBBB555500000000000000000211 = "Skandia Investment Sol.",
BBBBBBBB555500000000000000000212 = "Cofunds",
BBBBBBBB555500000000000000000213 = "Ascentric",
BBBBBBBB555500000000000000000214 = "FundsNetwork",
BBBBBBBB555500000000000000000215 = "Transact",
BBBBBBBB555500000000000000000216 = "James Hay Partnership",
BBBBBBBB555500000000000000000217 = "Suffolk Life (Ascentric)",
BBBBBBBB555500000000000000000218 = "Suffolk Life (Cofunds)",
BBBBBBBB555500000000000000000219 = "Suffolk Life (7IM)",
BBBBBBBB555500000000000000000220 = "Suffolk Life (FundsNetwork)",
BBBBBBBB555500000000000000000221 = "Suffolk Life (Raymond James)",
BBBBBBBB555500000000000000000222 = "James Hay Partnership (WRAP)",
BBBBBBBB555500000000000000000223 = "Suffolk Life (Skandia)",
BBBBBBBB555500000000000000000224 = "James Hay Partnership (SIPP)",
BBBBBBBB555500000000000000000225 = "Suffolk Life (Transact)",
BBBBBBBB555500000000000000000226 = "Standard? Life",
BBBBBBBB555500000000000000000227 = "Homeowners Friendly",
BBBBBBBB555500000000000000000228 = "Nucleus",
BBBBBBBB555500000000000000000229 = "AJ Bell",
BBBBBBBB555500000000000000000230 = "AXA Life Europe",
BBBBBBBB555500000000000000000328 = "Non Pension Funds",


ProductIDs = {
  PD_1: {
      label: "Personal Pension",
      pType: "Pension",
  },
  PD_2: {
      label: "SIPP",
      pType: "Pension",
  },
  PD_3: {
    label: "SSAS",
    pType: "Pension",
  },
  PD_4: {
    label: "Drawdown",
    pType: "Pension",
  },
  PD_5: {
    label: "InvestmentBond Onshore",
    pType: "Investment",
  },
  PD_6: {
    label: "InvestmentBond Offshore",
    pType: "Investment",
  },
  PD_7: {
    label: "Stocks and Shares ISA",
    pType: "Investment",
  },
  PD_8: {
    label: "Bank Account",
    pType: "Investment",
  },
  PD_9: {
    label: "Property",
    pType: "Investment",
  },
  PD_10: {
    label: "Structured Product",
    pType: "Investment",
  },
  PD_11: {
    label: "Shares",
    pType: "Investment",
  },
  PD_12: {
    label: "General Investment Account (GIA)",
    pType: "Investment",
  },
  PD_13: {
    label: "Annuity in Payment",
    pType: "Income",
  },
  PD_14: {
    label: "Defined Benefit Pension",
    pType: "Income",
  },
  PD_15: {
    label: "Earned Income",
    pType: "Income",
  },
  PD_16: {
    label: "Other Defined Contribution Pension",
    pType: "Pension",
  },
  PD_17: {
    label: "Current Salary",
    pType: "Income",
  },
  PD_18: {
    label: "State Pension",
    pType: "Income",
  },
  PD_19: {
    label: "Tax Free Income",
    pType: "Income",
  },
  PD_20: {
    label: "Cash ISA",
    pType: "Income",
  },
  PD_21: {
    label: "Wrap Account",
    pType: "Wrap",
  }
}




