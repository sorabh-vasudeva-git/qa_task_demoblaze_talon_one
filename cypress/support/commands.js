// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
global.Given = (text, fn) => it(`Given ${text}`, fn);
global.When = (text, fn) => it(`When ${text}`, fn);
global.Then = (text, fn) => it(`Then ${text}`, fn);

Cypress.Commands.add('apiLogin', (username, encodedpassword) => {
  cy.request('POST', 'https://api.demoblaze.com/login', { username, encodedpassword })
})

