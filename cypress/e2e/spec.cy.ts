describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Criar Usuário');

    cy.get('.search-field > button').click();
    cy.get('#mat-input-1').type('Joao');
    cy.get('#mat-input-2').type('joaoa@gmail.com');
    cy.get('#mat-select-value-3').click();

    cy.get('#mat-option-4').click(); //Female
    cy.get('#mat-select-value-3').click();

    cy.get('#mat-option-3').click(); //Male
    cy.get('#mat-select-value-5').click();
    cy.get('#mat-option-5').click();
    cy.get('.buttons > button').click();

    // cy.get(
    //   '#mat-snack-bar-container-live-0 > div > simple-snack-bar > div.mat-mdc-snack-bar-label.mdc-snackbar__label'
    // ).contains('Usuário cadastrado com sucesso!');

    cy.get(
      '#mat-snack-bar-container-live-0 > div > simple-snack-bar > div.mat-mdc-snack-bar-label.mdc-snackbar__label'
    ).contains('Erro ao criar usuário: email has already been taken');
  });
});
