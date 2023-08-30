describe('Filter Post', () => {
  it('Search by Title', () => {
    cy.visit('/posts');
    cy.get('#mat-input-0').click().type('Ducimus specu');
  });
  it('Search by Author', () => {
    cy.visit('/posts');
    cy.get('#mat-input-0').click().type('Chakor');
  });
});
