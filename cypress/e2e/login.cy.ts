import { admin } from '../fixtures/admin';
import { Routes } from '../support/routes';

const domain = Cypress.env('APP_AUTH0_DOMAIN') as string;

describe('Login', () => {
  it('should be redirected to the dashboard page after successful login', () => {
    cy.visit(Routes.Login);
    cy.get('button').click();

    cy.origin(
      `https://${domain}/`,
      { args: admin } as const,
      ({ username, password }) => {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button[type="submit"]').last().click();
      },
    );
  });
});
