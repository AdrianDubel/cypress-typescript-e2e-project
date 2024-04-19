import loginPage from "../support/pages/login.page";
import homePage from "../support/pages/home.page";
import { dataTests } from "../support/helpers/datatests";

describe("Login tests", () => {


  beforeEach(() =>{
    cy.visit("/");
  })

  it("Login using correct credentials", () => {

    loginPage.login(dataTests.username, dataTests.password)
    homePage.elements
      .userName()
      .should("be.visible")
      .and("contain.text", dataTests.username);
  });

  it("Login using wrong username", () => {

    loginPage.login('wrong_username', dataTests.password);
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', "Nieprawidłowa nazwa użytkownika.")
  });

  it("Login using wrong password", () => {

    loginPage.login(dataTests.username, "wrongpass");
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', "Nieprawidłowe hasło.")
  });

  it("Login using wrong username and password", () => {

    loginPage.login('wrong_username', "wrongpass");
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', "Nieprawidłowa nazwa użytkownika i hasło.")
  });
});
