/// <reference types="cypress"></reference>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos/')

    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(2)
            .contains('Apollo Running Short')
            .click()
            cy.get('.product_title').should('contain', 'Apollo Running Short')

    });
});
