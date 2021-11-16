describe('Routing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should start out with nothing extra in the url path', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should change the path when searching', () => {
    cy.get('.search-bar').type("love");
    cy.get('.search-button').click();
    cy.wait(500);
    cy.url().should('eq', 'http://localhost:3000/result');
  });

  it('should change the path when going back', () => {
    cy.get('.search-bar').type("love");
    cy.get('.search-button').click();
    cy.wait(500);
    cy.url().should('eq', 'http://localhost:3000/result');
    cy.get('.home-button').click();
    cy.wait(500);
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
