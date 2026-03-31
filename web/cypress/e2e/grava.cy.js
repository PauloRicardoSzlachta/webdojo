describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

it('Carlos', function() {
  cy.visit('www.google.com')
  // Page URL changed.
  cy.url()
    .should('eq', 'https://www.google.com/?gws_rd=ssl')
  // Page title changed. The page title is 'Google'
  cy.title()
    .should('eq', 'Google')
  // The search input field is visible and has the title 'Pesquisar'.
  cy.get('[name="q"]')
    .should('have.value', '')
  // The 'Pesquisa Google' button is visible.
  cy.get('input[data-ved="0ahUKEwjezsO8u8iTAxW2jpUCHerjErMQ4dUDCBc"]')
    .should('have.value', 'Pesquisa Google')
  // The 'Estou com sorte' button is visible.
  cy.get('input[data-ved="0ahUKEwjezsO8u8iTAxW2jpUCHerjErMQ19QECBg"]')
    .should('have.value', 'Estou com sorte')
  
  
  cy.get('[name="q"]').click();
  // The search input field is now expanded.
  cy.get('[name="q"]')
    .should(($el) => {
      expect($el).to.have.attr('aria-expanded', 'true')
      expect($el).to.have.attr('style', '')
    })
  // The search suggestions container is now visible.
  cy.get('div.EyBRub')
    .should(($el) => {
      expect($el).to.be.visible
      expect($el).to.have.attr('style', '')
    })
  // The search suggestions list is now visible.
  cy.get('#Alh6id')
    .should('be.visible')
  // The 'Pesquisas em alta' heading is now visible.
  cy.get('#Alh6id div.ynRric')
    .should(($el) => {
      expect($el).to.be.visible
      expect($el).to.contain.text('Pesquisas em alta')
    })
  // The list of trending search suggestions is now visible.
  cy.get('#Alh6id ul.G43f7e > li')
    .should('have.length', 10)
  // The list of trending search suggestions is now visible.
  cy.get('#Alh6id ul.G43f7e')
    .should('be.visible')
  // The 'Pesquisa Google' button is now visible.
  cy.get('input[data-ved="0ahUKEwjezsO8u8iTAxW2jpUCHerjErMQ4dUDCBQ"]')
    .should('be.visible')
  // The 'Estou com sorte' button is now visible.
  cy.get('input[data-ved="0ahUKEwjezsO8u8iTAxW2jpUCHerjErMQ19QECBU"]')
    .should('be.visible')
  
  cy.get('#Zrbbw span.dKU7sc').click();
});