const CLIENT_URL = "http://localhost:3100/";

const decisionTableCollection = [
  {
    username: "song@ chet$ co^ so*",
    password: "etoet567!",
    email: "songchetcoso@gmail.com",
    phone: "1234567890",
    country: "Viet Nam",
    city: "Ha Noi",
    shouldSuccess: false,
  },
  {
    username: "songchetcoso1",
    password: "songchetcoso",
    email: "songchetcoso1@gmail.com",
    phone: "1234567890",
    country: "Viet Nam",
    city: "Ha Noi",
    shouldSuccess: false,
  },
  {
    username: "songchetcoso2",
    password: "Songchetcoso234!",
    email: "#song%%%%%chetcosogmail.com&^",
    phone: "1234567890",
    country: "Viet Nam",
    city: "Ha Noi",
    shouldSuccess: false,
  },
  {
    username: "songchetcoso3",
    password: "Songchetcoso345!",
    email: "songchetcoso3@gmail.com",
    phone: "1234####567dssadasd890",
    country: "Viet Nam",
    city: "Ha Noi",
    shouldSuccess: false,
  },
  {
    username: "songchetcoso4",
    password: "Songchetcoso456!",
    email: "songchetcoso4@gmail.com",
    phone: "1234567890",
    country: "Viet$%%^Nam",
    city: "Ha Noi",
    shouldSuccess: false,
  },
  {
    username: "songchetcoso5",
    password: "Songchetcoso567!",
    email: "songchetcoso5@gmail.com",
    phone: "1234567890",
    country: "Viet Nam",
    city: "Ha^$@@%%Noi",
    shouldSuccess: false,
  },
  {
    username: "songchetcoso5",
    password: "Songchetcoso507!",
    email: "songchetcoso52@gmail.com",
    phone: "1234567890",
    country: "Viet Nam",
    city: "Ha Noi",
    shouldSuccess: false,
  },
  {
    username: "songchetcoso6",
    password: "Songchetcoso678!",
    email: "songchetcoso5@gmail.com",
    phone: "1234567890",
    country: "Viet Nam",
    city: "Ha Noi",
    shouldSuccess: false,
  },
  {
    username: "songchetcoso4",
    password: "Songchetcoso241!",
    email: "songchetcoso4@gmail.com",
    phone: "1234567890",
    country: "Viet Nam",
    city: "Ha Noi",
    shouldSuccess: false,
  },
  {
    username: "sapxongroihuhu",
    password: "sapxongroihuhu012!",
    email: "sapxongroihuhu@a.a",
    phone: "1234567890",
    country: "Viet Nam",
    city: "Ha Noi",
    shouldSuccess: true,
  },
];

