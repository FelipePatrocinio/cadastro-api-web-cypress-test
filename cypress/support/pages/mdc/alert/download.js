/// <reference types="cypress-xpath" />

class NotFound404 {
    button(){
        cy.visit('/alertas')
        cy.contains('button', 'Download Alertas ').should('be.visible')
    }

    popUp(){
        cy.contains('button', 'Download Alertas ').should('be.visible').click()
        cy.contains('header', 'Download Alertas').should('be.visible')
    }

    fileCSV(){
        cy.get('select').select('CSV').should('have.value', 'csv')
        cy.contains('.button.btn-confirm', 'Download').should('be.visible').click()
        cy.contains('.notification-success', 'Sucesso').should('be.visible')
        cy.contains('div > div.notification-message > p', 'Seu download foi realizado com sucesso!').should('be.visible')
    }

    fileXLSX(){
        cy.contains('button', 'Download Alertas ').should('be.visible')
        cy.contains('button', 'Download Alertas ').should('be.visible').click()
        cy.contains('header', 'Download Alertas').should('be.visible')
        cy.get('select').select('XLSX').should('have.value', 'xlsx')
        cy.contains('.button.btn-confirm', 'Download').should('be.visible').click()
        cy.contains('.notification-success', 'Sucesso').should('be.visible')
        cy.contains('div > div.notification-message > p', 'Seu download foi realizado com sucesso!').should('be.visible')
    }
}

export default new NotFound404()