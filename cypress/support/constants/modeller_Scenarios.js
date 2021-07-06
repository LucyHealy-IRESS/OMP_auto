import * as InputTypes from "./Core.js";
export const

ModellerScenarioEditorSelector = '#ModellerScenarioEditorPopup',

ScenarioQuickEditor = {
    Quick_Scenario: {
        Selector: ".ScenarioPicker input",
        inputType: InputTypes.Input_Dropdown_ReadOnly,
        AccordianSelector: "#ScenarioQuickEditor", 
        AccordianName: "ScenarioQuickEditor",  
        },
    Quick_RetirementAge: {
        Selector: ".Quick_RetirementAge_tooltip input",
        inputType: InputTypes.Input_Integer,
        AccordianSelector: "#ScenarioQuickEditor", 
        AccordianName: "ScenarioQuickEditor",  
        },
    Quick_Amount: {
        Selector: ".Quick_Amount_tooltip input",
        inputType: InputTypes.Input_Integer,
        AccordianSelector: "#ScenarioQuickEditor", 
        AccordianName: "ScenarioQuickEditor",  
        },  
    Quick_AddAdditionalIncome: {
        Selector: ".IncludeAdditionalIncomeNeeds",
        inputType: InputTypes.Input_Checkbox,
        AccordianSelector: "#ScenarioQuickEditor", 
        AccordianName: "ScenarioQuickEditor",  
        },  
    Quick_IncludeMarketCondition: {
        Selector: ".IncludeMarketCondition",
        inputType: InputTypes.Input_Checkbox,
        AccordianSelector: "#ScenarioQuickEditor", 
        AccordianName: "ScenarioQuickEditor",  
        }, 
    Quick_MarketCondition: {
        Selector: ".market-condition-combo input",
        inputType: InputTypes.Input_Dropdown,
        AccordianSelector: "#ScenarioQuickEditor", 
        AccordianName: "ScenarioQuickEditor",  
        }, 
    UseTaxAllowances: {
        Selector: ".UseTaxAllowances",
        inputType: InputTypes.Input_Checkbox,
        AccordianSelector: "#ScenarioQuickEditor", 
        AccordianName: "ScenarioQuickEditor",     
        }, 
    }       

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
    }

    AllModellerScenarioInputs = {
        ...ScenarioQuickEditor,
        ...AssumptionsUsed,
    }