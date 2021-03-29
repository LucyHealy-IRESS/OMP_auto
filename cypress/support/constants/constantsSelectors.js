export const 
//LOGIN	
	
Login_Username = '#loginPrompt-username',
Login_Password = '#loginPrompt-password',
Login_ok = '.ui-button-text',

//CLIENT	

//Personal Details
Client_Title = '#ClientDetailsPopup_Title',
Client_Firstname = '#ClientDetailsPopup_FirstName',
Client_Surname = '#ClientDetailsPopup_Surname',
Client_DOB = '#DateOfBirthInput',
Client_DOB_DD = '#ClientDetailsPopup_DOB_Day',
Client_DOB_MM = '#ClientDetailsPopup_DOB_Month',
Client_DOB_YYYY = '#ClientDetailsPopup_DOB_Year',
Client_Gender = '#ClientDetailsPopup_Gender',
Client_PlannedRetirementAge = '#ClientDetailsPopup_PlannedRetirementAge',
Client_CurrentSalaryAmount = '',
Client_StatePension = '',

//Contact Details	
Client_Address1 = '#ClientDetailsPopup_Address1',
Client_City = '#ClientDetailsPopup_Town',
Client_County = '#ClientDetailsPopup_County',
Client_Postcode = '#ClientDetailsPopup_Postcode',
Client_Address2 = '#ClientDetailsPopup_Address2',
Client_Address3 = '#ClientDetailsPopup_Address3',
Client_Email = '#ClientDetailsPopup_Email',
Client_WorkNumber = '#ClientDetailsPopup_WorkPhone',
Client_HomeNumber = '#ClientDetailsPopup_HomePhone',
Client_MobileNumber = '#ClientDetailsPopup_MobilePhone',

//Family Details	
Client_MaritalStatus = '#ClientDetailsPopup_MaritalStatus',
Client_DependantChildren = '#ClientDetailsPopup_DependantChildren',
Client_IndependantChildren = '#ClientDetailsPopup_IndependantChildren',
Client_Siblings = '#ClientDetailsPopup_Siblings',


//ClientHealth	
Client_HealthStatus = '#ClientDetailsPopup_HealthIssues',
Client_SmokerStatus = '#ClientDetailsPopup_Smoker',

//Tax	
Client_TaxRegion = '#ClientDetailsPopup_TaxRegion',
Client_LifetimeAllowanceType = '#ClientDetailsPopup_LifetimeAllowanceType',
Client_ProtectedAmount = '#ClientDetailsPopup_ProtectedAmount',
Client_LifetimeAllowancePreviouslyUsed = '#ClientDetailsPopup_PreviouslyUsed',
Client_LifetimeAllowanceEnhancementFactor = '#ClientDetailsPopup_EnhancementFactor',
Client_CustomLifetimeAllowance = '#ClientDetailsPopup_CustomLifetimeAllowance',
Client_AllowanceIncreases = '#ClientDetailsPopup_AllowanceIncreases',

//Service Basis	
Client_ServiceBasis = '#ClientDetailsPopup_ServiceBasis',
Client_EthicalInvestment = '#ClientDetailsPopup_EthicalInvestment',
Client_PayingFee = '#ClientDetailsPopup_PayingFee',
Client_NextReviewDate = '#ClientDetailsPopup_NextReviewVisit_Day',
Client_NextReviewVisit_Day = '#ClientDetailsPopup_NextReviewVisit_Day',
Client_NextReviewVisit_Month = '#ClientDetailsPopup_NextReviewVisit_Month',
Client_NextReviewVisit_Year = '#ClientDetailsPopup_NextReviewVisit_Year',
Client_Status = '#ClientDetailsPopup_ClientStatus',
Client_IsSharedWithCompany = '#ClientDetailsPopup_ShareClient',
  

