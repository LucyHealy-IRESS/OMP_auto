import * as constants from "./constantsSelectors.js";
export const

ClientPortfoliosSelector = "#Client_ViewPortfolios",
PortfoliosQuickEditorSelector = "#PortfolioAddPopUp",
PortfolioQuickAddFundSelector = "PortfolioSimpleEditor_QuickAddFundPopup",

Portfolio_Simple = {

    third_party_tag: {
        Selector: constants.PortfolioSmp_BDImport,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioSmp_ACBasicDetails,
        AccordianName: "Basic Details",
      },  
    ExternalKey: {
        Selector: constants.PortfolioSmp_BDXplanID,
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
    CurrentValue: {
        Selector: constants.PortfolioSmp_CVCurrentValue,
        inputType: "Value",
        AccordianSelector: constants.PortfolioSmp_ACCurrentValue,
        AccordianName: "Current Value",
      },  
    OngoingContsPremium: {
        Selector: constants.PortfolioSmp_OCGrossPremium,
        inputType: "Value",
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
        inputType: "Value",
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
        inputType: "Value",
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
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioSmp_ACOngoingContributions,
        AccordianName: "Ongoing Contributions",
      },  
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
        inputType: "Value",
        AccordianSelector: constants.PortfolioSmp_ACHoldings,
        AccordianName: "Holdings",
      },  
    CurrentPrice: {
        Selector: constants.PortfolioSmp_HDCurrentPrice,
        inputType: "Value",
        AccordianSelector: constants.PortfolioSmp_ACHoldings,
        AccordianName: "Holdings",
      },  
    InvestmentStatus: {
        Selector: constants.PortfolioSmp_HDStatus,
        inputType: "Dropdown",
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
    //     inputType: "Value",
    //     AccordianSelector: constants.PortfolioSmp_ACHoldings,
    //     AccordianName: "Holdings",
    //   },  
    // XXX: {
    //     Selector: constants.PortfolioSmp_HDPercentage,
    //     inputType: "Value",
    //     AccordianSelector: constants.PortfolioSmp_ACHoldings,
    //     AccordianName: "Holdings",
    //   },  
    // XXX: {
    //     Selector: constants.PortfolioSmp_HDOfTotalPlan,
    //     inputType: "Value",
    //     AccordianSelector: constants.PortfolioSmp_ACHoldings,
    //     AccordianName: "Holdings",
    //   },  
    UseCustomFundPrice: {
        Selector: constants.PortfolioSmp_HDEnableCustomFund,
        inputType: "Checkbox",
        AccordianSelector: constants.PortfolioSmp_ACHoldings,
        AccordianName: "Holdings",
      },  
    CustomFundPrice: {
        Selector: constants.PortfolioSmp_HDCustomFundPrice,
        inputType: "Value",
        AccordianSelector: constants.PortfolioSmp_ACHoldings,
        AccordianName: "Holdings",
      },  
    InvestmentType: {
        Selector: constants.PortfolioSmp_HD,
        inputType: "",
        AccordianSelector: constants.PortfolioSmp_ACHoldings,
        AccordianName: "Holdings",
      },  
    FundPicker: {
        Selector: constants.PortfolioSmp_HDFundName,
        inputType: "FundPicker",
        AccordianSelector: constants.PortfolioSmp_ACHoldings,
        AccordianName: "Holdings",
      },  
    RegularWithdrawal: {
        Selector: constants.PortfolioSmp_RWRegularWithdrawal,
        inputType: "Dropdown",
        AccordianSelector: constants.PortfolioSmp_ACRegularWithdrawals,
        AccordianName: "Regular Withdrawals",
      },  
    RegularWithdrawalAmount: {
        Selector: constants.PortfolioSmp_RWAmount,
        inputType: "Value",
        AccordianSelector: constants.PortfolioSmp_ACRegularWithdrawals,
        AccordianName: "Regular Withdrawals",
      },  
    RegularWithdrawalPercentage: {
        Selector: constants.PortfolioSmp_RWPercentage,
        inputType: "Value",
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
        inputType: "Value",
        AccordianSelector: constants.PortfolioSmp_ACRegularWithdrawals,
        AccordianName: "Regular Withdrawals",
      }

}