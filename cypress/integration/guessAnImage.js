describe('guessAnImage', () => {

  const cityName = 'Cordoba'

  it('user can click an image and type a word', () => {
    cy.visit('localhost:3000/play/level/1')

    cy.get('.image').first().click()


    cy.get('input').type(cityName)
  
    cy.get('button').contains('Check').click()


    cy.contains('Score: 1')

    cy.contains(cityName)
  })
})
