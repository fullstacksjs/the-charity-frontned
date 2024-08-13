import { householdActionIds } from '../../libs/pages/Households/HouseholdActionButton/HouseholdActionButton.ids';
import { admin } from '../fixtures/admin';
import { householdFixture } from '../fixtures/household';
import { Routes } from '../support/routes';
import * as api from './api';

describe('Delete a Household', () => {
  beforeEach(() => {
    cy.login(admin);
  });

  it('should show the success message after deleting', () => {
    const name = householdFixture.name();
    cy.wrap(api.createHousehold(name)).then(() => {
      cy.visit(Routes.Households);
      cy.findByText(name)
        .parents('tr')
        .findByTestId(householdActionIds.actionButton)
        .click();
      cy.findByRole('menuitem', { name: 'حذف' }).click();
      cy.findByRole('button', { name: 'حذف' }).click();
      cy.findNotification('success').should('exist');

      cy.findByText(name).should('not.exist');
    });
  });

  it('should navigate to the household list after deleting household from the household detail page', () => {
    const name = householdFixture.name();
    cy.wrap(api.createHousehold(name)).then(({ id }: { id: string }) => {
      cy.visit(Routes.HouseholdDetail, { params: { id } });
      cy.findByRole('button', { name: /حذف کردن/ }).click();
      cy.findByRole('dialog').within(() => {
        cy.findByRole('button', { name: /حذف/ }).click();
      });
      cy.findNotification('success').should('exist');
      cy.location('pathname').should('equal', Routes.Households);
    });
  });
});
