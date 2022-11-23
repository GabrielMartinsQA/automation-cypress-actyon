/// <reference types="Cypress" />

import { el } from '../pages/elements.cy.js'

describe('Login', () => {

    it('successfully', () => {
        cy.login()
        cy.get(el.btn_loggedUser).should('exist')
    })
})