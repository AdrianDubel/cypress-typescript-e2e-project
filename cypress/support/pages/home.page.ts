class HomePage {
  elements = {
    userName: () => cy.get('[data-testid="user-name"]'),
  };
}

export default new HomePage();
