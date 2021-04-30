export const

RunType_Create = "Create",
RunType_Assert = "Assert",
RunType_Delete = "Delete",

//Input types
Input_Integer = "Integer",
Input_Dropdown = "Dropdown",
Input_String = "String",
Input_Date = "Date",
Input_ClickThenValue = "ClickThenValue", //Used when there is a value thats auto calcuated when focus is lost, so we can enter a value to override after the click/calc
Input_ProductDropdown = "ProductDropdown", //Used in client to translate a product ID
Input_ProviderDropdown = "ProviderDropdown", //Used in client to translate a provider ID
Input_DropdownIndex = "DropdownIndex", //select a value from the dropdown based on its nth position in the list
Input_Dropdown_ReadOnly = "Dropdown_ReadOnly", //When a dropdown cant be typed in, cypress actually tells you its readonly
Input_Checkbox = "Checkbox",

API_Create = "Create",
API_Retrieve = "Retrieve",
API_Delete = "Delete",

Timeout_Login = 26000,
Timeout_Medium = 16000,
Timeout_EditorWait = 22600,
Timeout_SearchWait = 32000,
Timeout_MenuButtonWait = 36000,
Timeout_HoldingSearch = 100000,
Timeout_GetQuoteResults = 100000,

EntityTypes = {
    Clients: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    Client: {
        API_ActionRequired_Create: true,
        API_ActionRequired_Assert: true,
        API_ActionRequired_Delete: true
    },
    Portfolios: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    Portfolio: {
        API_ActionRequired_Create: true,
        API_ActionRequired_Assert: true,
        API_ActionRequired_Delete: false
    },
    Investments: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    PortfolioInvestment: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    TargetAssetAllocations: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    PortfolioTargetAssetAllocation: {
        API_ActionRequired_Create: true,
        API_ActionRequired_Assert: true,
        API_ActionRequired_Delete: false
    },
    SafeguardedBenefitsSegments: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    SafeguardedBenefitsSegment: {
        API_ActionRequired_Create: true,
        API_ActionRequired_Assert: true,
        API_ActionRequired_Delete: false
    },
    SwitchingQuotes: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    SwitchingQuote: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    Switching_CurrentPlans: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    Switching_CurrentPlan: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    Switching_ClientDetails: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    Switching_NewInvestments: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    Switching_NewInvestments_ABI_Sectors: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    Switching_NewInvestments_ABI_SubSectors: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    Switching_AdviserCharges: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    },
    Switching_AdviserCharging: {
        API_ActionRequired_Create: false,
        API_ActionRequired_Assert: false,
        API_ActionRequired_Delete: false
    }
    // ,Switching_ProductFilters: {
    //     API_ActionRequired_Create: false,
    //     API_ActionRequired_Assert: false,
    //     API_ActionRequired_Delete: false
    // },
    // Switching_ProductFeatures: {
    //     API_ActionRequired_Create: false,
    //     API_ActionRequired_Assert: false,
    //     API_ActionRequired_Delete: false
    // }
}