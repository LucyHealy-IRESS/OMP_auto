import * as ClientConstants from "../constants/client.js";
import * as PortfolioConstants from "../constants/portfolio.js";
export const

RunType_Create = "Create",
RunType_Assert = "Assert",

EntityTypes = {
    Client: {    
      HomeButtonName: "New Client",
      Editors: [
        {Selector:'#EditClientPopup',Mappings: ClientConstants.ClientAccordians, NextButtonText: 'View Portfolios >'},
        {Selector:'#Client_ViewPortfolios',Mappings: null, NextButtonText: 'Income Sources >',
            SubEditor: {Selector: "#PortfolioAddPopUp", AccessPoint: "Add New Portfolio", DataEntityRoot: "Portfolios",DataEntity: "Portfolio", 
            Mappings: PortfolioConstants.PortfolioAccordians, NextButtonText: 'Ok' ,
                        SubEditor : {Selector: "#PortfolioSimpleEditor_QuickAddFundPopup", AccessPoint: "Pick funds from shortlist using fund name or ISIN", 
                        DataEntityRoot: "Investments",DataEntity: "PortfolioInvestment", customFunction: "ProcessAddHoldingQuick"}}    
        }        
        // ,{Selector:'#Client_ViewIncomes',Mappings: null, NextButtonText: 'Target Income, Expenses & Goals >'},
        // {Selector:'#Client_ViewGoals',Mappings: null, NextButtonText: 'OK'},
      ]
    }
}

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