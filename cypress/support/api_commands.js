import headers from '../fixtures/api/IAM/STG.json';
import headersQA from '../fixtures/api/IAM/UAT-2.json';
import headersAdmin from '../fixtures/api/IAM/ADMIN.json';
import headersClient from '../fixtures/api/IAM/owner.client.json';
import headersUserTest from '../fixtures/api/IAM/owner.client.test.json';

const urlStg = "https://www.exemploURL.co,;br/secitoru/login"
const urlQa = "https://www.exemploURL.co,;br/secitoru/login"
const urlUat = "https://www.exemploURL.co,;br/secitoru/login"
const urlAdmin = "https://www.exemploURL.co,;br/secitoru/login"
const urlMenu = "https://www.exemploURL.co,;br/secitoru/login"
const urlMe01 = "https://www.exemploURL.co,;br/secitoru/login"

let requestHeaders = {
    "stg" : {
        headers: headers,
        url: urlStg
    },
    "qa" : {
        headers: headersQA,
        url: urlQa
    },
    "cadastro": {
        headers: headersOffering,
        url: urlStg
    },
    "admin" : {
        headers: headersAdmin,
        url: urlMenu
    },
    "menu" : {
        "user2": {
            headers: headersUserTest,
            url: urlUat
        },
        "user": {
            headers: headersClient,
            url: urlUat
        }  
    },

}

// GET token
Cypress.Commands.add('token', (login) => {

    let authObject = requestHeaders[login]

    cy.api(
        { method: 'POST', 
            url: authObject.url,
            headers : authObject.headers,
            failOnStatusCode: false
            
    }).then((resp) => {

        expect(resp).to.have.property('status', 201)
        
        cy.writeFile(`cypress/fixtures/token-${login}.json`, { 
            "content-type": "application/json",
            "authorization": `${resp.body['tokenType']} ${resp.body['accessToken']}`
        })
    })  
})

Cypress.Commands.add('createDocumentFile', (baseId, filePath) => {

    cy.writeFile(filePath, 
        [
            {
               "type": "CNPJ",
               "token": "1f979acf67149",
                "crypto": "U-a-n5bSCgDHTq3y1OK7ohVJmo",
               "subscription": [
                  {
                     "baseId": baseId
                  }
               ]
            }
        ]
    );
    
})


// GET token
Cypress.Commands.add('token', (login) => {

    const loginProperties = requestHeaders.admin[login];

    cy.api(
        { method: 'POST', 
            url: urlAdmin,
            headers : headersAdmin,
            body: deviceIdAndDevicetokenId
            
    }).then((resp) => {

        expect(resp).to.have.property('status', 201)                       
        
        cy.writeFile(`cypress/fixtures/token-${login}.json`, { 
            "content-type": "application/json",
            "authorization": `${resp.body['tokenType']} ${resp.body['accessToken']}`
        })
    })  
})


// comparar dados de retorno
Cypress.Commands.add('comparaRet', (atual, esperado) => { 
    cy.log(`Retorno API: ${JSON.stringify(atual)}`)   

    expect(atual).to.deep.equal(esperado)                 
})   

// realiza request
Cypress.Commands.add('req', (method, url, token, body)  => {
    cy.api(
        { method: method, 
            url: url,
            failOnStatusCode: false,
            headers: token,
            body: body
            
    }).then((resp) => {           
        const statusCod     = resp.status
        const statusDesc    = resp.statusText
        const retBody       = resp.body        

        const respReq = {
                            statusCod: statusCod,
                            statusDesc: statusDesc,
                            retBody: retBody                            
                        }

        return respReq    
    }) 
})  

// realiza request getId
Cypress.Commands.add('reqId', (url, token, body)  => {
    cy.api(
        { method: 'POST', 
            url: url,
            failOnStatusCode: false,
            headers: token,
            body: body
            
    }).then((resp) => {           
        const statusCod     = resp.status
        const statusDesc    = resp.statusText
        const retBody       = resp.body        

        const respReq = {
                            statusCod: statusCod,
                            statusDesc: statusDesc,
                            retBody: retBody                            
                        }

        return respReq
    }) 
})

// realiza request deleteQueryParamsBase64
Cypress.Commands.add('reqDeleteDataServices', (url, token, body)  => {
    cy.api(
        { method: 'DELETE', 
            url: url,
            failOnStatusCode: false,
            headers: token,
            body: body
            
    }).then((resp) => {           
        const statusCod     = resp.status
        const statusDesc    = resp.statusText
        const retBody       = resp.body        

        const respReq = {
                            statusCod: statusCod,
                            statusDesc: statusDesc,
                            retBody: retBody                            
                        }

        return respReq
    }) 
}) 

// realiza request POST
Cypress.Commands.add('reqDataServices', (url, token, body)  => {
    cy.api(
        { method: 'POST', 
            url: url,
            failOnStatusCode: false,
            headers: token,
            body: body
            
    }).then((resp) => {           
        const statusCod     = resp.status
        const statusDesc    = resp.statusText
        const retBody       = resp.body        

        const respReq = {
                            statusCod: statusCod,
                            statusDesc: statusDesc,
                            retBody: retBody                            
                        }

        return respReq
    }) 
})

Cypress.Commands.add('validateSchema', validateSchema)

Cypress.Commands.add('delete', (url, header, documentNumber) => {
    cy.log("Limpando dados da ME01");
    let documentDelete = {
        "documento": "656556",
        "Type": "exclusão",   
        "documentoCliente": documentNumber,
        "Tipo": "COMPANY",
        "renovação": "false"
    };
    cy.req('POST', url, header, documentDel);
});