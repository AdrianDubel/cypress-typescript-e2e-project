import loginPage from "../support/pages/login.page";
import homePage from "../support/pages/home.page";
import { dataTests } from "../support/helpers/datatests";

describe("Radio button tests", () => {
  
  beforeEach(() => {
    cy.visit("/");
    loginPage.login(dataTests.username, dataTests.password)
  });

  it("First radio button test", () => {
    homePage.elements.radioBtn1().check();
    homePage.elements.radioBtn1().should("be.checked");
  });

  it("Second radio button test", () => {
    homePage.elements.radioBtn2().check();
    homePage.elements.radioBtn2().should("be.checked");
  });

  it("Third radio button test", () => {
    homePage.elements.radioBtn3().check();
    homePage.elements.radioBtn3().should("be.checked");
  });
});
