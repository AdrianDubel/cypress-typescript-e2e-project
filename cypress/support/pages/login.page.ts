class LoginPage{

    elements = {
        usernameInput: '[data-testid="username"]',
        passwordInput: '[data-testid="password"]',
        submitBtn: '[data-testid="submit-btn"]',
    }

    login(username: string, password:string){
        cy.get(this.elements.usernameInput).type(username)
        cy.get(this.elements.passwordInput).type(password)
        cy.get(this.elements.submitBtn).click()
    }

}

export default new LoginPage();