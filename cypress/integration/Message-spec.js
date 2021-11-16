describe('Checking messages', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be able to type a message', () => {
    cy.get('.search-bar').type("love");
  });

  it('should always have a message before checking', () => {
    cy.get('.search-button').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('I want a verse concerning...');
      });
    });

    it('should be able to retrieve appropriate verses', () => {
        cy.get('.search-bar').type('love');
        cy.get('.search-button').click();
        cy.wait(500);
        cy.get('.search-verse-container').contains('love');
      });

      it('should always have a verse of the day', () => {
        cy.get("@verse");
        cy.get("@subheader");
          });
        });
