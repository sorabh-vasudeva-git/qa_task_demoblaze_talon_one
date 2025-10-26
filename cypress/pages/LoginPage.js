class LoginPage {
  // Locators
  loginButton() {
    cy.get('#login2').click()
  }

  loginModal() {
    return cy.get('#logInModal');
  }

  usernameField() {
    return cy.get('#loginusername');
  }

  passwordField() {
    return cy.get('#loginpassword');
  }

  submitLoginButton() {
    return cy.contains('#logInModal button', 'Log in');
  }



  // Actions
  openLoginModal() {
    cy.visit('/');
    this.loginButton();
    this.loginModal().should('be.visible');
  }

  fillUsername(username) {
    this.usernameField().clear().type(username, { delay: 40 });
  }

  fillPassword(password) {
    this.passwordField().clear().type(password, { delay: 40 });
  }

  clickLogin() {
    this.submitLoginButton().click();
  }

  login(username, password) {
    this.openLoginModal();
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();
