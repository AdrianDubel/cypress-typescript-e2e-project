class HomePage {
  elements = {
    userName: () => cy.get('[data-testid="user-name"]'),
    radioBtn1: () => cy.get('[type=radio]').first(),
    radioBtn2: () => cy.get('[type=radio]').eq(1),
    radioBtn3: () => cy.get('[type=radio]').last(),
    searchInput: () => cy.get('[data-testid="autocomplete"]'),
    searchResultBox: () => cy.get('#ui-id-1'),
    dropdown: () => cy.get('[data-testid="dropdown"]'),
    checkbox1: () => cy.get('#checkBoxOption1'),
    checkbox2: () => cy.get('#checkBoxOption2'),
    checkbox3: () => cy.get('#checkBoxOption3'),
    openWindowBtn: () => cy.get('#openwindow'),
    openTabBtn: () => cy.get('#opentab'),
  };
}

export default new HomePage();
