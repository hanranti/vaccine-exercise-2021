describe('App', function () {
    beforeEach(function () {
        cy.visit('localhost:80')
    })

    it('exists', function () {
        cy.contains('Vaccine Exercise 2021')
        cy.contains('Created by hanranti')
    })
})