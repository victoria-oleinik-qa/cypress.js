describe('Проверка формы логина и пароля', function () {
    it('Проверка негативного кейса', function () {
        cy.visit('https://staya.dog//');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('oleinikvic@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('q240377');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными');
       
            
    })
     })