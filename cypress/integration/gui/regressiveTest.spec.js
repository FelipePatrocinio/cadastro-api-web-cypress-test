/// <reference types="Cypress-xpath" />

import base from '../../support/pages/mdc/base/base.js';
import home from '../../support/pages/mdc/home/home.js';
import menu from '../../support/pages/common/productsMenu.js';
import notFound from '../../support/pages/mdc/notFound404/notFound404.js';
import monitoring from '../../support/pages/mdc/monitoring/monitoring.js';
import download from '../../support/pages/mdc/alert/download.js';

describe('Regressive Test', () => {
    
    beforeEach( () => {
        cy.loginWithToken('admin')
    })

    it('Validate Home Page', () => {
        // Problema durante o acesso ao produto, acontece um loop.
         //menu.selectMonitoringClients()
        home.headerLogo()
        home.headerTitle()
        home.footerNameAndVersion()
        home.footerLinkTermsOfUse()
    })

    it('Validate Not Found Page 404', () => {
        notFound.alert()
        notFound.monitoring()
        notFound.bases()
    })

    it('Validate bases', () => {
        base.viewGridTitle()
        //base.new()
    })

    it('Validate download alerts', () => {
        download.button()
        download.popUp()
        download.fileCSV()
        download.fileXLSX()
    })

    it.only('Validate Monitoring', () => {
        cy.visit('/regras')
        cy.wait(2000)
        // monitoring.newAttributeNegative()
        // monitoring.newAttributeNotary()
        // // Por algum motivo não aparece os critérios
        // //monitoring.newAttributeSpcNegative()
        // monitoring.dashboard()
        // monitoring.attributeNegativeMSG410()
        // monitoring.edit()
        // monitoring.inactive()
        // monitoring.search()
        // monitoring.delete()
    })

    // after( () => {
    //     cy.delete('admin', 'monitoring')
    //     cy.delete('admin', 'base')
    // })
})