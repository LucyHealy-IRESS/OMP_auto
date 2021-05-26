import * as InputTypes from "./Core.js";
export const

PortfolioSearchTable = '.tableContainer .wijmo-wijsuperpanel-contentwrapper table tbody',


PortfolioSearch = {
    ResultsSchema: {
        Selector: ".wijmo-wijcombobox-wrapper > .gridSchemasDropDown",
        inputType: InputTypes.Input_DropdownIndex,
        AccordianSelector: "",
        AccordianName: "", 
    },
    PortfolioTextCriteria: {
        Selector: "",
        inputType: InputTypes.Input_String,
        AccordianSelector: "",
        AccordianName: "", 
    },
    Column1: {
        Selector: "",
        inputType: InputTypes.Input_String,
        AccordianSelector: "",
        AccordianName: "", 
    },
    Column2: {
        Selector: "",
        inputType: InputTypes.Input_String,
        AccordianSelector: "",
        AccordianName: "", 
    },
    Column3: {
        Selector: "",
        inputType: InputTypes.Input_String,
        AccordianSelector: "",
        AccordianName: "", 
    },

},

AllPortfolioSearchInputs = {
    ...PortfolioSearch
  } 