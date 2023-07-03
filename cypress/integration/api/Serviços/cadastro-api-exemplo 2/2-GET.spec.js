/// <reference types="cypress" />

//Body positivo - 200 OK - GET
import send_campoNome_200_Positive          from '../../../../../fixtures/api/cadastro/send/GET/positive/send_campoNome_200_positive.json';
import send_campoNome_200_Positive_2        from '../../../../../fixtures/api/cadastro/send/GET/positive/send_campoNome_200_positive_2.json';
import send_campoNome_200_Positive_3        from '../../../../../fixtures/api/cadastro/send/GET/positive/send_campoNome_200_positive_3.json';

import return_campoNome_201_positive        from '../../../../../fixtures/api/cadastro/return/GET/positive/return_campoNome_200_Sucefull.json';
import return_campoNome_201_positive_2      from '../../../../../fixtures/api/cadastro/return/GET/positive/return_campoNome_200_Sucefull_2.json';
import return_campoNome_201_positive_3      from '../../../../../fixtures/api/cadastro/return/GET/positive/return_campoNome_200_Sucefull_3.json';


//Body negativo - 400 Bad request - GET
import send_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/send/GET/negative/send_campoNome_400_Negative.json';                        
import send_campoNome_400_Negative_2    from '../../../../../fixtures/api/cadastro/send/GET/negative/send_campoNome_400_Negative_2.json';                         
import send_campoNome_400_Negative_3    from '../../../../../fixtures/api/cadastro/send/GET/negative/send_campoNome_400_Negative_3.json';              

import return_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/return/GET/negative/return_campoNome_400_Negative.json';                        
import return_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/return/GET/negative/return_campoNome_400_Negative.json';                        
import return_campoNome_400_Negative      from '../../../../../fixtures/api/cadastro/return/GET/negative/return_campoNome_400_Negative.json'; 

let token;
let bodyAPI = {};
const method = 'GET';

const urlGet = "https://urlCadastroApiget-dev.br"

before(() => {
    cy.token('stgAMDE');
    cy.fixture('token-stgAMDE').then(arr => token = arr);
});

describe('GET a list subscription - Scenario positive - StatusCode 200 OK', () => {

    ;[        
        { scenario: '[GET] Validate StatusCode 200 - Successful operation'},
        
    ].forEach(data => {

        it(`Scenario - ${data.scenario}`, function() {

            cy.req(GET, urlGet, token, bodyAPI).then((respReq) => {      
                expect(respReq.statusCod).to.deep.equal(200);
            });
        });
    });
});

describe('GET Subscription - Scenarios negatives - StatusCode 401 Unauthorized / 400 Not Found', () => { 
    ;[        
        { scenario: '[GET] Send request with token inválid',       useAuthentication: false,   url: url,                   sendingdata: send_campoNome_400_Negative,     expectedStatusCode: 401     },
        { scenario: '[GET] Send request with url inválid',         useAuthentication: true,    url: urlInvalid,            sendingdata: send_campoNome_400_Negative,     expectedStatusCode: 401     },
       
    ].forEach(data => {

        it(`scenario - ${data.scenario}`, function() {
            const requestToken = data.useAuthentication ? token : undefined;
            bodyAPI = data.sendingdata;
            const logbodyAPI = JSON.stringify(bodyAPI, undefined, 2);
            cy.log(`bodyAPI = ${logbodyAPI}`);

            cy.req(GET, data.url, requestToken).then((respReq) => {      
                expect(respReq.statusCod).to.deep.equal(401);
              

            })
        })   
    })  
});

