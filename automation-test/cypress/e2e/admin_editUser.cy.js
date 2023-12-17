function expectPass() {
  cy.get('.MuiAlert-message').should('include.text', 'success');
}

function expectFail() {
  cy.get('.MuiAlert-message').should('contain.text', 'error call');
}

describe('Add New Users', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000/');
    cy.get('#username').type('admin');
    cy.get('#password').type('12345');
    cy.get(".lButton").click();
    cy.get("#user").click();
    cy.get('[data-id=6572a5d2b2f93410a3d426b7]').find('.viewButton').click();
    cy.get(".editButton").click();
  });

  it(`test case 1 - expect success`, () => {
    cy.get("#phone").clear().type('0453687458');
    cy.get('#send').click();
    expectPass();
  });

  it(`test case 2 - expect fail`, () => {
    cy.get("#city").clear().type('Ha Noi');
    cy.get('#send').click();
    expectFail();
  });

});
