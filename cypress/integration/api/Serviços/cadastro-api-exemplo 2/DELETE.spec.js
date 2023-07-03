/// <reference types="cypress" />

//Body positivo - 204 - DELETE
import send_campoNome_204_Positive          from '../../../../../fixtures/api/cadastro/send/DELETE/positive/send_campoNome_204_positive.json';
import send_campoNome_204_Positive_2        from '../../../../../fixtures/api/cadastro/send/DELETE/positive/send_campoNome_204_positive_2.json';
import send_campoNome_204_Positive_3        from '../../../../../fixtures/api/cadastro/send/DELETE/positive/send_campoNome_204_positive_3.json';

import return_campoNome_204_positive        from '../../../../../fixtures/api/cadastro/return/DELETE/positive/return_campoNome_204_Sucefull.json';
import return_campoNome_204_positive_2      from '../../../../../fixtures/api/cadastro/return/DELETE/positive/return_campoNome_204_Sucefull_2.json';
import return_campoNome_204_positive_3      from '../../../../../fixtures/api/cadastro/return/DELETE/positive/return_campoNome_204_Sucefull_3.json';

//Body negativo - 400 Bad request - DELETE
import send_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/send/DELETE/negative/send_campoNome_400_Negative.json';                        
import send_campoNome_400_Negative_2    from '../../../../../fixtures/api/cadastro/send/DELETE/negative/send_campoNome_400_Negative_2.json';                         
import send_campoNome_400_Negative_3    from '../../../../../fixtures/api/cadastro/send/DELETE/negative/send_campoNome_400_Negative_3.json';              

import return_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/return/DELETE/negative/return_campoNome_400_Negative.json';                        
import return_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/return/DELETE/negative/return_campoNome_400_Negative.json';                        
import return_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/return/DELETE/negative/return_campoNome_400_Negative.json'; 


let token;
let bodyAPI = {};

const urlDel = "https://urlCadastroApi-dev.br/exclude"

//GET token
before(() => {

    cy.token('stg');
    cy.fixture('token').then(arr => token = arr);
 
});


describe('Deleting subscription - Scenarios negatives - StatusCode 400 - Bad Request', () => {
    ;[

        { scenario: '[DELETE] Send request with document nonexistent',  sendingdata: send_campoNome_400_Negative},               
        { scenario: '[DELETE] Send request with (special characteres)', sendingdata: send_campoNome_400_Negative},    
        { scenario: '[DELETE] Send request with field (empty)',         sendingdata: send_campoNome_400_Negative},
        { scenario: '[DELETE] Send request with field (True)',          sendingdata: send_campoNome_400_Negative},
        { scenario: '[DELETE] Send request with field (False)',         sendingdata: send_campoNome_400_Negative},
        { scenario: '[DELETE] Send request with (Body empty)',          sendingdata: send_campoNome_400_Negative},


    ].forEach(data => {

        it(`scenario - ${data.scenario}`, function() {

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);
     
            cy.req(POST, urlDel, token, bodyAPI).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(400);        
                });
            });
    })  
});

describe('Deleting subscription - Scenarios negatives - StatusCode 500', () => {
    ;[

        { scenario: '[DELETE] Send request with field (Null)',  sendingdata: send_campoNome_400_Negative},


    ].forEach(data => {

        it(`scenario - ${data.scenario}`, function() {

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);
     
            cy.req(POST, urlDel, token, bodyAPI).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(500);        
                });
            });
    })  
});

describe('send subscription to DEL - scenario positive - StatusCode 201 - Successful operation', () => {
    ;[        
        { scenario: `[POST] Creating a new document to test of exclusion`,  sendingdata: send_campoNome_201_Negative}, 

    ].forEach(data => {

        it(`scenario - ${data.scenario}`, function() {

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);
     
            cy.req(POST, url, tokenMenuProdutos, bodyAPI).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(201);        
                });
            });
        }); 
});

describe('Deleting subscription - Scenario positive', () => { 
    ;[
       
      { scenario: '[DELETE] Send a request with document no registred and registred to exclusion',  sendingdata: send_campoNome_400_Negative},
      { scenario: '[DELETE] Send a request with all document registred to exclusion',               sendingdata: send_campoNome_400_Negative},
      { scenario: '[DELETE] Send a request with one document registred to exclusion',               sendingdata: send_campoNome_400_Negative},

    ].forEach(data => {
        it(`scenario - ${data.scenario}`, function() {

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);
     
            cy.req(POST, urlDel, token, bodyAPI).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(200);        
                });
            });
    })  
});

describe('Clean subscriptions to test', () => {
    ;[        
        { scenario: `Deleting Owner`},  

    ].forEach(data => {

        it(`scenario - ${data.scenario}`, function() {

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);
     
            cy.req(DELETE, urlDataWithQuery, token).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(204);        
                });
            });
        }); 
});