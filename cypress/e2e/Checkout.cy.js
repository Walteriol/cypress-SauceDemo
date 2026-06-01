describe('Carrito - Sauce Demo', () => {

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','/inventory.html')
    })


it('13-Compra completa con dos productos', () => {

    // Agregar dos productos
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '2')

    // Ir al carrito
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_item').should('have.length', 2)

    // Iniciar checkout
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')

    // Completar formulario
    cy.get('[data-test="firstName"]').type('Juan')
    cy.get('[data-test="lastName"]').type('Pérez')
    cy.get('[data-test="postalCode"]').type('5000')
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')

    // Confirmar pedido
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')

  })

  it('14-Compra completa con dos productos', () => {
     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_item').should('have.length', 1)
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')
    cy.get('[data-test="firstName"]').click()
    cy.get('[data-test="lastName"]').click()
    cy.get('[data-test="postalCode"]').click()
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')

  })

})