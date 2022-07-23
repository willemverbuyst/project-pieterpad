describe('page', () => {
  it('should have title "Project PieterPad"', () => {
    cy.visit(`${Cypress.env('client')}/`)
    cy.get('#title').should('contain', 'Project Pieterpad')
  })
})
