//This function uses the xml2js library, it receives xml as a string and converts it into an object
cy.xml2JS_parseString = function (responseXML, callback) {
  var retValue = "";
  var parseString = require("xml2js").parseString; //npm install xml2js
  var stripNS = require("xml2js").processors.stripPrefix;

  const options = {
    tagNameProcessors: [stripNS], //removce namespaces
    explicitArray: false,
  };

  parseString(responseXML, options, function (err, result) {
    callback(err, result);
  });

  return retValue;
};

cy.getRequestXML = function (responseXML) {
  var retValue = "";

  var callback = function (err, result) {
    retValue = result.Root; //results from the function is the whole object - we want whats inside the root node
  };

  cy.xml2JS_parseString(responseXML, callback);

  return retValue;
};

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
        <a:To s:mustUnderstand="1">https://html.omprofiler.uat.aws-wealth-uat-uk.iress.online/WebserviceAccessPoint/OMSService.svc</a:To>
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

  cy.request({
    method: "POST",
    url:
      "https://html.omprofiler.uat.aws-wealth-uat-uk.iress.online/WebserviceAccessPoint/OMSService.svc",
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

Cypress.Commands.add("ProcessClientPortfolio_API", (Portfolio) => {
  //xml2js library is going to take our xml object and turn it back into a string for the API to receive
  var xml2js = require("xml2js");
  var builder = new xml2js.Builder({headless: true,explicitRoot: false,rootName: "ClientPortfolio"}); //replace <Portfolio> with <ClientPortfolio> - required by the Web service
  var xml = builder.buildObject(Portfolio);
  xml = xml.replace(
    "<ClientPortfolio>",
    '<ClientPortfolio xmlns="http://api.omsystems.co.uk">'
  ); //Adding back in the namespace

  cy.API_Call(xml, "Create");
});

Cypress.Commands.add("ProcessClient_API", (Client) => {
  var Portfolios = null; //Portfolios to the API are a seperate call, they API will not accept in the client xml, so we wil take it from the client xml and store here for later
  if (Client.Portfolios) {
    Portfolios = Client.Portfolios;
    delete Client.Portfolios; //remove so we dont pass to the API from the client
  }

  //xml2js library is going to take our xml object and turn it back into a string for the API to receive
  var xml2js = require("xml2js");
  var builder = new xml2js.Builder({headless: true,explicitRoot: false,rootName: "Client"});
  var xml = builder.buildObject(Client);
  xml = xml.replace("<Client>", '<Client xmlns="http://api.omsystems.co.uk">'); //Add the namespace back in

  cy.API_Call(xml, "Create");

  if (Portfolios && Portfolios.Portfolio) {
    if (Array.isArray(Portfolios.Portfolio)) { //The API can only create one portfolio at a time, 1 per request
      for (var x = 0; x < Portfolios.Portfolio.length; x++) {
        var Portfolio = Portfolios.Portfolio[x];
        cy.ProcessClientPortfolio_API(Portfolio);
      }
    } else {
      var Portfolio = Portfolios.Portfolio;
      cy.ProcessClientPortfolio_API(Portfolio);
    }
  }
});

Cypress.Commands.add("Create_Client_API", (xmlFilePath) => {
  cy.readFile(xmlFilePath).then(function (fileContents) {
    fileContents = fileContents.replace(/[\t\n\r]/gm, ""); //remove new lines and tabs

    var API_Requests = cy.getRequestXML(fileContents); //translates are string of xml into an object we can work with
    var Clients = API_Requests["Clients"]; //get the <Clients> section of the xml
    var Client = null; // this will contain the client we want to process
    if (Array.isArray(Clients.Client)) {
      //multiple clients to create
      for (var x = 0; x < Clients.Client.length; x++) {
        Client = Clients.Client[x];
        cy.ProcessClient_API(Client);
      }
    } else {
      //One client to create
      Client = API_Requests["Clients"]["Client"]; // same as <root><clients><client>
      cy.ProcessClient_API(Client);
    }
  });
});


Cypress.Commands.add("RetreiveClient_API", (clientID) => {

  var xml_Payload = `<Client xmlns="http://api.omsystems.co.uk">
  <ClientID>[CLIENT_ID]</ClientID>
</Client>`;
xml_Payload = xml_Payload.replace("[CLIENT_ID]", clientID);

  return cy.API_Call(xml_Payload,"Retrieve");
});


Cypress.Commands.add("getResponseXMLData", (responseXML, attibute) => {

  var retValue = "";

  var callback = function (err, result) {
    retValue = result.Envelope.Body.ProfilerResponse.ProfilerResult.ResponseXMLData;
  };

  cy.xml2JS_parseString(responseXML, callback);

  return retValue;
});

Cypress.Commands.add("getResponseXMLData_ClientRetreive", (responseXML, attibute) => {

  var retValue = "";

  var callback = function (err, result) {
    var clientData = result.Response.Client;
    retValue = clientData[attibute];
  };

  cy.xml2JS_parseString(responseXML, callback);

  return retValue;
});

