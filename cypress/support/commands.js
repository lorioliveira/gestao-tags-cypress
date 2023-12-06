// ***********************************************
//GUI Login
Cypress.Commands.add('guiLogin', (
  username = Cypress.env('USER_EMAIL'),
  password = Cypress.env('USER_PASSWORD')
) => {
  cy.visit('/entrar')
  // aceitar as preferencias de cookies que aparece na tela de login (rodapé)
  cy.get('#onetrust-accept-btn-handler').click()
  // input email
  cy.get(':nth-child(2) > .MuiInputBase-root > [data-testid="input-input"]').type(username, { log: false })
  // input senha
  cy.get('.gap-e-3 > [data-testid="input"] > .MuiInputBase-root > [data-testid="input-input"]').type(password, { log: false })
  // clicar no botão Continuar
  cy.get('[data-testid="login-form-continue-button"]').click()




  cy.contains('[data-testid="title"]', 'Início').should('be.visible')
  cy.contains('p.text-text-decorative-one', 'Informações consolidadas').should('be.visible')
})
// ***********************************************
// Cria a sessão de login
Cypress.Commands.add('sessionLogin', (
  username = Cypress.env('USER_EMAIL'),
  password = Cypress.env('USER_PASSWORD')
) => {
  const login = () => cy.guiLogin(username, password)
  cy.session(username, login)
})
// ***********************************************
// Aceitar termos de uso

// ***********************************************
// Fazer logout
Cypress.Commands.add('logout', () =>  {
  // clica no nome para aparecer o menu
  cy.visit('/inicio')
  // Seleciona o menu onde exibe o primeiro nome
  cy.get('#onetrust-accept-btn-handler').click()
  cy.get(':nth-child(3) > .transition-all').click()
  // Seleciona opção 'Sair'
  cy.get('[data-testid="menu Sair"]').click()

})
// ***********************************************
// Navegar no extrato para exibir "Nenhum resultado encontrado"
Cypress.Commands.add('extratoFilter', () => {
  cy.visit('/inicio')
  // aceitar as preferencias de cookies que aparece na tela de login (rodapé)
  cy.get('#onetrust-accept-btn-handler').click()
  // clica na opção Extrato da navbar
  cy.get('[data-testid="navbar Extrato"] > div > .cursor-pointer').click()
  // clicar no botão Filtro
  cy.get('[data-testid="extract-filters-button"]').click()
  // escolher a opção 'Estacionamento'
  cy.get('[data-testid="ESTACIONAMENTO"]').click()
  // Selecionar período por semana (7 dias)
  cy.get('.MuiFormGroup-root > :nth-child(1)').click()
  // clicar no botão Filtrar
  cy.get('[data-testid="filter-button"]').click()

})
// ***********************************************
// Navegar para tela de Minhas Tags
Cypress.Commands.add('acessMinhasTags', () => {
  cy.visit('/inicio')
  // aceitar as preferencias de cookies que aparece na tela de login (rodapé)
  cy.get('#onetrust-accept-btn-handler').click()
  // clicar no menu Minhas Tags
  cy.get('[data-testid="navbar Minhas Tags"] > [data-testid="popover"] > [data-testid="popover-btn"] > .flex > .text-bg-light-default').click()
  // selecionar opção Tags Ativas e Canceladas
  cy.get('[data-testid="route Tags Ativas e Canceladas"] > div > .cursor-pointer').click()
})


