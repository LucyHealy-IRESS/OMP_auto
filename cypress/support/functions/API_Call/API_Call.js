
Cypress.Commands.add("API_Call", () => {
    //C:\GitHub\OMP_Auto\fixtures\Client001_xyz.xml
    cy.readFile("cypress/fixtures/Clients/Client001_xyz.xml").then(function (fileContents) {
        //These will be read in from elsewhere
        var username = (Cypress.env('usernameAPI'));
        var password = (Cypress.env('passwordAPI'));
        var requestCaller = "Automation"; //Identifies company making call
        var requestCallerID = "Automation_Emily"; //dentify an individual user within the company making the web service call
        var transactionID = ""; //uniquely identify this particular request
        var type = "Create"; //CRUD
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
          currentdate.getFullYear() +"-" +
          cy.fixDigit(currentdate.getMonth() + 1) + "-" +
          cy.fixDigit(currentdate.getDate()) + "T" +
          cy.fixDigit(currentdate.getHours()) + ":" +
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
        xml = xml.replace("[REQUEST_DATETIME]",datetimeNow + ":00.0000000+00:00");
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
        }); //end then
      });
});