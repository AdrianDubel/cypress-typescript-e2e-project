import loginPage from "../support/pages/login.page";
import homePage from "../support/pages/home.page";
import { dataTests } from "../support/helpers/datatests";

describe("Switch to new window", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.hideRequests();
    loginPage.login(dataTests.username, dataTests.password);
  });

  it("Check if new tab is opena after click the button", () => {
    homePage.elements.openTabBtn().invoke("removeAttr", "target").click();
    cy.origin("https://testautomationpractice.blogspot.com/", () => {
      cy.get("#name").should("be.visible");
    });
  });
});
