

describe("Panel security", () =>{

   it("login", () =>{
      cy.login('live', 'username1', 'password1');
      cy.wait(10000);

      cy.getCookie('UserProfileViewModel.ThemeName').should('have.property', 'value', 'Redmond');
      cy.wait(10000);

      //cy.get('[data-gs-id="4859532f-e140-4738-9d57-95f688b3f55c"]').children().get('wijmo-wijgrid-table');

      /////cy.get('[data-gs-id="4859532f-e140-4738-9d57-95f688b3f55c"]').find('tr').find('td').as('tablecontent');
         ////cy.get('@tablecontent').should('contain.value', 'o.MP_2')
         // cy.get('[data-gs-id="4859532f-e140-4738-9d57-95f688b3f55c"]').parent().find('table').get('tr').get('td').each(() => {
         //    cy.get('td').should('contain','o.mp_2')

         // })
//-----------------------------------------------------------------------------------------------------------------------------------------------
cy.get('[data-gs-id="4859532f-e140-4738-9d57-95f688b3f55c"]').children().find('table').children().find('td')
.each(($e1, index, $list) => {
   const text = $e1.text();
   if (text.includes("o.MP_2")) {
      cy.get('[data-gs-id="4859532f-e140-4738-9d57-95f688b3f55c"]').children().find('table').children().find('td')
         .eq(index)
         .then(function(Field) {
         const Fieldtext = Field.text();
         expect(Fieldtext).to.equal("o.MP_2");
     })
   }
})

//-----------------------------------------------------------------------------------------------------------------------------------------------

cy.get('[data-gs-id="4859532f-e140-4738-9d57-95f688b3f55c"]').children().find('table').children().find('td')
.each(($e1, index, $list) => {
   const text = $e1.text();
   expect(text).to.contain("o.MP_2")
   
})

//-----------------------------------------------------------------------------------------------------------------------------------------------
         // let values = [];
         // cy.get('[data-gs-id="4859532f-e140-4738-9d57-95f688b3f55c"]').children().find('table').children().find('td')
         //    .each(($el, $index) => {
         //    cy.wrap($el)
         //     .invoke('text')
         //     .then(text => {
         //         if($index!==0)
         //           values.push(text.trim())
         //        })
            
         // })
         // .then(() => expect(values).to.deep.eq(["o.MP_2"]))

//-----------------------------------------------------------------------------------------------------------------------------------------------

      // cy.get('@tablecontent').then((tablecontent) =>{
      //    tablecontent.get('td')

      // tablecontent.forEach((td) => {

      //    function td(item){
      //    cy.get(item).should('contain.value','o.MP_1')
      //    }
         
      // });
      
      // // ('td').as('tablecontent');

      // // cy.get('@tablecontent').then((tablecontent) => {

      // //    if (tablecontent =='o.MP_1'){
      // //       tablecontent.dlclick();

      // //    }



      // //})

      // })
      
      

   })

})
