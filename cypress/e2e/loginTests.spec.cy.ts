import loginPage from "../support/pages/login.page";
import homePage from "../support/pages/home.page";

describe('Login tests', ()=>{

    it('Login using correct credentials', () => {
        cy.visit('/')
        loginPage.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
        cy.get(homePage.element.userName)
          .should('be.visible')
          .and('contain.text', 'test_user')
    });
})