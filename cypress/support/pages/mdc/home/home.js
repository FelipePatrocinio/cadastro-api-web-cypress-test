/// <reference types="cypress-xpath" />

class Home {

    headerLogo(){

        cy.xpath('/html/body/app-root/eds-primary-header[1]/header/div[1]/span[1]/a/img')
        .should('be.visible')
    }

    headerTitle(){
        
        cy.xpath('/html/body/app-root/eds-primary-header[1]/header/div[1]/span[2]')
        .should('have.text', 'Monitoramento de Clientes')
    }

    footerNameAndVersion(){

        cy.xpath('/html/body/app-root/eds-footer-custom/div/div/div[1]/p[2]')
        .should('be.visible')
    }

    footerLinkTermsOfUse(){

        cy.xpath('//*[@id="footer"]/div/div/div[2]/a[1]')
        .should('be.visible')
    }

    footerLinkFAQ(){

        cy.xpath('//*[@id="footer"]/div/div/div[2]/a[2]')
        .should('be.visible')
    }
}

export default new Home()