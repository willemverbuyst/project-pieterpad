describe('page', () => {
  it('should have title "Project PieterPad"', () => {
    cy.visit('/')
    cy.get('#title').should('contain', 'Project Pieterpad')
  })
})
