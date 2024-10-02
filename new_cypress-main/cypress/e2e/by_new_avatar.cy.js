import * as ac_info from "../helpers/battle_data.json"

describe('покупка нового аватара', function () {

    it('Покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(':nth-child(1) > .auth__input').type(ac_info.login);  // переход на сайт
         cy.get('#password').type(ac_info.password);            //ввод пароля
         cy.get('.auth__button').trigger('mouseover');  // при наведении происходит изменение цвета
         cy.get('.auth__button').should('be.visible');  // изменения видны клиенту
         cy.get('.auth__button').click();               // нажатие кнопки "Войти"
         cy.wait(2000);
         cy.get('.header__container > .header__id').click();     //нажатие на кнопку тренера
         cy.get('[href="/shop"]').click({ force: true });
         cy.get('.available > button').first().click({ force: true });  //первый доступный аватар к покупке
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5111 1111 1111 11');  // вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25');                                // вводим срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                //вводим CVV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Tom Kruz');                   // Вводим имя фамилию владельца карты
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');                                                      // вводим пароль из смс
         cy.get('.payment__submit-button').click('');                                             // подтверждаем покупку
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');                // проверка что покупка прошла успешно

     })

 })


 //
 //
 //