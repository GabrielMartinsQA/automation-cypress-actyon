/// <reference types="Cypress" />

import { el } from '../pages/elements.cy.js'

Cypress.Commands.add('login', () => {
    cy.visit('#/sessions/signin')

    cy.get(el.ipt_login).type(Cypress.env('user_name'))
    cy.get(el.ipt_senha).type(Cypress.env('user_password'))
    cy.get(el.btn_login).click()
    cy.wait(5000)
})

Cypress.Commands.add('createUser', user => {
    cy.get(el.btn_sideBarMenu).click()
    cy.contains(el.btn_seguranca).click({force:true})
    cy.contains(el.btn_seguranca_usuarios).click({force:true})
    cy.contains(el.btn_newUser).click()
    cy.get(el.ipt_loginUsuario).type(user.nome)
    cy.get(el.ipt_nomeUsuario).type(user.nome)
    cy.get(el.ipt_senhaUsuario).type(user.senha)
    cy.get(el.ipt_repetirSenhaUsuario).type(user.senha)
    cy.get(el.cbb_perfilUsuario).select(0)
    cy.contains(el.btn_salvarUsuario).click()
})