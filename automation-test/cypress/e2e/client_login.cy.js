const CLIENT_URL = "http://localhost:3100/";

const decisionTableCollection = [
  {
    username: "user",
    password: "User012!",
    shouldSuccess: true,
  },
  {
    username: "user1",
    password: "12345678user",
    shouldSuccess: false,
  },
  {
    username: "thuytam",
    password: "123456789",
    shouldSuccess: false,
  },
];

const boundaryCollection = [
  {
    username: "use",
    password: "Use0123!",
    shouldSuccess: false,
  },
  {
    username: "john",
    password: "John012!",
    shouldSuccess: true,
  },
  {
    username: "john1",
    password: "John123!",
    shouldSuccess: true,
  },
  {
    username: "cuutoivoitroioihelp",
    password: "HelpMe123!",
    shouldSuccess: true,
  },
  {
    username: "cuutoivoitroioiAiDai",
    password: "AiDai123!",
    shouldSuccess: true,
  },
  {
    username: "cuutoivoitroioialo115",
    password: "AloSos115!",
    shouldSuccess: false,
  },
  {
    username: "cuutoi",
    password: "Cuu115!",
    shouldSuccess: false,
  },
  {
    username: "helpme",
    password: "Help115!",
    shouldSuccess: true,
  },
  {
    username: "helpme1",
    password: "Help1115!",
    shouldSuccess: true,
  },
  {
    username: "sossos1",
    password: "Sossossossossossossossossossossossossossossossossossossosso115!",
    shouldSuccess: true,
  },
  {
    username: "sossos2",
    password: "Sossossossossossossossossossossossossossossossossossossossosso1!",
    shouldSuccess: true,
  },
  {
    username: "sossos3",
    password: "Sossossossossossossossossossossossossossossossossossossossosso12!",
    shouldSuccess: false,
  },
];

const equipvalenceCollection = [
  {
    username: "tramkem012",
    password: "TramKem123!",
    shouldSuccess: true,
  },
  {
    username: "tramkem123",
    password: "Tk1!",
    shouldSuccess: false,
  },
  {
    username: "tramkem234",
    password: "Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!",
    shouldSuccess: false,
  },
  {
    username: "tramkem321",
    password: "tramkem3!",
    shouldSuccess: false,
  },
  {
    username: "tramkem432",
    password: "TRAMKEM4!",
    shouldSuccess: false,
  },
  {
    username: "tramkem543",
    password: "Tramkem!",
    shouldSuccess: false,
  },
  {
    username: "tramkem654",
    password: "Tramkem6",
    shouldSuccess: false,
  },
  {
    username: "t",
    password: "Tramkem6!",
    shouldSuccess: false,
  },
  {
    username: "aivottoilendumvoietoetmophat",
    password: "Mophat123!",
    shouldSuccess: false,
  },
  {
    username: " mo phat ",
    password: "Mophat1234!",
    shouldSuccess: false,
  },
  {
    username: "mophat!!!!!!",
    password: "Mophat12345!",
    shouldSuccess: false,
  },
];

function goToLoginPage() {
  cy.get("#login-link-btn").click();
}

function fillOutLoginForm(username, password) {
  cy.get("#username").type("{selectall} {backspace}").type(username);
  cy.get("#password").type("{selectall} {backspace}").type(password);
}

function submitLoginForm() {
  cy.get("#login-form-submit").click();
}

function logout() {
  cy.get("#logout", { timeout: 10000 }).click();
}

describe("Login", () => {
  beforeEach(() => {
    cy.visit(CLIENT_URL);
    goToLoginPage();
  });

  [
    decisionTableCollection,
    boundaryCollection,
    equipvalenceCollection
  ].flat().forEach((testCase) => {
    console.log(testCase)
    const describe = testCase.shouldSuccess
      ? "should successful and display loggedIn user on right side"
      : "should fail, stay at login page and show error message";
    it(`With ${testCase.username}, ${describe}`, () => {
      fillOutLoginForm(testCase.username, testCase.password);
      submitLoginForm();

      if (testCase.shouldSuccess) {
        expectSuccessful(testCase.username);
      } else {
        expectFail();
      }
    });
  });
});

function expectFail() {
  cy.get("#error-message");
  cy.url().should("include", "/login");
}

function expectSuccessful(username) {
  cy.get("#logged-in-user").contains(username);
  cy.get("#logout").should("be.visible");
  logout();
  goToLoginPage();
}
