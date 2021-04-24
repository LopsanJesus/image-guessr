describe('navigateToLevel', () => {
  it('User can navigate to a level', () => {
    cy.visit('localhost:3000/')

    cy.get('.cta-play-button').contains('PLAY').click()


    cy.url().should('eq', 'http://localhost:3000/play')

    cy.get('#level-1').click()

    cy.get('h1').contains('Level 1')
  })
})
