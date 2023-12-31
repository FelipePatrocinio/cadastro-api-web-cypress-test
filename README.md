# cadastro-api-web-cypress-test

# Introdução

Estas instruções lhe darão uma cópia do projeto utilizando framework cypress para o funcionamento em sua máquina local para fins de desenvolvimento e teste.

# Linguagens e frameworks utilizados

O projeto utiliza o framework Cypress de automação de testes e linguagem de programação JavaScript.
<p>&nbsp;</p>

## Pré-requisitos

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)(versão ^8)
- [Npm](https://docs.npmjs.com/cli/init/)
- [Java](https://www.java.com/pt_BR/download/)(versão ^8)
- [git](https://git-scm.com/downloads/)

<p>&nbsp;</p>

# Estrutura do Projeto

| Diretório                    	| Finalidade dos arquivos 	                                                                                | 
|------------------------------	|---------------------------------------------------------------------------------------------------------- |
| \cypress\fixtures   			| Configuração, dados de envio, retorno e resultado esperado utilizados nos testes                          |
| \cypress\integration    		| Cenários de testes automatizados                                                     						|
| \cypress\plugins    			| Relacionados com plugins instalados                                               	            		|
| \cypress\reports              | Relacionados com os reports gerados ao rodar os testes via linha de comando                      			|
| \cypress\support    			| Comandos customizados e de configurações globais                   	                    				|

<p>&nbsp;</p>

> Para verificar a versão do Node.js instalada em seu computador, execute o comando `node -v`, você dever ver algo como `v12.16.1`. Caso não tenha o Node.js instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.
> Para verificar a versão do gerenciador npm instalada em seu computador, execute o comando `npm -v`, você dever ver algo como `6.13.4`. Caso não tenha o npm instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.
> Para verificar a versão do Java instalada em seu computador, execute o comando `java -version`, você dever ver algo como `java version "1.8.0_241"`. Caso não tenha o java instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.
> Para verificar a versão do git instalada em seu computador, execute o comando `git --version`, você dever ver algo como `git version 2.24.1.windows.2`. Caso não tenha o git instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.

# Variaveis de ambientes

> Caso não tenha visualizado nenhuma das versões acima, deve verificar as variaveis de ambientes das respectivas versões acima.

Windows 10
> Em Pesquisar, procure e selecione: Sistema (Painel de Controle)
> Clique no link Configurações avançadas do sistema.
> Clique em Variáveis de Ambiente. Na seção Variáveis do Sistema localize a variável de ambiente PATH e selecione-a. Clique em Editar. Se a variável de ambiente PATH não existir, clique em Novo.
> Na janela Editar Variável de Sistema (ou Nova Variável de Sistema), especifique o valor da variável de ambiente PATH. Clique em OK. Feche todas as janelas restantes clicando em OK.
> Reabra a janela Prompt de comando e execute os comandos acima listados.

# Instalação sem PROXY

1. Clone o projeto para sua máquina, caso não tenha conhecimento ou esteja familiarizado com os comandos git acesse ("https://blog.geekhunter.com.br/comandos-git-mais-utilizados/") ou faça o download do projeto e abra com o Vscode.
2. Para propósitos de desenvolvimento, utilize a branch develop.
```
$ cd [pasta clonada]
$ git checkout develop
```
3. Execute o seguinte comando `npm i` no console (cmd) ou no próprio terminal do VSCode para instalar as dependências do projeto e de desenvolvimento.

# Instalando a biblioteca Cypress

Iniciar o VS Code:

(comando para abrir o VS Code)

> code .     

No menu “Terminal” clicar em “New Terminal”:

Rodar o comando abaixo para instalar a biblioteca Cypress da versão utilizada no projeto:

```
npm install cypress@12.11
```

Será iniciada a instalação da biblioteca Cypress:

# Executando os testes

Alguns commandos foram configurados no arquivo package.json, basta rodar:
```
npm run <comando>
```
Exemplo:
```
npm run test:uat
Irá rodar os testes no ambiente de UAT, usando o Chrome e sem abrir o browser.

1.  Para executar os testes através do terminal, execute o comando `npm run test` no console (cmd) ou no próprio terminal VSCode para iniciar o painel do cypress.
2.  Para executar os testes no navegador, execute o comando `npx cypress open` no console (cmd) ou no terminal VSCode.
3.  Para executar os testes por meio de um script salvo em package.json, execute o comando `npm run test` no console (cmd) ou no terminal VSCode.

# Referências

https://www.cypress.io/
https://www.npmjs.com/
https://git-scm.com/

