# README

This repository is a reproduction for this issue over at Cypress side: https://github.com/cypress-io/cypress/issues/25174

## GitHub actions

The Cypress test `cypress/e2e/spec.cy.js` is running also in GitHub actions and the test failures can be seen there: https://github.com/valscion/cypress-cookie-issue-reproduction/actions?query=branch%3Amain

## Regression proof

There exists a pull request showing how the test passes with older version of Cypress:

* Cypress v11.2.0: https://github.com/valscion/cypress-cookie-issue-reproduction/pull/1

## Setup steps

* Install rbenv: https://github.com/rbenv/rbenv#installation
* Checkout this repository and `cd` to it
* Install same version of ruby as this repo uses: `rbenv install`
* Install ruby dependencies: `bundle install`
* Install npm dependencies: `npm install`

## To run Cypress

Open the test environment rails server in own terminal:

```
npm run cypress:rails
```

Run the Cypress app in another terminal:

```
npm run cypress:open
```

You can also access the test Rails server in a different browser using http://example.localtest.me:3333


## To run regular development server

The development server automatically reloads code changes while the test server doesn't.

```
bin/rails server
```

Then access the application with http://example.localtest.me:3000 to test cookies with domains.
