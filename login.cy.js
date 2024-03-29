
describe('Автотесты для логина и пароля', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');

        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');

        cy.get('#loginButton').click();

        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');

        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

         })

     
         it('Правильный логин и неправильный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#loginButton').should('be.disabled');
    
            cy.get('#pass').type('iLoveqastudio');
            cy.get('#loginButton').should('be.enabled');
    
            cy.get('#loginButton').click();
    
            cy.get('#messageHeader').should('be.visible');
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
    
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    
             })
             
             it('Неправильный логин и правильный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolnikov.rud');
                cy.get('#loginButton').should('be.disabled');
        
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').should('be.enabled');
        
                cy.get('#loginButton').click();
        
                cy.get('#messageHeader').should('be.visible');
                cy.get('#messageHeader').contains('Такого логина или пароля нет');
        
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
                 })
             

























})