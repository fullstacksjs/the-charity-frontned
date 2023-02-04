import { createFamilyButtonId } from '../../../app/components/CreateFamily/FamilyButton/CreateFamilyButton.ids';
import { createFamilyFormIds } from '../../../app/components/CreateFamily/FamilyForm/CreateFamilyForm.ids';
import { dashboardHeaderId } from '../../../libs/design/Header/DashboardHeader.ids';
import { AppRoute } from '../../../libs/router/index';

Cypress.Commands.add('createFamily', name => {
  cy.visit(AppRoute.families);
  cy.findByTestId(dashboardHeaderId).findByTestId(createFamilyButtonId).click();
  cy.findByTestId(createFamilyFormIds.form).within(() => {
    cy.findByTestId(createFamilyFormIds.nameInput).find('input').type(name);
    cy.findByTestId(createFamilyFormIds.submitBtn).click();
  });
  cy.findByTestId(createFamilyFormIds.notification.success, {
    timeout: 1e4,
  }).should('exist');
});

declare global {
  namespace Cypress {
    interface Chainable {
      createFamily: (name: string) => void;
    }
  }
}
