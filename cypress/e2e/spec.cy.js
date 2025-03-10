/// <reference types="cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get("#user-name").type("visual_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
  })
})