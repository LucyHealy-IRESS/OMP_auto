import * as constants from "../constants/Core.js";
import * as constantsSelectors from "../constants/constantsSelectors.js";

//Iterate through the recieved folder, taking each file and passing it to the ProcessXMLFile function
Cypress.Commands.add("ProcessFile_API", (ExecutiionFolderLocation,fileName) => {
      
  var LogPath = "cypress/RunLogs/"+fileName.replace(".xml","")+"_API.csv";
  cy.wrap(LogPath).as('LogPath');
  cy.wrap([]).as('LogArray');
  
  cy.task("Create_Append_File", {filePath:LogPath,content:""}).then(() => {
    cy.log("Created Log File:" + LogPath);
  })
  
  var fileLocation = ExecutiionFolderLocation + "/" + fileName;
  //1 Creation Pass
  cy.ProcessXMLFile_API(fileLocation, constants.RunType_Create,"API_ActionRequired_Create");

  //2 Assert Pass
  cy.wait(1000);
  cy.ProcessXMLFile_API(fileLocation, constants.RunType_Assert,"API_ActionRequired_Assert");
      
  //3 Roll off what we have created
  cy.wait(1000);
  //cy.ProcessXMLFile_API(fileLocation,constants.RunType_Delete,"API_ActionRequired_Delete");
         
});

//Receiving the filename and decoding it in order to call the correct create/assert/delete functions
//Type = Create or Assert or Delete
Cypress.Commands.add("ProcessXMLFile_API", function(fileLocation, Type,ActionRequiredProperty) {

    cy.readFile(fileLocation).then(function (fileContents) {
      fileContents = fileContents.replace(/[\t\n\r]/gm, ""); //remove new lines and tabs

      var API_Requests = cy.getRequestXML(fileContents); //translates are string of xml into an object we can work with
      var XMLtoArray = Object.keys(API_Requests);
      function traverse(XMLtoArray, Data) {
        if (XMLtoArray !== null) {
          //Do We have something to process?
          for (var x = 0; x < XMLtoArray.length; x++) {
            var Entity = XMLtoArray[x]; //e.g. string Clients
            var CoreEntityType = constants.EntityTypes[Entity];
            if (CoreEntityType) {
              //e.g. is Clients one or our tags we have to process or could it Firstname which we dont care about
              var EntityData = Data[Entity]; //Grab Clients from the data
              if (Array.isArray(EntityData)) {
                //We could have multiple clients to create in which case they would be in an array
                for (var x = 0; x < EntityData.length; x++) {
                  // For each client......
                  cy.log(Entity + " " + Type);
                  if(CoreEntityType[ActionRequiredProperty]){
                    eval("cy." + Entity + "_" + Type + "_API(EntityData[x]);");
                  }                 
                  var XMLtoArraySub = Object.keys(EntityData[x]); //Get the specific client from the array       
                  traverse(XMLtoArraySub, EntityData[x]); //and start processing that down...
                }
                
              } else {
                cy.log(Entity + " " + Type);
                if(CoreEntityType[ActionRequiredProperty]){
                  eval("cy." + Entity + "_" + Type + "_API(EntityData);");
                }
                var XMLtoArraySub = Object.keys(EntityData);
                traverse(XMLtoArraySub, EntityData);
              }
            }
          }
        }
      }
      traverse(XMLtoArray, API_Requests); //e,g, clients|| Clients Data
      if(Type==constants.RunType_Assert){
        cy.UpdateAssertLogFile();
      }
      
    }); //end readFile
});

