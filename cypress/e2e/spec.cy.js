describe('issue https://github.com/cypress-io/cypress/issues/25174 reproduction', () => {
  it('creates two cookies with an XHR request', () => {
    cy.visit('/')
    cy.get('#do-xhr-request').click()
    cy.contains('A cookie has been set').should('be.visible')

    // This is the strange thing! There should only be one cookie set
    cy.getAllCookies().then(cookies => cy.log("Cookie domains are:", cookies.map(c => c.domain)))
    cy.getAllCookies().should('have.length', 1)
  })

  it('creates two cookies with a fetch request', () => {
    cy.visit('/')
    cy.get('#do-fetch-request').click()
    cy.contains('A cookie has been set').should('be.visible')

    // This is the strange thing! There should only be one cookie set
    cy.getAllCookies().then(cookies => cy.log("Cookie domains are:", cookies.map(c => c.domain)))
    cy.getAllCookies().should('have.length', 1)
  })
})
