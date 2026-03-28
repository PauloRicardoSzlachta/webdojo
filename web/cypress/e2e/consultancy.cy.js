import { personal, company } from '../fixtures/consultancy.json'

describe('Formulário de Consultoria', () => {

    // before(() => {
    //     cy.log('Executado uma única vez antes de todos os testes')
    // })

    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')

        cy.fixture('consultancy').as('consultancyData')
    })

    it('Deve solicitar consultoria individual', () => {
        cy.fillConsultancyForm(personal)
        cy.submitConsultancyForm()
        cy.validateConsultancyForm()
    })

    // it('Deve solicitar consultoria In Company', () => {
    //     cy.fillConsultancyForm(company)
    //     cy.submitConsultancyForm()
    //     cy.validateConsultancyForm()
    // })

    it('Deve verificar os campos obrigatórios', () => {
        cy.submitConsultancyForm()

        const requiredFields = [
            { label: 'Nome Completo', message: 'Campo obrigatório' },
            { label: 'Email', message: 'Campo obrigatório' },
            { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso' }
        ]

        requiredFields.forEach(({ label, message }) => {
            cy.contains('label', label)
                .parent()
                .find('p')
                .should('be.visible')
                .should('have.text', message)
                .and('have.class', 'text-red-400')
                .and('have.css', 'color', 'rgb(248, 113, 113)')
        })
    })

    // afterEach(() => {
    //     cy.log('Executado após cada teste')
    // })

    // after(() => {
    //     cy.log('Executado uma única vez após todos os testes')
    // })
})


