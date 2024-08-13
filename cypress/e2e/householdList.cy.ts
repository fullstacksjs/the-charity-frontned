import { dashboardSidebarIds } from '../../libs/pages/Dashboard/DashboardSidebar/DashboardSidebar.ids';
import { admin } from '../fixtures/admin';
import { householdFixture } from '../fixtures/household';
import { Routes } from '../support/routes';
import * as api from './api';

describe('Household List', () => {
  beforeEach(() => {
    cy.login(admin);
    cy.visit(Routes.Households);
    cy.findByTestId(dashboardSidebarIds.households).click();
  });

  it('newly added household should be visible in householdTable', () => {
    const name = householdFixture.name();
    cy.wrap(api.createHousehold(name));
    cy.visit(Routes.Households);
    cy.findByText(name).should('exist');
  });

  it('clicking on household entry should navigate to id page', () => {
    const name = householdFixture.name();
    cy.wrap(api.createHousehold(name)).then((data: { id: string }) => {
      cy.visit(Routes.Households);
      cy.findByText(name).click();
      cy.location().should(loc => {
        expect(loc.pathname).include(data.id);
      });
    });
  });
});
