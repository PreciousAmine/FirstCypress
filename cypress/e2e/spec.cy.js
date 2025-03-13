/// <reference types="cypress" />
describe('Cypress test', () => {
  it('passes', () => {
    cy.visit('/');
    //Using attribute selectors
     // Assert that we are on the login page
    cy.url().should("include", "saucedemo.com"); //Update to assert that URL is equal to https://www.saucedemo.com/
    cy.get("input[placeholder='Username']").type("visual_user");
    cy.get("input[placeholder='Password']").type("secret_sauce");
    cy.get("input[type='submit']").click();
    cy.wait(2000);
    // Assert that the logo should be visible.
    cy.get('div.app_logo').should('be.visible');
    cy.wait(1000);
    // Change the order sorting from high to low 
    cy.get('[data-test="product-sort-container"]').select('hilo'); 
    cy.wait(2000);
    // Add items to the cart
    cy.get('button[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.wait(2500);
    // Remove one item from the cart
    cy.get('button[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    cy.wait(2000);
    // Proceed to checkout
    cy.get('a.shopping_cart_link').click();
    cy.get('button[data-test="checkout"]').click();
    cy.wait(2000);
    // Enter checkout information
    cy.get('input[data-test="firstName"]').type('Johnathan');
    cy.get('input[data-test="lastName"]').type('Donald');
    cy.get('input[data-test="postalCode"]').type('12544');
    cy.get('input[data-test="continue"]').click();
    cy.wait(2000);
    // Finish the checkout 
    cy.get('button[data-test="finish"]').click();
    cy.wait(2000);
    //Using XPath
    // Assert that the complete order message is visible
    cy.xpath('//h2[contains(text(), "Thank you for your order!")]').should('be.visible');
    cy.wait(2000);
    // Logout
    cy.xpath('//button[@id="react-burger-menu-btn"]').click();
    cy.wait(1000);
    cy.xpath('//a[@id="logout_sidebar_link"]').click();
    cy.wait(2000);

  })
})