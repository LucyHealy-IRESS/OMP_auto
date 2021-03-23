export const 
//Login
        clientDetailsPopup = '.clientdetailseditorOverview',
        usernameconst = '#loginPrompt-username',
        passwordconst = '#loginPrompt-password',
        okconst = '.ui-button-text',

//Client

       titleconst = '#ClientDetailsPopup_Title',
       firstnameconst = '#ClientDetailsPopup_FirstName',
       surnameconst = '#ClientDetailsPopup_Surname',
       dobconst = '#DateOfBirthInput',
       dobDD ='#ClientDetailsPopup_DOB_Day',
       dobMM = '#ClientDetailsPopup_DOB_Month',
       dobYYYY = '#ClientDetailsPopup_DOB_Year',
       genderconst = '#ClientDetailsPopup_Gender',
       plannedretirementage = '#ClientDetailsPopup_PlannedRetirementAge',
       clStatus = '#ClientDetailsPopup_ClientStatus',
       clCurrentSalaryAmount = '',
       clStatePension = '', 

       //Contact Details
        clAddress1 = '#ClientDetailsPopup_Address1', 
        clCity = '#ClientDetailsPopup_Town',
        clCounty = '#ClientDetailsPopup_County', 
        clPostcode = '#ClientDetailsPopup_Postcode', 
        clAddress2 = "#ClientDetailsPopup_Address2",
        clAddress3 = "#ClientDetailsPopup_Address3",
        clEmail = "#ClientDetailsPopup_Email",
        clWorkNumber = "#ClientDetailsPopup_WorkPhone",
        clHomeNumber = "#ClientDetailsPopup_HomePhone",
        clMobileNumber = "#ClientDetailsPopup_MobilePhone",

        //Family Details
        clMaritalStatus = "#ClientDetailsPopup_MaritalStatus",
        clDependantChildren = "#ClientDetailsPopup_DependantChildren",
        clIndependantChildren = "#ClientDetailsPopup_IndependantChildren",
        clSiblings = "#ClientDetailsPopup_Siblings",


        //ClientHealth
        clHealthStatus = "#ClientDetailsPopup_HealthIssues",
        clSmokerStatus = "#ClientDetailsPopup_Smoker",

        //Tax
        clTaxRegion = "#ClientDetailsPopup_TaxRegion",
        clLifetimeAllowanceType = "#ClientDetailsPopup_LifetimeAllowanceType",
        clProtectedAmount = "#ClientDetailsPopup_ProtectedAmount",
        clLifetimeAllowancePreviouslyUsed = "#ClientDetailsPopup_PreviouslyUsed",
        clLifetimeAllowanceEnhancementFactor = "#ClientDetailsPopup_EnhancementFactor",
        clCustomLifetimeAllowance = "#ClientDetailsPopup_CustomLifetimeAllowance",
        clAllowanceIncreases = "#ClientDetailsPopup_AllowanceIncreases",

        //Service Basis     
        clServiceBasis = "#ClientDetailsPopup_ServiceBasis",
        clEthicalInvestment = "#ClientDetailsPopup_EthicalInvestment",
        clPayingFee = "#ClientDetailsPopup_PayingFee",
        clNextReviewDate = "#ClientDetailsPopup_NextReviewVisit_Day",
        clNextReviewVisit_Day = "#ClientDetailsPopup_NextReviewVisit_Day",
        clNextReviewVisit_Month = "#ClientDetailsPopup_NextReviewVisit_Month",
        clNextReviewVisit_Year = "#ClientDetailsPopup_NextReviewVisit_Year",
        clClientStatus = "#ClientDetailsPopup_ClientStatus",
        clIsSharedWithCompany = "#ClientDetailsPopup_ShareClient",
  

//Portfolios
//Portfolio_BasicDetailsInputs	
       ptImport = '.basic_details_table > tbody > :nth-child(1) > td > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper > .wijmo-wijcombobox-input', //needs renaming
       ptXplanID = '.IRESSKey_tooltip',
       ptTransactKey = '.TransactKey_tooltip',
       ptFNAccountNumber = '.FundsNetworkAccountNumber_tooltip',
       ptProduct = '.productCombo',
       ptAProduct = '.ProductDrpDwn',
       ptProvider = '.portProvider',
       ptAProvider = '.ProviderDrpDwn',
       ptReference = '.ProductName_tooltip',
       ptAReference = '.Reference_tooltip',
       ptBenchmark = ':nth-child(9) > td > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper',
       ptStatus = '.PortfolioStatus',
       ptNextReviewDate = '.DateOfBirth_TextControl_tooltip',
       ptWorkplacePension = '[data-bind="if: ShowIsWorkplacePension"] > td > .wijmo-checkbox > .wijmo-checkbox-box',
       ptASharePortfolio = ':nth-child(13) > td > .wijmo-checkbox > .wijmo-checkbox-box',
       
//Portfolio_CurrentValue	
       ptCurrentValue = '.CurrentValue_tooltip',

//Portfolio_OngoingContributions	
       ptGrossPremium = '.OngoingContsPremium_tooltip',
       ptFrequency = '.portOngoingContsType',
       ptEscalation = '.portOngoingContsEscalationRate',
       ptEscalationOther = '.OngoingContsEscalationRateOther_tooltip ',
       ptIncreasingEvery = '.portOngoingContsIncreasingEvery',
       ptContributionStop = '.ContributionsStop_tooltip',
       ptStopAge = '.StopAge_tooltip',
       ptClientExpenses = '.ClientExpenses_tooltip',


