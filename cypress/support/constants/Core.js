export const

RunType_Create = "Create",
RunType_Assert = "Assert",
RunType_Delete = "Delete",

API_Create = "Create",
API_Retrieve = "Retrieve",
API_Delete = "Delete",

Timeout_Login = 26000,
Timeout_Medium = 16000,
Timeout_EditorWait = 22600,
Timeout_SearchWait = 32000,
Timeout_MenuButtonWait = 36000,
Timeout_HoldingSearch = 56000,

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
        API_ActionRequired_Assert: false,
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
    }
}