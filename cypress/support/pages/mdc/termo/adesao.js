/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Adesao {

    adesao(){

        cy.visit('/termo-de-adesao')
        cy.contains('button', 'Concordar e prosseguir').should('be.visible').click()
        cy.url().should('include', '/')
    }
}

export default new Adesao()