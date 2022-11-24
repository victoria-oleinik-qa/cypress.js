describe('Проверка формы логина и пароля', function () {

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('cheepaks@mail.ru').type('{enter}');
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton');
    
    })
    
    it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');

    
    })
    
    it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio22');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');

        
    })
    
    it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germansss@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio22');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        
    })
})