class HomePage {
  elements = {
    userName: () => cy.get('[data-testid="user-name"]'),
    radioBtn1: () => cy.get('[type=radio]').first(),
    radioBtn2: () => cy.get('[type=radio]').eq(1),
    radioBtn3: () => cy.get('[type=radio]').last(),
  };
}

export default new HomePage();
