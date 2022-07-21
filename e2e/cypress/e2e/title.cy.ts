describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#title').should('contain', 'Project Pieterpad')
  })
})
