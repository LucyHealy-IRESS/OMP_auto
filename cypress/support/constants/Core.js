import * as ClientConstants from "../constants/client.js";
import * as PortfolioConstants from "../constants/portfolio.js";
export const

RunType_Create = "Create",
RunType_Assert = "Assert",

Workspace_ClientSearch = {
    Name: "ClientSearch",
    Paths: [{CurrentLocation: "Home", Path: [{Click:"#ExistingClientsIconMenu"}]},
            {CurrentLocation: "ClientSearch", Path: [""]}],
    Task: "RunSearch",
    SearchParam: "Surname",
    ThumbnailName: "Client Search",
    MenuSelector: ".JSSORPopUpMenu.DashboardNo_9D8375A5-D2F6-4073-B19D-1F128A6CAED3 .JSSORPopUpMenu_Open"
},

Workspace_Client = {
    Name: "Client",
    Paths: [{CurrentLocation: "Home", Path: [{Click:"#NewClientIcon"}]},
            {CurrentLocation: "ClientSearch", Path: [""]}],
    Task: "PopulateEditor"
},

ClientPortfolios = {
    Name: "Client Portfolios",
    Paths: [{CurrentLocation: "Client", Path: ["#Client_ViewPortfolios"]}],
    Task: "PopulateEditor"
},

//Matching XML
EntityTypes = {
 Clients : Workspace_ClientSearch,
 Client: Workspace_Client,
 Portfolios: ClientPortfolios,
 Portfolio: {},
 Investments: {},
 PortfolioInvestment:{}
}

// EntityTypes = {
//     Client: {
//       HomeButtonName: "New Client",
//       Editors: [
//         {Selector:'#EditClientPopup',
//         Mappings: ClientConstants.ClientAccordians,
//         NextButtonText: 'View Portfolios >'},
//         {Selector:'#Client_ViewPortfolios',
//         Mappings: null,
//         NextButtonText: 'Income Sources >',
//         SubEditor:
//             {Selector: "#PortfolioAddPopUp",
//             AccessPoint: "Add New Portfolio",
//             DataEntityRoot: "Portfolios",
//             DataEntity: "Portfolio",
//             Mappings: PortfolioConstants.PortfolioAccordians,
//             NextButtonText: 'Ok' ,
//                 SubEditor : {Selector: "#PortfolioSimpleEditor_QuickAddFundPopup",
//                 AccessPoint: "Pick funds from shortlist using fund name or ISIN",
//                 DataEntityRoot: "Investments",
//                 DataEntity: "PortfolioInvestment",
//                 customFunction: "ProcessAddHoldingQuick"
//             }
//         }
//         }
//         // ,{Selector:'#Client_ViewIncomes',Mappings: null, NextButtonText: 'Target Income, Expenses & Goals >'},
//         // {Selector:'#Client_ViewGoals',Mappings: null, NextButtonText: 'OK'},
//       ]
//     }
// }




//Mappings:PortfolioConstants.SimpleFundPicker,

//NextButtonText: 'Close'
// EntityTypes = {
//     Client: {
//       HomeButtonName: "New Client",
//       Editors: [
//         {Selector:'#EditClientPopup',Mappings: ClientConstants.ClientAccordians, NextButtonText: 'View Portfolios >'},
//         {Selector:'#Client_ViewPortfolios',Mappings: null, NextButtonText: 'Income Sources >'},
//         {Selector:'#Client_ViewIncomes',Mappings: null, NextButtonText: 'Target Income, Expenses & Goals >'},
//         {Selector:'#Client_ViewGoals',Mappings: null, NextButtonText: 'OK'},
//       ]
//     }
// }