/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()

    });
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
            cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Cassius Sparring Tank'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Stellar Solar Jacket')
        cy.get('.product_title').should('contain', 'Stellar Solar Jacket')

    });

    it('Deve adicionar um produto ao carrinho', () => {
        let qtd = 5
        produtosPage.buscarProduto('Argus All-Weather Tank')
        produtosPage.addProdutoCarrinho('M', 'Gray', qtd)

        cy.get('.woocommerce-message').should('contain', qtd + ' × “Argus All-Weather Tank” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar um produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            
 
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor,
                dados[0].quantidade)
    
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
       
        })
        
    });
});
