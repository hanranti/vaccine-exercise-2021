describe('App', function () {
  beforeEach(function () {
    cy.visit('localhost:80')
  })

  it('header exists', function () {
    cy.contains('Vaccine Exercise 2021')
    cy.contains('Filters').click()
    cy.contains('All').click()
    cy.contains('OrdersAndInjections').click()
    cy.contains('Created by hanranti')
  })
})