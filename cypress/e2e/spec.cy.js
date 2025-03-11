/// <reference types="cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get("#user-name").type("visual_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    // I assert thet the logo should be visible
    cy.get(".app_logo").should("be.visible");
    // I changed the order sorting from high to low 
    cy.get(".product_sort_container").select("hilo");
    //I added items to the cart
    cy.get(".inventory_item").eq(0).find(".btn_inventory").click();
    cy.get(".inventory_item").eq(1).find(".btn_inventory").click();
    cy.get(".inventory_item").eq(2).find(".btn_inventory").click();
    cy.get(".inventory_item").eq(5).find(".btn_inventory").click();
    cy.get(".inventory_item").eq(4).find(".btn_inventory").click();
    //I proceeded to the cart
    cy.get(".shopping_cart_link").click();
    // I proceeded to checkout
    cy.get("#checkout").click();
    // I entered checkout information
    cy.get("#first-name").type("Precious");
    cy.get("#last-name").type("Amine");
    cy.get("#postal-code").type("Makepe")
    cy.get("#continue").click();
    // I finished the checkout 
    cy.get("#finish").click();
    // Assert that the complete order message is visible
    cy.get(".complete-header").should("contain","Thank you for your order!" );
    // Logout
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click(); 
     // Assert that we are back on the login page
    cy.url().should("be", "saucedemo.com");

  })
})