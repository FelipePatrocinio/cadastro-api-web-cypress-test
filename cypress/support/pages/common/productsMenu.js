/// <reference types="cypress-xpath" />

class ProductsMenu {

    selectMonitoringClients(){
    
        cy.xpath('//*[contains(text(),"Monitoramento de Clientes - STG")]/following-sibling::div/child::button[contains(text(),"Acessar")]')
        .should('be.visible')
        .click()
    }
}

export default new ProductsMenu()