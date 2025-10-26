import LoginPage from '../pages/LoginPage';
import ProductDetails from '../pages/ProductsPage';
import user from '../fixtures/users.json';

describe('Login Flow', () => {

  it('should log in successfully with valid credentials', () => {
    LoginPage.openLoginModal();
    LoginPage.fillUsername(user.validUser.username);
    LoginPage.fillPassword(user.validUser.password);
    LoginPage.clickLogin();
    ProductDetails.verifyLoggedInUser(user.validUser.username);

  });
  it('should not be able to login with invalid username', () => {
    LoginPage.openLoginModal();
    LoginPage.fillUsername(user.invalidUser.username);
    LoginPage.fillPassword(user.invalidUser.password);
    LoginPage.clickLogin();
    cy.stubAlert();
    cy.shouldHaveAlert('User does not exist.');
  });
  it('should not be able to login with invalid username', () => {
    LoginPage.openLoginModal();
    LoginPage.fillUsername(user.validUser.username);
    LoginPage.fillPassword(user.invalidUser.password);
    LoginPage.clickLogin();
    cy.stubAlert();
    cy.shouldHaveAlert('Wrong password.');
  });
});
