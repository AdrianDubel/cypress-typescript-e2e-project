class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-testid="username"]'),
    passwordInput: () => cy.get('[data-testid="password"]'),
    submitBtn: () => cy.get('[data-testid="submit-btn"]'),
  };

  login(username: string, password: string) {
    this.elements.usernameInput().type(username, { log: false });
    this.elements.passwordInput().type(password, { log: false });
    this.elements.submitBtn().click();
  }
}

export default new LoginPage();
