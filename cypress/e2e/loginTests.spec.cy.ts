import loginPage from "../support/pages/login.page";
import homePage from "../support/pages/home.page";

describe("Login tests", () => {

  const username = Cypress.env("USERNAME");
  const password = Cypress.env("PASSWORD");

  it("Login using correct credentials", () => {

    cy.visit("/");
    loginPage.login(username, password);
    homePage.elements
      .userName()
      .should("be.visible")
      .and("contain.text", username);
  });

  it("Login using wrong username", () => {
    cy.visit("/");
    loginPage.login('wrong_username', password);
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', "Nieprawidłowa nazwa użytkownika.")
  });

  it("Login using wrong password", () => {
    cy.visit("/");
    loginPage.login(username, "wrongpass");
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', "Nieprawidłowe hasło.")
  });

  it("Login using wrong username and password", () => {
    cy.visit("/");
    loginPage.login('wrong_username', "wrongpass");
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', "Nieprawidłowa nazwa użytkownika i hasło.")
  });
});
