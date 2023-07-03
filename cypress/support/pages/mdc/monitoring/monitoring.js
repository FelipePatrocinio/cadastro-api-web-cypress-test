/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Monitoring {

    dashboard(){

        cy.visit('/regras')
        cy.get('.summary-card.left-card.border-green').should('be.visible')
        cy.url().should('include', '/regras')
    }

    newAttributeNegative(){

        cy.visit('/regras')
        cy.contains('button', 'Novo monitoramento').should('be.visible').click()
        cy.url().should('include', '/monitoramento')
        cy.contains('.attribute-title', ' Anotações Negativas').should('be.visible').click()
        cy.get('.div-selecionar-tudo:visible > label > input').check({ force: true})
        cy.contains('button', 'Continuar').should('be.visible').click()
        cy.get('div.row.new-monitoring-content > div > h2').should('have.text', 'Novo monitoramento')
        cy.contains('.base-name', ' Carteira 1 ').should('be.visible').click()
        cy.contains('button', 'Concluir').should('be.visible').click()
        cy.url().should('include', '/conclusao-criacao-regra')
        cy.get('.title-text-create-monitoring.font.medium').should('have.text', 'Novo monitoramento criado!')
        cy.contains('button', 'Ver monitoramento cadastrados').should('be.visible').click()
        cy.url().should('include', '/regras')
    }

    newAttributeSpcNegative(){

        cy.visit('/regras')
        cy.contains('button', 'Novo monitoramento').should('be.visible').click()
        cy.url().should('include', '/monitoramento')
        cy.contains('.attribute-title', ' Anotações Negativas no SPC').should('be.visible').click()
        cy.get('.div-selecionar-tudo:visible > label > input').check({ force: true})
        cy.contains('button', 'Continuar').should('be.visible').click()
        cy.get('div.row.new-monitoring-content > div > h2').should('have.text', 'Novo monitoramento')
        cy.contains('.base-name', ' Carteira 1 ').should('be.visible').click()
        cy.contains('button', 'Concluir').should('be.visible').click()
        cy.url().should('include', '/conclusao-criacao-regra')
        cy.get('.title-text-create-monitoring.font.medium').should('have.text', 'Novo monitoramento criado!')
        cy.contains('button', 'Ver monitoramento cadastrados').should('be.visible').click()
        cy.url().should('include', '/regras')
    }

    newAttributeNotary(){

        cy.visit('/regras')
        cy.contains('button', 'Novo monitoramento').should('be.visible').click()
        cy.url().should('include', '/monitoramento')
        cy.contains('.attribute-title', ' Protestos').should('be.visible').click()
        cy.get('.div-selecionar-tudo:visible > label > input').check({ force: true})
        cy.contains('button', 'Continuar').should('be.visible').click()
        cy.get('div.row.new-monitoring-content > div > h2').should('have.text', 'Novo monitoramento')
        cy.contains('.base-name', ' Carteira 1 ').should('be.visible').click()
        cy.contains('button', 'Concluir').should('be.visible').click()
        cy.url().should('include', '/conclusao-criacao-regra')
        cy.get('.title-text-create-monitoring.font.medium').should('have.text', 'Novo monitoramento criado!')
        cy.contains('button', 'Ver monitoramento cadastrados').should('be.visible').click()
        cy.url().should('include', '/regras')
    }

    attributeNegativeMSG410(){

        cy.visit('/regras')
        cy.contains('button', 'Novo monitoramento').should('be.visible').click()
        cy.url().should('include', '/monitoramento')
        cy.contains('.attribute-title', ' Anotações Negativas').should('be.visible').click()
        cy.get('.div-selecionar-tudo:visible > label > input').check({ force: true})
        cy.contains('button', 'Continuar').should('be.visible').click()
        cy.get('div.row.new-monitoring-content > div > h2').should('have.text', 'Novo monitoramento')
        cy.contains('.base-name', ' Carteira 1 ').should('be.visible').click()
        cy.contains('button', 'Concluir').should('be.visible').click()
        cy.get('header').should('include.text', 'Erro - MDC410')
        cy.contains('button', 'OK').should('be.visible').click()
        cy.url().should('include', '/regras')
    }

    edit(){

        cy.visit('/regras')
        cy.xpath('/html/body/app-root/div/div/div[2]/app-rules/div/div[3]/div/div[2]/div[3]/button').should('be.visible').click()
        cy.get('#edit-menu-item').click({ force: true })
        cy.contains('button', 'Continuar').should('be.visible').click()
        cy.contains('button', 'Concluir').should('be.visible').click()
        cy.get('div.container-text.col.xl5.l5.font > h4').should('include.text', 'Edição de monitoramento concluída!')
        cy.url().should('include', '/conclusao-edicao-regra')
    }

    inactive(){

        cy.visit('/regras')
        cy.xpath('/html/body/app-root/div/div/div[2]/app-rules/div/div[3]/div/div[2]/div[3]/button').should('be.visible').click()
        cy.get('#inactive-menu-item').click({ force: true })
        cy.contains('button', 'Inativar').should('be.visible').click()
        cy.get('.status').should('include.text', 'Status: Em processamento')
        cy.reload()
        cy.get('.status').should('include.text', 'Status: Inativo')
        cy.url().should('include', '/regras')
    }

    search(){

        cy.visit('/regras')
        cy.get('[class="search-input-field"]').type('Monitoramento: Carteira 2')
        cy.contains('button', 'Buscar').should('be.visible').click()
        cy.get('[class="row"]').should('include.text', '1 resultado(s) encontrado(s) para "Monitoramento: Carteira 2"')
    }

    delete(){

        cy.visit('/regras')
        cy.xpath('/html/body/app-root/div/div/div[2]/app-rules/div/div[3]/div/div[2]/div[3]/button').should('be.visible').click()
        cy.get('#delete-menu-item').click({ force: true })
        cy.contains('button', 'Excluir').should('be.visible').click()
        cy.url().should('include', '/regras')
        cy.get('[class="search-input-field"]').type('Monitoramento: Carteira 2')
        cy.contains('button', 'Buscar').should('be.visible').click()
        cy.get('[class="row"]').should('include.text', '0 resultado(s) encontrado(s) para "Monitoramento: Carteira 2"')
    }
}

export default new Monitoring()