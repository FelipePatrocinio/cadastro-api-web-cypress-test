/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Base {

    viewGridTitle(){

        cy.visit('/bases')
        cy.contains('#base-list > app-base-item > p', ' Bases cadastradas').should('be.visible')
    }

    new(){
        const filepath = 'file/CNPJ.txt'

        cy.visit('/bases')
        
        cy.get('input[type="file"]').attachFile(filepath)
        cy.contains('.base-name', ' Carteira 1 ').should('be.visible')
        cy.wait(10000)
        cy.screenshot()
    }
}

export default new Base()