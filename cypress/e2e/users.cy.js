/// <reference types="Cypress" />

import { el } from '../pages/elements.cy.js'

const faker = require('faker')

describe('Users', () => {
    const user = {
        nome: faker.name.findName(),
        senha: '1234',
        id_perfil: 'PERFIL ADMIN',
        status: 'S'
    }

    before(() => {
        cy.login()
        cy.get(el.btn_loggedUser).should('exist')
    })

    it('successfully', () => {
        cy.createUser(user)
        //cy.get(el.btn_loggedUser).should('exist')
    })
})