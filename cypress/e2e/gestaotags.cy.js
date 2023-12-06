

// Login
describe('Login', () => {
  it('Login com usuário inserido', () => {
    cy.sessionLogin()
  })
})
// **************************************************

// Extrato
describe('Extrato', () => {
  it('Acesso ao filtro do Extrato', () => {
    cy.sessionLogin()
    cy.extratoFilter()

    cy.contains('.h-80 > .flex > .font-bold', 'Nenhum resultado encontrado').should('be.visible')
  })
})
// **************************************************

// Listagem de Minhas Tags
describe('Minhas Tags', () => {
  it('Listagem de "Ativas e Canceladas"', () => {
    cy.sessionLogin()
    cy.acessMinhasTags()

    cy.contains('[data-testid="title"]', 'Ativas e canceladas').should('be.visible')
    cy.get('div [data-testid="data-table-row"]').should('be.visible')
  })
})
// **************************************************

// Logout
describe('Sair', () => {
  it('Logout', () => {
    cy.sessionLogin()
    cy.logout()

    cy.get('img.select-none').should('be.visible')
    cy.contains('div', 'Bem-vindo ao portal gestão de tags').should('be.visible')
  })
})