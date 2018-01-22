# adobe-proj

This is a Node/Express project to show API connectivity and testing (Unit and Integration) with mocha, chai, and karma.

File Structure:

  Root/

    --/test/
    ----/apiTest.js (backend unit tests)
    ----/matchNamesTest.js (function unit test)
    ----/karmaTest/
    ------/front-endTest.js (front end integration test)
    --/views/
    ----/index.ejs (client)
    --/index.js (server)
    --/matchNames.js (function module)
    --/names.json (names array)


# Server

GET "/", root route

GET route "/api/names" to access names array

POST route "/api/names" to match string with name

# Client

A button to query the Names API and return all names.

A form to search for name matches based on string.

# Testing

Backend Unit tests are run with Mocha/Chai/Chai-http

You can run Unit tests with "npm test" in root directory.

# Karma Test

The big perk of testing with Karma is that you can choose which browsers your app will run in, I only use Chrome and Safari and will be testing in those.

Karma is not set up to run with express, so mock data will be passed in with the test fixture.
Run with "karma start" in root directory.

# Comments

The {once: true} parameter for the .addEventListener is not supported in Safari.

# Future work

Setting up Test Coverage (ie. Istanbul) would be helpful, more specific/test coverage can
be expanded.
