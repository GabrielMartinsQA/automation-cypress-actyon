/// <reference types="Cypress" />

import { el } from '../pages/elements.cy.js'

Cypress.Commands.add('login', () => {
    cy.visit('#/sessions/signin')

    cy.get(el.inp_login).type(Cypress.env('user_name'))
    cy.get(el.inp_senha).type(Cypress.env('user_password'))
    cy.get(el.btn_login).click()
})