#adobe-proj

This is a Node/Express project to show API connectivity and testing (Unit and Integration) with mocha, chai, and karma.

#Testing

Backend Unit tests are run with Mocha/Chai/Chai-http

You can run Unit tests with "npm test" in root directory.

#Karma Test

The big perk of testing with Karma is that you can choose which browsers your app will run in, I only use Chrome and Safari and will be testing in those.

Karma is not set up to run with express, so mock data will be passed in with the test fixture.
Run with "karma start" in root directory.



#Future work

Setting up Test Coverage (ie. Istanbul) would be helpful.