//Portfolios
//Portfolio_BasicDetailsInputs	
       Portfolio_Import = '.basic_details_table > tbody > :nth-child(1) > td > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper > .wijmo-wijcombobox-input', //needs renaming
       Portfolio_XplanID = '.IRESSKey_tooltip',
       Portfolio_TransactKey = '.TransactKey_tooltip',
       Portfolio_FNAccountNumber = '.FundsNetworkAccountNumber_tooltip',
       Portfolio_Product = '.productCombo',
       Portfolio_AProduct = '.ProductDrpDwn',
       Portfolio_Provider = '.portProvider',
       Portfolio_AProvider = '.ProviderDrpDwn',
       Portfolio_Reference = '.ProductName_tooltip input',
       Portfolio_AReference = '.Reference_tooltip',
       Portfolio_Benchmark = ':nth-child(9) > td > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper',
       Portfolio_Status = '.PortfolioStatus',
       Portfolio_NextReviewDate = '.DateOfBirth_TextControl_tooltip',
       Portfolio_WorkplacePension = '[data-bind="if: ShowIsWorkplacePension"] > td > .wijmo-checkbox > .wijmo-checkbox-box',
       Portfolio_ASharePortfolio = ':nth-child(13) > td > .wijmo-checkbox > .wijmo-checkbox-box',
       
//Portfolio_CurrentValue	
       Portfolio_CurrentValue = '.CurrentValue_tooltip',

//Portfolio_OngoingContributions	
       Portfolio_GrossPremium = '.OngoingContsPremium_tooltip',
       Portfolio_Frequency = '.portOngoingContsType',
       Portfolio_Escalation = '.portOngoingContsEscalationRate',
       Portfolio_EscalationOther = '.OngoingContsEscalationRateOther_tooltip ',
       Portfolio_IncreasingEvery = '.portOngoingContsIncreasingEvery',
       Portfolio_ContributionStop = '.ContributionsStop_tooltip',
       Portfolio_StopAge = '.StopAge_tooltip',
       Portfolio_ClientExpenses = '.ClientExpenses_tooltip',


//Portfolio_Holdings	
       Portfolio_HistoricalHolding = '',
       Portfolio_HoldingName = '[data-bind="visible:IsOtherHoldings"] > .wijmo-wijtextbox',
       Portfolio_AssetType = '#ui-id-12 > table > tbody > :nth-child(3) > :nth-child(2) > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper',
       Portfolio_Units = '.RowEditUnits',
       Portfolio_CurrentPrice = ':nth-child(6) > :nth-child(2) > .wijmo-wijinput > .wijmo-wijinput-wrapper > .ui-corner-all',
       Portfolio_NewInvStatus = '.NewInvestmentStatus',
       Portfolio_OkPortfolioEditor = '[aria-describedby="PortfolioAddPopUp"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text',
       Portfolio_OkPortfolioGrid = '.ui-dialog-buttonset > .ui-button > .ui-button-text',
       Portfolio_HoldingsAccordion = '[data-bind="visible: Holdings_Relevant"]',
       Portfolio_AddFund = '#AddFund',
       Portfolio_FundPicker = '#AddFund > .wijmo-wijmenu-list > :nth-child(1) > .wijmo-wijmenu-link > .wijmo-wijmenu-text > span',
       Portfolio_FundName = '.quickAddFund_ComboBox',
       Portfolio_FundPickerOk = '#ui-id-12 > div:nth-child(2) > table > tbody > tr > td > div > div.wijmo-wijcombobox-trigger.ui-state-default.ui-corner-right',
       Portfolio_AddSearchFund = '#omprofiler > div:nth-child(47) > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(2) > span',
       //Portfolio_FundPickerOk = '#ui-id-12 > div:nth-child(2) > table > tbody > tr > td > div > div.wijmo-wijcombobox-trigger.ui-state-default.ui-corner-right',
       //Portfolio_AddSearchFund = '#omprofiler > div:nth-child(47) > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(2) > span',
       