//Portfolio_Holdings	
       ptHistoricalHolding = '',
       ptHoldingName = '[data-bind="visible:IsOtherHoldings"] > .wijmo-wijtextbox',
       ptAssetType = '#ui-id-12 > table > tbody > :nth-child(3) > :nth-child(2) > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper',
       ptUnits = '.RowEditUnits',
       ptCurrentPrice = ':nth-child(6) > :nth-child(2) > .wijmo-wijinput > .wijmo-wijinput-wrapper > .ui-corner-all',
       ptNewInvStatus = '.NewInvestmentStatus',
       okportfolioeditorconst = '[aria-describedby="PortfolioAddPopUp"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button > .ui-button-text',
       okportfoliogridconst = '.ui-dialog-buttonset > .ui-button > .ui-button-text',
       ptHoldingsAccordion = '[data-bind="visible: Holdings_Relevant"]',
       ptAddFund = '#AddFund',
       ptFundPicker = '#AddFund > .wijmo-wijmenu-list > :nth-child(1) > .wijmo-wijmenu-link > .wijmo-wijmenu-text > span',
       ptFundName = '.quickAddFund_ComboBox',
       ptFundPickerOk = '#ui-id-12 > div:nth-child(2) > table > tbody > tr > td > div > div.wijmo-wijcombobox-trigger.ui-state-default.ui-corner-right',
       ptAddSearchFund = '#omprofiler > div:nth-child(47) > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(2) > span',
       //ptFundPickerOk = '#ui-id-12 > div:nth-child(2) > table > tbody > tr > td > div > div.wijmo-wijcombobox-trigger.ui-state-default.ui-corner-right',
       //ptAddSearchFund = '#omprofiler > div:nth-child(47) > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(2) > span',
       

//Portfolio_Purpose	
       ptInvestmentObjective = '.InvestmentOptions',
       ptTargetAmount = '[style="height:300px"] > #portfolio_info_table > tbody > :nth-child(2) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       ptInceptionDate = '[data-bind="visible:!IsModelPortfolio()"] > .textInput > .wijmo-wijinput > .wijmo-wijinput-wrapper',
       ptOriginalTerm = '#portfolio_info_table > tbody > :nth-child(4) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       ptMaturityAge = ':nth-child(5) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       
//Portfolio_RiskProfile	
       ptTargetRisk = '.TargetRiskProfile',
       ptEstablishedBy = '.EstablishedBy',
       ptCurrentRisk = '.CurrentRisk',

//Portfolio_GrowthRates	
       ptGrowthRates = '#GrowthRatesDropDown',
       ptISLow = '.IndStdGrowthRateLow_tooltip',
       ptISMid = '.IndStdGrowthRateMid_tooltip',
       ptISHigh = '.IndStdGrowthRateHigh_tooltip',
       ptIALow = '.IndStdGrowthRateLow_InflationAdjusted_tooltip',
       ptIAMid = '.IndStdGrowthRateMid_InflationAdjusted_tooltip',
       ptIAHigh = '.IndStdGrowthRateHigh_InflationAdjusted_tooltip',

//Portfolio_ProductCharges	
       ptFundCharges = '.wijmo-wijaccordion-content-active > [style="height:300px"] > #portfolio_info_table > tbody > :nth-child(1) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       ptPlanCharges = '.wijmo-wijaccordion-content-active > [style="height:300px"] > #portfolio_info_table > tbody > :nth-child(2) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       ptPolicyFee = '.PolicyFeeInput',
       ptAdviserCharge = '.wijmo-wijaccordion-content-active > [style="height:300px"] > #portfolio_info_table > tbody > :nth-child(4) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       
//Portfolio_AssetAllocation	
       ptTier1 = '.AssetAllocation1',
       ptTier2 = '.AssetAllocation2',
       ptTier3 = '.AssetAllocation3',
       ptAllocation = '[style="position: relative; float: left; width: 18%; padding: 0; margin: 0; text-align: center; height: 40px"] > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       
//Portfolio_DrawdownIncome	
       ptCurrentAnnualPension = '#drawdownIncomeTable > :nth-child(1) > :nth-child(1) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       ptIncomeType = '#drawdownIncomeTable > :nth-child(1) > :nth-child(2) > td > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper > .wijmo-wijcombobox-input',
       ptDate = '.segment-table > tbody > :nth-child(2) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       ptDrawdownFundValue = '.segment-table > tbody > :nth-child(3) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       ptIncomeTypeFromDate = '.segment-table > tbody > :nth-child(5) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       ptAnnualIncomeFromDate = '.segment-table > tbody > :nth-child(5) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       ptPaid = '.segment-table > tbody > :nth-child(6) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       ptLumpSumType = ':nth-child(7) > td > .wijmo-wijcombobox > .wijmo-wijcombobox-wrapper > .wijmo-wijcombobox-input',
       ptLumpSumAmount = '.segment-table > tbody > :nth-child(8) > td > .wijmo-wijinput > .wijmo-wijinput-wrapper > .wijmo-wijinput-input',
       
//search

        searchTextMatch = '.TextMatch'




