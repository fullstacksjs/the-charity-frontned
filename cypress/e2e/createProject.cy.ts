import { faker } from '@faker-js/faker';

import {
  createProjectButtonId,
  createProjectFormIds,
} from '../../src/components';

const createProjectNavSelector = 'a[href="/projects"]';

describe.skip('Create Project', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
    cy.get(createProjectNavSelector).click();
    cy.findByTestId(createProjectButtonId).click();
  });

  it('[OK]: Admin creates project', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).type(faker.lorem.word(5));
      cy.findByTestId(createProjectFormIds.descriptionInput).type(
        faker.lorem.lines(1),
      );
      cy.get(createProjectFormIds.submitBtn).click();
    });
    cy.findByTestId(createProjectFormIds.notification.success).should('exist');
  });

  it('[NOK]: Admin wants to create a project with short name', () => {
    cy.get('form').within(() => {
      cy.findByTestId(createProjectFormIds.nameInput).type('نام');
      cy.findByTestId(createProjectFormIds.submitBtn).click();
    });
    cy.findByTestId(createProjectFormIds.notification.success).should('exist');
  });
});
