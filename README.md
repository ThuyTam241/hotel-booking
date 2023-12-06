# hotel-booking

Installation

You must download these tools:
- node (latest stable version)
- mongodb

You have to run `npm install` in each apps. And change the MONGO variable in `api/.env` to your mongo uri. 
Then you can run all apps with `npm start`:

- Go to /admin and run `npm start`, and access localhost:5000 to see the result
- Go to /client and run `npm start`, and access localhost:8800 to see the result
- Go to /api, run `npm start`, and access localhost:6000 to see the result

### Cypress
- Write test case in `/automation-test/cypress/e2e`. Notice that the test file name must be `.cy.js`
- Open project `automation-test` in cypress application to run the test
