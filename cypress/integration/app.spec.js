describe('App', function () {

  /** const testOrdersAndInjections = () => {
     cy.contains('Total orders')
     cy.contains('Total injections')
     cy.contains('Used vaccines of total')
     cy.contains('Expired or expiring vaccines of total')
   }

   const testCumulativeOrders = () => {
     cy.contains('Cumulative orders')
     cy.contains('Cumulative injections')
     cy.contains('Cumulative used vaccines')
     cy.contains('Cumulative expired or expiring vaccines of total')
   }

   const testExpired = () => {
     cy.contains('Expired injections')
     cy.contains('Cumulative expired injections')
   }

   const testInfo = () => {
     cy.contains('Some additional info')
     cy.contains('In total 7000 vaccines have been used and 19932 have expired')
     cy.contains('Expired or expiring vaccines of total shows how many of that days')
     cy.contains('unused injections in bar form for each day')
     cy.contains('of the vaccination date inputs are turned on the order data')
   }
 */
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

  /**it('All exists', function () {
    testHeader()
    testOrdersAndInjections()
    testCumulativeOrders
    testExpired()
    testInfo()
    cy.contains('OrdersAndInjections').click()
    cy.contains('All').click()
    testHeader()
    testOrdersAndInjections()
    testCumulativeOrders
    testExpired()
    testInfo()
  })

  it('Orders and Injections exists', function () {
    cy.contains('OrdersAndInjections').click()
    testOrdersAndInjections()
    testCumulativeOrders()
    testHeader()
  })

  it('Expired orders exists', function () {
    cy.contains('ExpiredOrders').click()
    testExpired()
    testHeader()
  })

  it('Info exists', function () {
    cy.contains('Info').click()
    testInfo()
    testHeader()
  })*/
})