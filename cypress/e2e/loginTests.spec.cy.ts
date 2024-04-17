import loginPage from "../support/pages/login.page";
import homePage from "../support/pages/home.page";

describe("Login tests", () => {
  it("Login using correct credentials", () => {
    const username = Cypress.env("USERNAME");
    const password = Cypress.env("PASSWORD");

    cy.visit("/");
    loginPage.login(username, password);
    homePage.elements
      .userName()
      .should("be.visible")
      .and("contain.text", username);
  });
});
