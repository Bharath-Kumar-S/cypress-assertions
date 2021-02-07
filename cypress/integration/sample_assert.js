/// <reference types="cypress" />

describe('Sample assert', () => {

    beforeEach(() =>{
        cy.visit(`https://example.cypress.io/commands/actions`);
    })

    it('first test', () => {
        expect(2).to.equal(2);
    })

    it(`Assert - Visibility of element`, () => {  
        cy.get(`[id="email1"]`).should(`be.visible`);
    })

    it(`Assert - Disabled element`, () => {
        cy.get(`textarea`).should(`be.disabled`);
    })

    it(`Assert - Focused element`, () => {
        cy.get('.action-focus').focus()
            .should(`be.focused`)
    })

    it(`Assert - Blank Input box`, () => {
        cy.get(`[id="email1"]`).should(`have.value`,``);
    })

    it(`Assert - Checkbox is checked`, ()=>{
        cy.get(`[value="checkbox1"]`).first().click().should(`be.checked`)
    })

    it(`Assert - Object assertions`,() => {
        let obj = {
            name: 'Bharath' 
        }
        expect(obj).to.deep.equal({ name: 'Bharath' })
    })

})