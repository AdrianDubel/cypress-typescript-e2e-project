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

  it.only("Login using wrong username", () => {
    cy.visit("/");
    loginPage.login('wrong_username', password);
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', "Nieprawidłowa nazwa użytkownika.")
  });
});
