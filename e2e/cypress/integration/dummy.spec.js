it('should display title', () => {
  cy.visit('/')

  cy.get('#title').should('contain', 'Project Pieterpad')
})
