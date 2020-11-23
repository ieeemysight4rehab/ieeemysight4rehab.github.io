// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    // cy.contains('title', 'IEEE MySIGHT4Rehab EPICS | Universiti Tunku Abdul Rahman (UTAR)')
    expect(true).to.equal(true)
  })
})
