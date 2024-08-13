import { dashboardHeaderId } from '../../libs/design/DashboardHeader/DashboardHeader.ids';
import { createHouseholdButtonId } from '../../libs/pages/Households/CreateHousehold/CreateHouseholdButton/CreateHouseholdButton.ids';
import { createHouseholdFormIds } from '../../libs/pages/Households/CreateHousehold/CreateHouseholdForm/CreateHouseholdForm.ids';
import { admin } from '../fixtures/admin';
import { householdFixture } from '../fixtures/household';
import { Routes } from '../support/routes';

describe('Create Household', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(Routes.Households);
  });

  it('[OK]: Create a household', () => {
    cy.findByTestId(dashboardHeaderId)
      .findByTestId(createHouseholdButtonId)
      .click();
    cy.findByTestId(createHouseholdFormIds.form).within(() => {
      cy.findByTestId(createHouseholdFormIds.nameInput)
        .find('input')
        .type(householdFixture.name());
      cy.findByTestId(createHouseholdFormIds.submitBtn).click();
    });
    cy.findNotification('success').should('exist');
  });
});
