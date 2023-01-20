/// <reference types="cypress" />

describe('Login', () => {
   it('Quando eu informo o usuário e senha e clico em ENTRAR, então o login deve ser realizado', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      cy.get('.title').should('have.text', 'Products');
   });
});

describe('Adicionar produto no carrinho', () => {
   it('Quando eu seleciono um produto e clico em ADD TO CART, então o produto deve ser adicionado ao carrinho', () => {
      cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();

      cy.get('.shopping_cart_badge').should('have.text', '1')
   });
});