//Portfolio_Purpose	
       Portfolio_InvestmentObjective = '.InvestmentOptions',
       Portfolio_TargetAmount = '[style="height:300px"] > #portfolio_info_table > tbody > :nth-child(2) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       Portfolio_InceptionDate = '[data-bind="visible:!IsModelPortfolio()"] > .textInput > .wijmo-wijinput > .wijmo-wijinput-wrapper',
       Portfolio_OriginalTerm = '#portfolio_info_table > tbody > :nth-child(4) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       Portfolio_MaturityAge = ':nth-child(5) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       
//Portfolio_RiskProfile	
       Portfolio_TargetRisk = '.TargetRiskProfile',
       Portfolio_EstablishedBy = '.EstablishedBy',
       Portfolio_CurrentRisk = '.CurrentRisk',

//Portfolio_GrowthRates	
       Portfolio_GrowthRates = '#GrowthRatesDropDown',
       Portfolio_ISLow = '.IndStdGrowthRateLow_tooltip',
       Portfolio_ISMid = '.IndStdGrowthRateMid_tooltip',
       Portfolio_ISHigh = '.IndStdGrowthRateHigh_tooltip',
       Portfolio_IALow = '.IndStdGrowthRateLow_InflationAdjusted_tooltip',
       Portfolio_IAMid = '.IndStdGrowthRateMid_InflationAdjusted_tooltip',
       Portfolio_IAHigh = '.IndStdGrowthRateHigh_InflationAdjusted_tooltip',

//Portfolio_ProductCharges	
       Portfolio_FundCharges = '.wijmo-wijaccordion-content-active > [style="height:300px"] > #portfolio_info_table > tbody > :nth-child(1) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       Portfolio_PlanCharges = '.wijmo-wijaccordion-content-active > [style="height:300px"] > #portfolio_info_table > tbody > :nth-child(2) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       Portfolio_PolicyFee = '.PolicyFeeInput',
       Portfolio_AdviserCharge = '.wijmo-wijaccordion-content-active > [style="height:300px"] > #portfolio_info_table > tbody > :nth-child(4) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       
//Portfolio_AssetAllocation	
       Portfolio_Tier1 = '.AssetAllocation1',
       Portfolio_Tier2 = '.AssetAllocation2',
       Portfolio_Tier3 = '.AssetAllocation3',
       Portfolio_Allocation = '[style="position: relative; float: left; width: 18%; padding: 0; margin: 0; text-align: center; height: 40px"] > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       
//Portfolio_DrawdownIncome	
       Portfolio_CurrentAnnualPension = '#drawdownIncomeTable > :nth-child(1) > :nth-child(1) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       Portfolio_IncomeType = '#drawdownIncomeTable > :nth-child(1) > :nth-child(2) > td > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper > .wijmo-wijcombobox-input',
       Portfolio_Date = '.segment-table > tbody > :nth-child(2) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       Portfolio_DrawdownFundValue = '.segment-table > tbody > :nth-child(3) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       Portfolio_IncomeTypeFromDate = '.segment-table > tbody > :nth-child(5) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       Portfolio_AnnualIncomeFromDate = '.segment-table > tbody > :nth-child(5) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       Portfolio_Paid = '.segment-table > tbody > :nth-child(6) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       Portfolio_LumpSumType = ':nth-child(7) > td > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper > .wijmo-wijcombobox-input',
       Portfolio_LumpSumAmount = '.segment-table > tbody > :nth-child(8) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       
//search

        searchTextMatch = '.TextMatch',


