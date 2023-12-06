# Testes e2e - Portal de Gestão de Tags 🚗

# Introdução
> A implementação de testes end-to-end no Portal Gestão de Tags marca um passo crucial na garantia da qualidade e robustez desse sistema abrangente. Esse portal, responsável pelo gerenciamento de tags, veículos, extratos, faturas e recargas para estacionamento, pedágios e áreas afins, está passando por uma etapa crucial de aprimoramento por meio dos testes abrangentes de ponta a ponta.

> O início dos testes end-to-end representa um marco significativo no desenvolvimento do Portal Gestão de Tags, permitindo uma avaliação abrangente de todas as suas funcionalidades e integrações. Os testes end-to-end abrangem desde a interação do usuário com a interface até a verificação minuciosa dos processos que ocorrem nos bastidores do sistema. Essa abordagem holística visa não apenas garantir a integridade, confiabilidade e usabilidade do sistema em sua totalidade, mas também assegurar uma análise completa de cada etapa do fluxo de trabalho.

> Essa iniciativa não apenas visa identificar e corrigir possíveis falhas ou pontos de melhoria, mas também assegura uma experiência consistente e livre de problemas para os usuários finais. Com os testes end-to-end, busca-se elevar o nível de excelência do portal, oferecendo uma plataforma sólida e confiável para o gerenciamento de diferentes aspectos relacionados a tags, veículos e transações.

> O foco está em garantir não apenas a estabilidade e funcionalidade, mas também a fluidez e a precisão em todas as operações realizadas no Portal Gestão de Tags. Essa introdução aos testes end-to-end sinaliza o compromisso em proporcionar uma plataforma confiável e de alta qualidade para os usuários, reforçando a eficiência e a eficácia de todo o sistema.

## Descrição
Este repositório contém os testes E2E automatizados para o Portal de Gestão de Tags. Esses testes são realizados para garantir o correto funcionamento e integração das funcionalidades oferecidas pelo portal, verificando o fluxo completo de ponta a ponta.

## Estrutura de diretórios e arquivos do projeto
O projeto de testes E2E está estruturado da seguinte forma:

- **/cypress**
  - **/downloads**: Diretório que pode ser utilizado para armazenar arquivos baixados durante a execução dos testes.
  - **/e2e**:  Contém os arquivos de suítes de teste escritos usando um framework de teste, como Cypress.
  -  **/fixtures**: Contém o arquivo JSON **/example.json** com exemplos de código que demonstram a sintaxe, a estrutura ou a utilização de determinadas funções ou métodos.
  - **/screenshots**: Diretório com capturas de tela que são automaticamente salvas após a execução de testes para referência visual em caso de falhas.
  - **/support**: Aqui você pode colocar arquivos de suporte, como comandos personalizados, utilitários ou configurações que são utilizadas em seus testes
    - **commands.js**: Contém os comandos/funções personalizados utilizando o método `Cypress.Commands.add` para criar novos comandos que encapsulam sequências de ações frequentemente utilizadas.
    - **e2e.js**: Arquivo que é usado para executar testes end-to-end (E2E) em uma aplicação usando o Cypress. Pode incluir navegação entre páginas, interação com elementos da interface, preenchimento de formulários, cliques em botões, verificação de URLs, entre outras ações.
  - **/videos**: Diretório onde armazena os vídeos das execuções dos testes.

 - **/node_modules**: Diretório onde contém as dependências do Cypress que são instaladas quando você executa `npm install` ou `yarn install`.

- **cypress.env.example.json**: Arquivo de exemplo que fornece um esqueleto ou modelo das variáveis de ambiente necessárias para executar testes no Cypress. Ele contém apenas identificadores, não valores reais, oferecendo um guia claro sobre as variáveis necessárias sem expor informações sensíveis.

- **cypress.env.json**: Arquivo utilizado para definir e armazenar as variáveis de ambiente reais para o projeto. Ele deve ser adicionado ao `.gitignore` ou configurado de forma apropriada para não ser incluído em commits, mantendo as configurações seguras. 

- **package.json**: Arquivo que contém as informações sobre o projeto e suas dependências. Aqui você define scripts para executar os testes Cypress, entre outras configurações.

- **cypress.config.js**: Arquivo crucial de configuração fundamental no Cypress. Ele permite que você defina e personalize várias configurações para os  testes, tanto a nível global quanto para casos específicos de teste.



## Pré-requisitos
- Node.js e npm instalados
- [Cypress](https://www.cypress.io/) (ou outra ferramenta de teste) configurado no ambiente de desenvolvimento. - No caso é utilizado Cypress
- Baixar [ESLint](http://npmjs.com/package/eslint) para análise estática de código.

## Executando os Testes
1. Para instalar Cypress: 
   - Usando npm: `npm install cypress --save-dev `
   - Usando yarn: `yarn add cypress --dev`

2. Instale os plugins utilizados: 
    - ESLint: `npm install eslint@8.43.0 --save-dev`

3. Para executar os testes:
    - No modo headless (sem interface gráfica): `npx cypress run`
    - No modo Cypress App (com interface gráfica): `npx cypress open`

> Comando completo no modo headless: `npx cypress run cypress/e2e/crud.cy.js`

> Comando completo no modo cypress app: `npx cypress open cypress/e2e/crud.cy.js`


## Notas Adicionais
- Certifique-se de que o ambiente de teste esteja configurado corretamente antes de executar os testes.
- Os testes devem ser executados em ambientes de homologação ou antes de serem executados em produção.
- Sempre atualize os testes conforme novas funcionalidades são adicionadas ao Portal de Gestão de Tags.
