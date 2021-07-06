import * as InputTypes from "./Core.js"
export const

ClientSearchInputs = {
Title: {
    Selector: "td:nth-child(2) :visible",
    inputType: InputTypes.Input_GridColumn
},
Firstname: {
    Selector: "td:nth-child(3)",
    inputType: InputTypes.Input_GridColumn
},
Surname: {
    Selector: "td:nth-child(4)",
    inputType: InputTypes.Input_GridColumn
},
DateOfBirth: {
    Selector: "td:nth-child(5)",
    inputType: InputTypes.Input_Date
}
}