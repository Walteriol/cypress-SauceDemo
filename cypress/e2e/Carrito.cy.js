describe('Carrito - Sauce Demo', () => {

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include','/inventory.html')
    })

   
    it('10-Carrito agrega 1 prducto y verifica badge ',()=>{
        cy.get('.inventory_item_name').first().should('have.text','Sauce Labs Backpack')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() 
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')
        cy.get('.cart_item').should('have.length', 1)
       
        //cy.get('.shopping_cart_badge').should('have.text', '1')
         cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')

    })

    it('11-Carrito Agregar múltiples productos y verificar badge',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')
        cy.get('.shopping_cart_badge').should('have.text', '3')    
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.text', 'Remove')
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('have.text', 'Remove')

    })

it('12-Carrito Eliminar un producto desde la página del carrito',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')
        cy.get('.shopping_cart_badge').should('have.text', '2')    
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.text', 'Remove')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.text', 'Remove') 
     cy.get('[data-test="continue-shopping"]').click()

    })

})
