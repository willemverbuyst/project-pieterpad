describe('pieterpad api', () => {
  context('GET /pieterpad', () => {
    it('should return a list with all stages', () => {
      cy.request({
        method: 'GET',
        url: `${Cypress.env('server')}/pieterpad`,
      }).should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.results).to.eq(27)
        expect(response.body.data.length).to.be.eq(27)
        cy.log(response.body.data)
        expect(response.body.data[0]).to.have.all.keys(
          '_id',
          'from',
          'km',
          'to',
          'section',
          'stageNumber'
        )
      })
    })
  })
})
