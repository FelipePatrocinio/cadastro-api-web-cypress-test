/// <reference types="cypress-xpath" />

class NotFound404 {
    alert(){
        cy.visit('/validateNotFound404Alert')
        cy.contains('button', 'Meus Alertas').should('be.visible').click()
        cy.url().should('include', '/alertas')
    }

    monitoring(){
        cy.visit('/validateNotFound404Monitoring')
        cy.contains('button', 'Monitoramentos cadastrados').should('be.visible').click()
        cy.url().should('include', '/regras')
    }

    bases(){
        cy.visit('/validateNotFound404Bases')
        cy.contains('button', 'Minhas bases').should('be.visible').click()
        cy.url().should('include', '/bases')
    }
}

export default new NotFound404()