import { admin } from '../fixtures/admin';
import { Routes } from '../support/routes';

describe('Authorization', () => {
  it('should not be able to go to login after logging in', () => {
    cy.login(admin);
    cy.visit(Routes.Projects).then(() => {
      cy.visit(Routes.Login);
      cy.location('pathname').should('not.eq', Routes.Login);
    });
  });

  it('should be redirected to login if not authenticated', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', Routes.Login);
  });

  it('should be able to go to protected routes after logging in', () => {
    cy.login(admin);
    cy.visit(Routes.Projects);
    cy.location('pathname').should('eq', Routes.Projects);
  });
});
