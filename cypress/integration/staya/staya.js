describe('Проверка формы логина и пароля', function () {

    it('Проверка позитивного теста', function () {
        cy.visit('https://staya.dog//');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('oleinikvic@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('q24031944Z');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
        
    
    })
    })
    
