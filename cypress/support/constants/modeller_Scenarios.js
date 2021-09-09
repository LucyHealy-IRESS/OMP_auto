import * as InputTypes from "./Core.js";
export const ModellerScenarioListSelector = "#OverviewRetirementOptionScenariosListPopUp",

ModellerScenarioEditorSelector = '#QuickEditQuoteTypePopup',

ScenarioQuickEditor = {
    Quick_Scenario: {
        Selector: ".ScenarioPicker input",
        inputType: InputTypes.Input_Dropdown_ReadOnly,
        },
    Quick_RetirementAge: {
        Selector: ".Quick_RetirementAge_tooltip input",
        inputType: InputTypes.Input_Integer, 
        },
    Quick_Amount: {
        Selector: ".Quick_Amount_tooltip input",
        inputType: InputTypes.Input_Integer,
        },  
    Quick_AddAdditionalIncome: {
        Selector: ".IncludeAdditionalIncomeNeeds input",
        inputType: InputTypes.Input_Checkbox, 
        },  
    Quick_IncludeMarketCondition: {
        Selector: ".IncludeMarketCondition input",
        inputType: InputTypes.Input_Checkbox, 
        }, 
    Quick_MarketCondition: {
        Selector: ".market-condition-combo input",
        inputType: InputTypes.Input_Dropdown,
        }, 
    UseTaxAllowances: {
        Selector: ".UseTaxAllowances input",
        inputType: InputTypes.Input_Checkbox,   
        }, 
    },       

AssumptionsUsed = {
    Quick_GrowthRate: {
        Selector: ".Quick_GrowthRate input",
        inputType: InputTypes.Input_Dropdown,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },
    Quick_NewPlanGrowthRate: {
        Selector: ".Quick_NewPlanGrowthRate input",
        inputType: InputTypes.Input_Dropdown,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },     
    Quick_NominalRate: {
        Selector: ".Quick_NominalRate_tooltip input",
        inputType: InputTypes.Input_Integer,          
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",            
        },  
    Quick_ManageSurplusIncome: {
        Selector: ".manage-surplus-income-combo input",
        inputType: InputTypes.Input_Dropdown,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },     
    Quick_TaxBasis: {
        Selector: ".manage-surplus-income-combo input",
        inputType: InputTypes.Input_Dropdown,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },        
    Quick_DetuctLTAExcess: {
        Selector: ".Quick_DetuctLTAExcess",
        inputType: InputTypes.Input_Checkbox,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },  
    Quick_ExcessTakenAs: {
        Selector: ".Quick_DetuctLTAExcess input",
        inputType: InputTypes.Input_Dropdown,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },    
    Quick_IncludeStatePension: {
        Selector: ".Quick_IncludeStatePension",
        inputType: InputTypes.Input_Checkbox,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },      
    Quick_IncludePreRetirementPlans: {
        Selector: ".Quick_IncludePreRetirementPlans",
        inputType: InputTypes.Input_Checkbox,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },  
    Quick_ChangeMortalityAge: {
        Selector: ".Quick_ChangeMortalityAge",
        inputType: InputTypes.Input_Checkbox,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },     
    Quick_AssumedMortalityAge: {
        Selector: ".Quick_AssumedMortalityAge_tooltip input",
        inputType: InputTypes.Input_Integer,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },    
    Quick_ChangePlanOrder: {
        Selector: ".Quick_ChangePlanOrder",
        inputType: InputTypes.Input_Checkbox,
        AccordianSelector: "#AssumptionsUsed", 
        AccordianName: "Assumptions Used",     
        },                                
    },

AllModellerScenarioInputs = {
    ...ScenarioQuickEditor,
    ...AssumptionsUsed
};