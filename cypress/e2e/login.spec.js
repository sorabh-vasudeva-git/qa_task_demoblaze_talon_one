import LoginPage from '../pages/LoginPage';

describe('Login Flow', () => {
  beforeEach(function () {
    cy.fixture('users').as('data');
  });

  Given('the user is on login page', function () {
    LoginPage.openLoginModal();
  });

  When('they enter valid credentials', function () {
    LoginPage.login(this.data.validUser.username, this.data.validUser.password);
  });

  Then('they should see the dashboard', function () {
  
  });
});

