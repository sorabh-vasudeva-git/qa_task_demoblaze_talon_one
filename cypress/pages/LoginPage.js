class LoginPage {
  // Locators
  loginButton()  {
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
    return cy.contains('#logInModal button','Log in');
  }

  // Actions
  openLoginModal(){
    cy.visit('/');
    this.loginButton();
    this.loginModal().should('be.visible'); 
  }

   fillUsername(username) {
    this.usernameField().clear().type(username);
  }

  fillPassword(password) {
    this.passwordField().clear().type(password);
  }

  clickLogin() {
    this.submitLoginButton().click();
  }

  login(username, password) {
    this.openLoginModal();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submitLoginButton();
  }
}

export default new LoginPage();
