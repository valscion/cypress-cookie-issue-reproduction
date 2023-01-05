describe('issue https://github.com/cypress-io/cypress/issues/25174 reproduction', () => {
  it('creates two cookies with an XHR request', () => {
    cy.visit('/')
    cy.get('#do-xhr-request').click()
    cy.contains('A cookie has been set').should('be.visible')

    cy.get('#client-cookies-json').invoke('text').should(text => {
      const parsedText = JSON.parse(text)
      // There should only be one cookie here
      expect(parsedText).to.have.length(1)
    });

    // Debug with cy.getAllCookies if that exists (Cypress v12.1.0+ only)
    if (cy.getAllCookies) {
      cy.getAllCookies().then(cookies => cy.log("Cookie domains are:", cookies.map(c => c.domain)))
    }

    cy.get('#client-cookies-json-timeout').invoke('text').should(text => {
      const parsedText = JSON.parse(text)
      // This is the strange thing!
      // There should only be one cookie here, too
      expect(parsedText).to.have.length(1)
    });
  })

  it('creates two cookies with a fetch request', () => {
    cy.visit('/')
    cy.get('#do-fetch-request').click()
    cy.contains('A cookie has been set').should('be.visible')

    cy.get('#client-cookies-json').invoke('text').should(text => {
      const parsedText = JSON.parse(text)
      // There should only be one cookie here
      expect(parsedText).to.have.length(1)
    });

    // Debug with cy.getAllCookies if that exists (Cypress v12.1.0+ only)
    if (cy.getAllCookies) {
      cy.getAllCookies().then(cookies => cy.log("Cookie domains are:", cookies.map(c => c.domain)))
    }

    cy.get('#client-cookies-json-timeout').invoke('text').should(text => {
      const parsedText = JSON.parse(text)
      // This is the strange thing!
      // There should only be one cookie here, too
      expect(parsedText).to.have.length(1)
    });
  })
})
