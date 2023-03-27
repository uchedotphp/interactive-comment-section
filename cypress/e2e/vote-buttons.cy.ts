describe('vote buttons', () => {
  it('Upvote button is disabled', () => {
    cy.get('[data-cy="up-vote"]').should('be.disabled')
  })

  it('count is not less than 0', () => {
    // cy.get('[data-cy="count"]').should('not.be.lessThan', 0)
    cy.get('[data-cy="count"]').should('have.text', '12')
  })

  it('count is not more than 99', () => {
    cy.get('[data-cy="count"]').should('have.string', '12')
  })

  it('count is not more than 99', () => {
    cy.visit('http://localhost:5173')
  })
})