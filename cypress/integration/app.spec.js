describe('App', function () {

  const testHeader = () => {
    cy.contains('Vaccine Exercise 2021')
    cy.contains('Filters')
    cy.contains('All')
    cy.contains('OrdersAndInjections')
    cy.contains('ExpiredOrders')
    cy.contains('Info')
    cy.contains('Created by hanranti')
  }

  beforeEach(function () {
    cy.visit('localhost:80')
  })

  it('header exists', function () {
    testHeader()
  })
})