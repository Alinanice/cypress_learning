import { createYield } from "typescript"


describe('Test log out', () => {

    beforeEach('log in to the app', () => {
        cy.loginToApplication()

    })

    it('verify use can log out successfully', () => {
        cy.contains('Settings').click()
        cy.contains('Or click here to logout').click()
        cy.get('.navbar-nav').should('contain','Sign up1')
    })
})