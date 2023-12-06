const CLIENT_URL = 'http://localhost:3100/';

const validUserCollection = [
  {
    username: 'john1',
    password: '12345'
  },
  {
    username: 'john2',
    password: '12345'
  },
  {
    username: 'john3',
    password: '12345'
  },
  {
    username: 'john5',
    password: '12345'
  }
]

const invalidUserCollection = [
  {
    username: 'john7',
    password: '12345'
  },
  {
    username: 'john8',
    password: '12345'
  },
  {
    username: 'john9',
    password: '12345'
  },
  {
    username: 'john10',
    password: '12345'
  }
]

function goToLoginPage() {
  cy.get('#login-link-btn').click();
}

function fillOutLoginForm(username, password) {
  cy.get('#username').type('{selectall} {backspace}').type(username);
  cy.get('#password').type('{selectall} {backspace}').type(password);
}

function submitLoginForm() {
  cy.get('#login-form-submit').click();
}

function logout() {
  cy.get('#logout', { timeout: 10000 }).click();
}

describe('Login', () => {
  beforeEach(() => {
    cy.visit(CLIENT_URL);
    goToLoginPage();
  })

  validUserCollection.forEach((credential) => {
    it(`With ${credential.username}, should successful and display loggedIn user on right side`, () => {
      fillOutLoginForm(credential.username, credential.password);
      submitLoginForm();
  
      cy.get('#logged-in-user').contains(credential.username);
      cy.get('#logout').should('be.visible');
      logout();
      goToLoginPage();
    })
  })

  invalidUserCollection.forEach((credential) => {
    it(`With ${credential.username}, should fail, stay at login page and show error message`, () => {
      fillOutLoginForm(credential.username, credential.password);
      submitLoginForm();
  
      cy.get('#error-message').contains('User not found');
      cy.url().should('include', '/login')
    })
  })
})