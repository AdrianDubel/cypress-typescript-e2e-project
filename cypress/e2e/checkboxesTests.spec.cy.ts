import loginPage from "../support/pages/login.page";
import homePage from "../support/pages/home.page";
import { dataTests } from "../support/helpers/datatests";

describe("Checkboxes tests", () => {
  beforeEach(() => {
    cy.visit("/");
    loginPage.login(dataTests.username, dataTests.password);
  });

  it("Check if clicked checbox is checked", () => {
    const checbox1 = homePage.elements.checkbox1();
    checbox1.check();
    checbox1.should("be.checked");
  });

  it("Check if user is able to unchecked checkbox", () => {
    const checbox1 = homePage.elements.checkbox1();
    checbox1.check();
    checbox1.should("be.checked");
    checbox1.uncheck();
    checbox1.should("not.be.checked");
  });

  it("Check if user is able to check more than one checkbox", () => {
    const checkbox1 = homePage.elements.checkbox1();
    const checkbox2 = homePage.elements.checkbox2();
    const checkbox3 = homePage.elements.checkbox3();

    const checboxes = [checkbox1, checkbox2, checkbox3];

    checboxes.forEach(($el) => {
      $el.check();
      $el.should('be.checked')
    });
  });
});
