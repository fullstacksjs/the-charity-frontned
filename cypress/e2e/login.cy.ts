import { AppRoute } from '../../src/AppRoutes';
import { admin } from '../fixtures/admin';

describe('Login', () => {
  it('should be redirected to the families page after successful login', () => {
    cy.visit(AppRoute.login);
    cy.get('button').click();

    cy.origin(
      'https://dev-jxuskaag.us.auth0.com/',
      { args: admin } as const,
      ({ username, password }) => {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button[type="submit"]').click();
      },
    );
  });
});