//PORTFOLIO SIMPLE EDITOR
       //Accordions
       PortfolioSmp_ACBasicDetails = '#PortfolioSimpleEditor_BasicDetails ',
       PortfolioSmp_ACCurrentValue = '#PortfolioSimpleEditor_CurrentValue',
       PortfolioSmp_ACOngoingContributions = '#PortfolioSimpleEditor_OngoingContributions',
       PortfolioSmp_ACHoldings = '#PortfolioSimpleEditor_Holdings',
       PortfolioSmp_ACRegularWithdrawals = '#PortfolioSimpleEditor_RegularWithdrawals',
       //Inputs
       PortfolioSmp_BDImport = '.basic_details_table > tbody > :nth-child(1) > td > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper > .wijmo-wijcombobox-input',
       PortfolioSmp_BDXplanID = '.IRESSKey_tooltip',
       PortfolioSmp_BDTransactKey = '.TransactKey_tooltip',
       PortfolioSmp_BDFNAccountNumber = '.FundsNetworkAccountNumber_tooltip',
       PortfolioSmp_BDProduct = '.productCombo',
       PortfolioSmp_BDProvider = '.portProvider',
       PortfolioSmp_BDReference = '.ProductName_tooltip',
       PortfolioSmp_BDWorkplacePension = '[data-bind="if: ShowIsWorkplacePension"] > td > .wijmo-checkbox > .wijmo-checkbox-box',
       PortfolioSmp_CVCurrentValue = '.CurrentValue_tooltip',
       PortfolioSmp_OCGrossPremium = '.OngoingContsPremium_tooltip',
       PortfolioSmp_OCFrequency = '.portOngoingContsType',
       PortfolioSmp_OCEscalation = '.portOngoingContsEscalationRate',
       PortfolioSmp_OCEscalationOther = '.OngoingContsEscalationRateOther_tooltip',
       PortfolioSmp_OCIncreasingEvery = '.portOngoingContsIncreasingEvery',
       PortfolioSmp_OCContributionStop = '.ContributionsStop_tooltip',
       PortfolioSmp_OCStopAge = '.StopAge_tooltip',
       PortfolioSmp_OCClientExpenses = '.ClientExpenses_tooltip',
       PortfolioSmp_HDName = '.PotfolioBasic_EditRowPopup_Name',
       PortfolioSmp_HDAssetType = '.PotfolioBasic_EditRowPopup_AssetType',
       PortfolioSmp_HDUnits = '.RowEditUnits',
       PortfolioSmp_HDCurrentPrice = '.PotfolioBasic_EditRowPopup_CurrentPrice',
       PortfolioSmp_HDStatus = '.NewInvestmentStatus',
       PortfolioSmp_HDAmountInvested = '.PotfolioBasic_EditHoldingUnits_InvestedAmount',
       PortfolioSmp_HDCashValue = '[data-bind="visible:IsPercentageVisible() == false"] > :nth-child(2) > .wijmo-wijinput > .wijmo-wijinput-wrapper > .editHoldingsUnitInput',
       PortfolioSmp_HDPercentage = ':nth-child(3) > :nth-child(2) > .wijmo-wijinput > .wijmo-wijinput-wrapper > .editHoldingsUnitInput',
       PortfolioSmp_HDOfTotalPlan = ':nth-child(4) > :nth-child(2) > .wijmo-wijinput > .wijmo-wijinput-wrapper > .editHoldingsUnitInput',
       PortfolioSmp_HDEnableCustomFund = '.paddingLeft > .wijmo-checkbox > .wijmo-checkbox-box > .wijmo-checkbox-icon',
       PortfolioSmp_HDCustomFundPrice = '[width="80"] > .wijmo-wijinput > .wijmo-wijinput-wrapper',
       PortfolioSmp_HDFundName = '.quickAddFund_ComboBox',
       PortfolioSmp_RWRegularWithdrawal = '.PotfolioBasic_RG_RegWithdrawal',
       PortfolioSmp_RWAmount = '.PotfolioBasic_RG_RegWithdrawalAmount',
       PortfolioSmp_RWPercentage = '.PotfolioBasic_RG_RegWithdrawalPercentage',
       PortfolioSmp_RWFrequency = '.RegularWithdrawl_Fequency',
       PortfolioSmp_RWPaidIn = '.RegularWithdrawl_PaidIn',
       PortfolioSmp_RWEscalation = '.RegularWithdrawl_Escalation',
       PortfolioSmp_RWEscalationOther = '.PotfolioBasic_RG_Other'




