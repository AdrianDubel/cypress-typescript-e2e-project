import loginPage from "../support/pages/login.page";
import homePage from "../support/pages/home.page";
import { dataTests } from "../support/helpers/datatests";

describe("Select from list by typing", () => {
  beforeEach(() => {
    cy.visit("/");
    loginPage.login(dataTests.username, dataTests.password);
  });

  it("Check whether the entered text appears in the search results ", () => {
    homePage.elements.searchInput().type("pol");
    homePage.elements
      .searchResultBox()
      .should("be.visible")
      .find("li")
      .each(($el) => {
        const elementText = $el.text().toLowerCase();

        expect(elementText).contain("pol");
      });
  });
});