Cypress.Commands.add("API_Call", (fileContents, Type) => {
  //These will be read in from elsewhere
  var username = Cypress.env("usernameAPI");
  var password = Cypress.env("passwordAPI");
  var requestCaller = "Automation"; //Identifies company making call
  var requestCallerID = "Automation_Emily"; //dentify an individual user within the company making the web service call
  var transactionID = ""; //uniquely identify this particular request
  var type = Type; //CRUD
  var xml_Payload = fileContents;
  //START
  var xml = `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">
    <s:Header>
        <a:Action s:mustUnderstand="1">http://tempuri.org/IOMSService/Profiler</a:Action>
        <a:ReplyTo>
            <a:Address>http://www.w3.org/2005/08/addressing/anonymous</a:Address>
        </a:ReplyTo>
        <a:To s:mustUnderstand="1">[WebServiceAPIAddress]</a:To>
    </s:Header>
    <s:Body>
        <Profiler xmlns="http://tempuri.org/">
            <request xmlns:b="http://api.omsystems.co.uk" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <b:RequestCaller>[REQUEST_CALLER]</b:RequestCaller>
                <b:RequestDateTime>[REQUEST_DATETIME]</b:RequestDateTime>
                <b:RequestTransactionID>[REQUEST_TRANSACTIONID]</b:RequestTransactionID>
                <b:RequestType>[REQUEST_TYPE]</b:RequestType>  
                <b:RequestXMLData>[REQUEST_XML]</b:RequestXMLData>
                <b:ProfilerUsername>[REQUEST_USERNAME]</b:ProfilerUsername>
                <b:ProfilerPassword>[PROFILER_PASSWORD]</b:ProfilerPassword>
                <b:RequestCallerID>[REQUEST_CALLER_ID]</b:RequestCallerID>
            </request>
        </Profiler>
    </s:Body>
    </s:Envelope>`;

  xml = xml.replace("[WebServiceAPIAddress]",Cypress.env("API_URL"));

  var currentdate = new Date();
  var datetimeNow =
    currentdate.getFullYear() +
    "-" +
    cy.fixDigit(currentdate.getMonth() + 1) +
    "-" +
    cy.fixDigit(currentdate.getDate()) +
    "T" +
    cy.fixDigit(currentdate.getHours()) +
    ":" +
    cy.fixDigit(currentdate.getMinutes());

  xml_Payload = xml_Payload
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

  xml = xml.replace("[REQUEST_XML]", xml_Payload);
  xml = xml.replace("[REQUEST_CALLER]", requestCaller);
  xml = xml.replace("[REQUEST_CALLER_ID]", requestCallerID);
  xml = xml.replace("[REQUEST_DATETIME]", datetimeNow + ":00.0000000+00:00");
  xml = xml.replace("[REQUEST_TRANSACTIONID]", transactionID);
  xml = xml.replace("[REQUEST_TYPE]", type);
  xml = xml.replace("[REQUEST_USERNAME]", username);
  xml = xml.replace("[PROFILER_PASSWORD]", password);

  const xmlHeaders = {
    "Content-Type": "application/soap+xml",
  };

  //"https://html.omprofiler.uat.aws-wealth-uat-uk.iress.online/WebserviceAccessPoint/OMSService.svc"
  cy.request({
    method: "POST",
    url: Cypress.env("API_URL"),
    headers: xmlHeaders,
    form: false,
    body: xml,
  }).then(function (resp) {
    expect(resp.status).to.eq(200); //need to check is is status 200
    expect(resp).to.have.property("body"); //we have a  body
    expect(resp.body).includes("ResponseStatus>OK"); //check the web service didnt provide an error
    console.log("Response Body", resp.body);
    return resp;
  }); //end then
});


Cypress.Commands.add("API_Retreive", (xml_Payload) => {

  var retValue = "";

  cy.API_Call(xml_Payload,constants.API_Retrieve).then(function(ApiCallResponse){
   var callback = function (err, result) {
    retValue = result.Envelope.Body.ProfilerResponse.ProfilerResult.ResponseXMLData;
   };

  cy.xml2JS_parseString(ApiCallResponse.body, callback);

  return retValue;

});

});


// Cypress.Commands.add("getResponseXMLData", (responseXML, attibute) => {

//   var retValue = "";

//   var callback = function (err, result) {
//     retValue = result.Envelope.Body.ProfilerResponse.ProfilerResult.ResponseXMLData;
//   };

//   cy.xml2JS_parseString(responseXML, callback);

//   return retValue;
// });

// Cypress.Commands.add("getResponseXMLData_ClientRetreive", (responseXML, attibute) => {

//   var retValue = "";

//   var callback = function (err, result) {
//     var clientData = result.Response.Client;
//     retValue = clientData[attibute];
//   };

//   cy.xml2JS_parseString(responseXML, callback);

//   return retValue;
// });

//This function uses the xml2js library, it receives xml as a string and converts it into an object
cy.xml2JS_parseString = function (responseXML, callback) {
  var retValue = "";
  var parseString = require("xml2js").parseString; //npm install xml2js
  var stripNS = require("xml2js").processors.stripPrefix;

  const options = {
    tagNameProcessors: [stripNS], //removce namespaces
    explicitArray: false,
    preserveChildrenOrder:true,
  };

  parseString(responseXML, options, function (err, result) {
    callback(err, result);
  });

  return retValue;
};


cy.getRequestResponseXML = function (responseXML, PropertyName) {
  var retValue = "";

  var callback = function (err, result) {
    retValue = result[PropertyName]; //results from the function is the whole object - we want whats inside the root node
  };

  cy.xml2JS_parseString(responseXML, callback);

  return retValue;
};

cy.getRequestXML = function (responseXML) {  
  return cy.getRequestResponseXML(responseXML,"Root");
};

cy.getResponseXML = function (responseXML) {
  return cy.getRequestResponseXML(responseXML,"Response");
};