const equipvalenceCollection = [
  {
    username: "mophat",
    password: "Mophat012!",
    email: "mophat@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "mo",
    password: "Mophat012!",
    email: "mo@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "mophatmophatmophatmophatmophat",
    password: "Mophat012!",
    email: "mophatmophat@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "mo phat",
    password: "Mophat012!",
    email: "mo-phat@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "mo&phat",
    password: "Mophat012!",
    email: "mophat012@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "mophat1",
    password: "mo1!",
    email: "mophat1@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "mophat1mophat1",
    password:
      "Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!Tk1!",
    email: "mophat1mophat1@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem3",
    password: "tramkem3!",
    email: "tramkem3@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem",
    password: "TRAMKEM012!",
    email: "tramkem@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem1",
    password: "Tramkem!",
    email: "tramkem1@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem2",
    password: "Tramkem234",
    email: "tramkem2@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem32",
    password: "Tramkem345!",
    email: "@",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem4",
    password: "Tramkem456!",
    email: "@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem5",
    password: "Tramkem567!",
    email:
      "tramkemquaditroioicuutoivoivottoilentramkemquaditroioicuutoivoivottoilen@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem6",
    password: "Tramkem678!",
    email: "tramkem@a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem7",
    password: "Tramkem789!",
    email:
      "tramkem@gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmaillllgmailgmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem8",
    password: "Tramkem890!",
    email: "tram#$&kem@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem9",
    password: "Tramkem901!",
    email: "tram_-kem@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem24",
    password: "Tramkem241!",
    email: "-tramkem@gmail.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem203",
    password: "Tramkem203!",
    email: "tramkem@gmail.com_",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem213",
    password: "Tramkem213!",
    email: "tramkem213@gmail.com",
    phone: "012",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem113",
    password: "Tramkem113!",
    email: "tramkem113@gmail.com",
    phone: "012345012345012345012345012345012345",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "tramkem115",
    password: "Tramkem115!",
    email: "tramkem115@gmail.com",
    phone: "01tramkem235",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "etoet",
    password: "etoet012!",
    email: "etoet@gmail.com",
    phone: "1234567890",
    country: "V",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "etoet1",
    password: "etoet123!",
    email: "etoet1@gmail.com",
    phone: "1234567890",
    country:
      "Cong Hoa Xa Hoi Chu Nghia Viet Nam Cong Hoa Xa Hoi Chu Nghia Viet Nam Cong Hoa Xa Hoi Chu Nghia Viet Nam Cong Hoa Xa Hoi Chu Nghia Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "etoet2",
    password: "etoet234!",
    email: "etoet2@gmail.com",
    phone: "1234567890",
    country: "Viet#$%N234am",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "etoet3",
    password: "etoet345!",
    email: "etoet3@gmail.com",
    phone: "1234567890",
    country: "Viet Nam",
    city: "D",
    shouldSuccess: false,
  },
  {
    username: "etoet4",
    password: "etoet456!",
    email: "etoet4@gmail.com",
    phone: "1234567890",
    country: "Viet Nam",
    city: "Ba Ria Vung Tau Ba Ria Vung Tau Ba Ria Vung Tau Ba Ria Vung Tau Ba Ria Vung Tau",
    shouldSuccess: false,
  },
  {
    username: "etoet5",
    password: "etoet567!",
    email: "etoet5@gmail.com",
    phone: "1234567890",
    country: "Viet Nam",
    city: "D#$a 23N432a#$ng",
    shouldSuccess: false,
  },
];

