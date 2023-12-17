function fillOutRegisterForm(username, password, email, phone, country, city) {
  cy.get("#username").clear().type(username);
  cy.get("#password").clear().type(password);
  cy.get("#email").clear().type(email);
  cy.get("#phone").clear().type(phone);
  cy.get("#country").clear().type(country);
  cy.get("#city").clear().type(city);
}

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
    cy.get(".link", { timeout: 10000 }).click();
  });

  it(`test case 1 - expect success`, () => {
    fillOutRegisterForm('nhinguyen', '12345678', 'nhi@a.a', '0123456789', 'Viet Nam', 'Da Nang');
    cy.get('#send').click();
    expectPass();
  });

  it(`test case 2 - expect fail`, () => {
    fillOutRegisterForm('nhinguyen', '12345678', 'nhi@a.a', '0123456789', 'Viet Nam', 'Da Nang');
    cy.get('#send').click();
    expectFail();
  });

});
