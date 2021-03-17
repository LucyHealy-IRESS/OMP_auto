import * as ClientConstants from "../constants/client.js";
export const

RunType_Create = "Create",
RunType_Assert = "Assert",

EntityTypes = {
    Client: {    
      HomeButtonName: "New Client",
      Editors: [
        {Selector:'#EditClientPopup',Mappings: ClientConstants.ClientAccordians, NextButtonText: 'View Portfolios >'}
      ]
    }
}

