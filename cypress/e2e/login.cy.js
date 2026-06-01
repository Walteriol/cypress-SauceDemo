// login.cy.js

describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('01-Login exitoso',()=>{
        // cy.log('test 1') Logueamos mensaje en consola
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include','/inventory.html')
        cy.get('.app_logo').should('have.text', 'Swag Labs')
    })

    it('02-Login con contrasenia incorrecta',()=>{
        // cy.log('test 2') Logueamos mensaje en consola
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauceaassd')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain','Epic sadface: Username and password do not match any user in this service')
    })

    it('03-Login con campos vacíos',()=>{
        // cy.log('test 2')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username is required')

        
    })

    it('04-Login con usuario bloqueado',()=>{
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain','Epic sadface: Sorry, this user has been locked out.')
    })

    
     it('05-Logout desde el menu hamburgesa',()=>{
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

         cy.url().should('include','https://www.saucedemo.com/')
        cy.get('.login_logo').should('have.text', 'Swag Labs')

       
    })

       
})
