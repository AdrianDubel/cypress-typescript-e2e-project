import loginPage from "../support/pages/login.page";
import homePage from "../support/pages/home.page";
import { dataTests } from "../support/helpers/datatests";

describe("Dropdown tests", () => {
  beforeEach(() => {
    cy.visit("/");
    loginPage.login(dataTests.username, dataTests.password);
  });

  it("Dropdown test", () => {
    homePage.elements.dropdown().select("option1");
    homePage.elements.dropdown().invoke("val").should("deep.equal", "option1");
  });

  it('Check if a different value is causing the error', () => {
    homePage.elements.dropdown().select("option2");
    homePage.elements.dropdown().invoke("val").should('not.deep.equal', "option1");
  });
});
