/// <reference types="cypress" />
describe('week 2 day 2', () => {

    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it('within calismasi', () => {
        cy.get("form[method='post']").within(() => {

            cy.get('#RESULT_TextField-1').type('omer')

        })
    });

    it('find calismasi', () => {
        cy.get("form[method='post']")
            .find('#RESULT_TextField-1')
            .type('omer')
    });





    it('double click', () => {


        cy.get('a#nav1').dblclick() 
    })

    it('right click ',()=>{
        cy.get('a#nav1').rightclick() 
    })

})



//  (username,password)=>{}
//   input => {}