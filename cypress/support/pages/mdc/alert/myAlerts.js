/// <reference types="cypress-xpath" />

class MyAlerts {

    selectTabAlerts(){

        cy.xpath('/html/body/app-root/eds-primary-header[2]/header/div[2]/div/a[1]')
        .should('be.visible')
        .click()
    }
}

export default new MyAlerts()