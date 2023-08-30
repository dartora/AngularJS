import { random } from 'cypress/types/lodash';

describe('Update user', () => {
  it('Edit first userName of table', () => {
    cy.visit('/');

    cy.get(
      ':nth-child(1) > .cdk-column-actions > .mat-mdc-menu-trigger > .mat-icon'
    ).click();
    cy.get('.mat-mdc-menu-content > :nth-child(1)').click();
    cy.get('#mat-input-1').click().type('1');
    cy.get('.saveButton > [mat-raised-button=""]').click();
  });
  // it('Edit to female', () => {
  //   cy.visit('/');
  //   cy.get(
  //     ':nth-child(1) > .cdk-column-actions > .mat-mdc-menu-trigger > .mat-icon'
  //   ).click();
  //   cy.get('.mat-mdc-menu-content > :nth-child(1)').click();
  //   cy.get('#mat-input-1').click().type('1');
  // });
});