const boundaryCollection = [
  {
    username: "use",
    password: "Use0123!",
    email: "use@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "john",
    password: "John012!",
    email: "john@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "john1",
    password: "John123!",
    email: "john1@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "cuutoivoitroioihelp",
    password: "HelpMe123!",
    email: "cuutoivoitroioihelp@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "cuutoivoitroioiAiDai",
    password: "AiDai123!",
    email: "cuutoivoitroioiAiDai@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "cuutoivoitroioialo115",
    password: "AloSos115!",
    email: "cuutoivoitroioialo115@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "cuutoi",
    password: "Cuu115!",
    email: "cuutoi@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "helpme",
    password: "Help115!",
    email: "helpme@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "helpme1",
    password: "Help1115!",
    email: "helpme1@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "sossos1",
    password: "Sossossossossossossossossossossossossossossossossossossosso115!",
    email: "sossos1@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "sossos2",
    password:
      "Sossossossossossossossossossossossossossossossossossossossosso1!",
    email: "sossos2@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "sossos3",
    password:
      "Sossossossossossossossossossossossossossossossossossossossosso12!",
    email: "sossos3@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "john2",
    password: "John234!",
    email: "john2@a.a",
    phone: "012345678",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "john3",
    password: "John345!",
    email: "john3@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "john4",
    password: "John456!",
    email: "john4@a.a",
    phone: "01234567891",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "john5",
    password: "John567!",
    email: "john5@a.a",
    phone: "0123456789",
    country: "V",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "john6",
    password: "John678!",
    email: "john6@a.a",
    phone: "0123456789",
    country: "VN",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "john7",
    password: "John789!",
    email: "john7@a.a",
    phone: "0123456789",
    country: "Lao",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "john8",
    password: "John890!",
    email: "john8@a.a",
    phone: "0123456789",
    country:
      "United Kingdom United Kingdom United Kingdom United Kingdom United Kingdom United Kingdommmmmmmmmmm",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "john9",
    password: "John91011!",
    email: "john9@a.a",
    phone: "0123456789",
    country:
      "United Kingdom United Kingdom United Kingdom United Kingdom United Kingdom United Kingdommmmmmmmmmmm",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "john10",
    password: "John101112!",
    email: "john10@a.a",
    phone: "0123456789",
    country:
      "United Kingdom United Kingdom United Kingdom United Kingdom United Kingdom United Kingdommmmmmmmmmmmm",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "cuutoi1",
    password: "Cuutoi123!",
    email: "cuutoi1@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "D",
    shouldSuccess: false,
  },
  {
    username: "cuutoi0",
    password: "Cuutoi012!",
    email: "cuutoi0@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "DN",
    shouldSuccess: true,
  },
  {
    username: "cuutoi2",
    password: "Cuutoi234!",
    email: "cuutoi2@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "HCM",
    shouldSuccess: true,
  },
  {
    username: "cuutoi3",
    password: "Cuu345!",
    email: "cuutoi3@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Ba Ria Vung Tau Ba Ria Vung Tau Ba Ria Vung Tauuu",
    shouldSuccess: true,
  },
  {
    username: "cuutoi4",
    password: "Cuu456!",
    email: "cuutoi4@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Ba Ria Vung Tau Ba Ria Vung Tau Ba Ria Vung Tauuuu",
    shouldSuccess: true,
  },
  {
    username: "cuutoi5",
    password: "Cuu567!",
    email: "cuutoi5@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Ba Ria Vung Tau Ba Ria Vung Tau Ba Ria Vung Tauuuuu",
    shouldSuccess: false,
  },
  {
    username: "helpme2",
    password: "Help2115!",
    email: "@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "helpme3",
    password: "Help3115!",
    email: "h@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "helpme4",
    password: "Help4115!",
    email: "he@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "helpme45",
    password: "Help41155!",
    email:
      "helpme4helpme4helpme4helpme4helpme4helpme4helpme4helpme4helpme4@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "helpme5",
    password: "Help5115!",
    email:
      "helpme4helpme4helpme4helpme4helpme4helpme4helpme4helpme4helpme45@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "helpme6",
    password: "Help6115!",
    email:
      "helpme4helpme4helpme4helpme4helpme4helpme4helpme4helpme4helpme456@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "helpme7",
    password: "Help7115!",
    email: "helpme7@aa",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
  {
    username: "helpme8",
    password: "Help8115!",
    email: "helpme8@a.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "helpme9",
    password: "Help9115!",
    email: "helpme9@aa.a",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "helpmee",
    password: "Helpmee9115!",
    email:
      "helpmee@gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmaill.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "helpmem",
    password: "Helpmem115!",
    email:
      "helpmem@gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailll.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: true,
  },
  {
    username: "helpmeh",
    password: "Helpmeh9115!",
    email:
      "helpmeh@gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmaillll.com",
    phone: "0123456789",
    country: "Viet Nam",
    city: "Da Nang",
    shouldSuccess: false,
  },
];

function goToRegisterPage() {
  cy.get("#registered-link-btn").click();
}

function fillOutRegisterForm({username, password, email, phone, country, city}) {
  cy.get("#username").type("{selectall} {backspace}").type(username);
  cy.get("#password").type("{selectall} {backspace}").type(password);
  cy.get("#email").type("{selectall} {backspace}").type(email);
  cy.get("#phone").type("{selectall} {backspace}").type(phone);
  cy.get("#country").type("{selectall} {backspace}").type(country);
  cy.get("#city").type("{selectall} {backspace}").type(city);
}

function submitRegisterForm() {
  cy.get("#login-form-submit").click();
}

function backRegisterPage() {
  cy.go('back');
}

describe("Register", () => {
  beforeEach(() => {
    cy.visit(CLIENT_URL);
    goToRegisterPage();
  });

  [
    boundaryCollection,
    equipvalenceCollection,
    decisionTableCollection
  ].flat().forEach((testCase) => {
    const describe = testCase.shouldSuccess
      ? "should successful and display loggedIn user on right side"
      : "should fail, stay at login page and show error message";
    it(`With ${testCase.username}, ${describe}`, () => {
      fillOutRegisterForm(testCase);
      submitRegisterForm();

      if (testCase.shouldSuccess) {
        expectSuccessful();
      } else {
        expectFail();
      }
    });
  });
});

function expectFail() {
  cy.get("#error-message");
  cy.url().should("include", "/register");
}

function expectSuccessful() {
  cy.url().should("include", "/login");
  backRegisterPage();
}
