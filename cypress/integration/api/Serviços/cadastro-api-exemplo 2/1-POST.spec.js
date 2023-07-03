/// <reference types="cypress" />
                 
//Body positivo - 201 Created - POST
import send_campoNome_201_Positive          from '../../../../../fixtures/api/cadastro/send/POST/positive/send_campoNome_201_positive.json';
import send_campoNome_201_Positive_2        from '../../../../../fixtures/api/cadastro/send/POST/positive/send_campoNome_201_positive_2.json';
import send_campoNome_201_Positive_3        from '../../../../../fixtures/api/cadastro/send/POST/positive/send_campoNome_201_positive_3.json';

import return_campoNome_201_positive        from '../../../../../fixtures/api/cadastro/return/POST/positive/return_campoNome_201_Sucefull.json';
import return_campoNome_201_positive_2      from '../../../../../fixtures/api/cadastro/return/POST/positive/return_campoNome_201_Sucefull_2.json';
import return_campoNome_201_positive_3      from '../../../../../fixtures/api/cadastro/return/POST/positive/return_campoNome_201_Sucefull_3.json';

//Body negativo - 400 Bad request - POST
import send_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/send/POST/negative/send_campoNome_400_Negative.json';                        
import send_campoNome_400_Negative_2    from '../../../../../fixtures/api/cadastro/send/POST/negative/send_campoNome_400_Negative_2.json';                         
import send_campoNome_400_Negative_3    from '../../../../../fixtures/api/cadastro/send/POST/negative/send_campoNome_400_Negative_3.json';              

import return_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/return/POST/negative/return_campoNome_400_Negative.json';                        
import return_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/return/POST/negative/return_campoNome_400_Negative.json';                        
import return_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/return/POST/negative/return_campoNome_400_Negative.json';   


let token;
let bodyAPI = {};

const urlCadastroApi = 'https://urlCadastroApi-dev.br'

before(() => {
    cy.token('stgAMDE');
    cy.fixture('token-stgAMDE').then(arr => token = arr);
});


describe('send subscription - scenario positive - StatusCode 201 - Successful operation', () => {
    ;[        
        { scenario: `[POST] Send inclusion document registered sucefull`,           sendingdata: send_DocCadastradoNoProRede,   retEsperado: return_DocCadastradoNoProRede}, 
        { scenario: `[POST] Send inclusion three document registered sucefull`,     sendingdata: send_3DocCadastradoNoProRede,  retEsperado: return_3DocCadastradoNoProRede}, 

    ].forEach(data => {
        it(`scenario - ${data.scenario}`, function() {
            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);
            
            cy.req(POST, url, token, bodyAPI).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(201);
                expect(data.retEsperado).to.deep.equal(respReq.retBody) 
            });
        });
    });
});

describe('send subscription - Scenario negative / Validation field - StatusCode 400 - Bad Request', () => { 
    ;[
        { scenario: '[POST] Send inclusion document nonexistent',       sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send inclusion document no registred',      sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send inclusion three document no registred',sendingdata: send_campoNome_400_Negative},
        { scenario: `[POST] Send Body with more 1000 subscription`,     sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "Nome" (Null)',                  sendingdata: send_campoNome_400_Negative}, 
        { scenario: '[POST] Send field "Nome" (Empty)',                 sendingdata: send_campoNome_400_Negative},      
        { scenario: '[POST] Send field "Nome" (whitespace)',            sendingdata: send_campoNome_400_Negative}, 
        { scenario: '[POST] Send without field "Nome"',                 sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "Nome" (True)',                  sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "Nome" (False)',                 sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "Nome" (Int number)',            sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "Nome" (Real number)',           sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "Email" (True)',                 sendingdata: send_campoNome_400_Negative}, 
        { scenario: '[POST] Send field "Email" (False)',                sendingdata: send_campoNome_400_Negative},      
        { scenario: '[POST] Send field "Email" (Invalid Enuns)',        sendingdata: send_campoNome_400_Negative}, 
        { scenario: '[POST] Send field "Email" (Int number)',           sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "Email" (Real number)',          sendingdata: send_campoNome_400_Negative},    
        { scenario: '[POST] Send field "Email" (whitespace)',           sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "Email" (Null)',                 sendingdata: send_campoNome_400_Negative},  
        { scenario: '[POST] Send without field "Email"',                sendingdata: send_campoNome_400_Negative}, 
        { scenario: '[POST] Send field "Email" (Field empty)',          sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "Email" (Special characteres)',  sendingdata: send_campoNome_400_Negative}, 
        { scenario: '[POST] Send field "Email" (Field with lyrics)',    sendingdata: send_campoNome_400_Negative}, 
        { scenario: '[POST] Send field "CPF" (Int number)',             sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "CPF" (Real number)',            sendingdata: send_campoNome_400_Negative},    
        { scenario: '[POST] Send field "CPF" (whitespace)',             sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "CPF" (Null)',                   sendingdata: send_campoNome_400_Negative},  
        { scenario: '[POST] Send without field "CPF"',                  sendingdata: send_campoNome_400_Negative}, 
        { scenario: '[POST] Send field "CPF" (Field empty)',            sendingdata: send_campoNome_400_Negative},
        { scenario: '[POST] Send field "CPF" (Special characteres)',    sendingdata: send_campoNome_400_Negative}, 
        { scenario: '[POST] Send field "CPF" (Field with lyrics)',      sendingdata: send_campoNome_400_Negative}, 

    ].forEach(data => {

        it(`scenario - ${data.scenario}`, function() {

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);

            cy.req(POST, url, token, bodyAPI).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(400);
            })
        })   
    })  
});

describe('send subscription - Scenarios negatives - StatusCode 401', () => { 
    ;[        
        { scenario: '[POST] Send request with token inválid',   useAuthentication: false,   url: url,           sendingdata: send_campoNome_401_Negative},
        { scenario: '[POST] Send request with url inválid',     useAuthentication: true,    url: urlInvalid,    sendingdata: send_campoNome_401_Negative},
       
    ].forEach(data => {

        it(`scenario - ${data.scenario}`, function() {
            const requestToken = data.useAuthentication ? token : undefined;
            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);

            cy.req(POST, data.url, requestToken).then((respReq) => {      
                expect(respReq.statusCod).to.deep.equal(401);
            })
        })   
    })  
});

describe('send subscription - Scenario negative / Validation field - StatusCode 500 - Bad Request', () => { 
    ;[
        { scenario: '[POST] Send inclusion document with all invalid',                  sendingdata: send_campoNome_500_Negative,},
        { scenario: '[POST] Send inclusion document field "Document number" null',      sendingdata: send_campoNome_500_Negative,},
        { scenario: '[POST] Send inclusion document without field "Document Number"',   sendingdata: send_campoNome_500_Negative, },

    ].forEach(data => {

        it(`scenario - ${data.scenario}`, function() {

            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);

            cy.req(POST, url, token, bodyAPI).then((respReq) => {
                expect(respReq.statusCod).to.deep.equal(500);
            })
        })   
    })  
});

