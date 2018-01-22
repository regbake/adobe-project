const chai = require("chai");
const expect = require("chai").expect;

//spawn the test fixture
beforeEach(function(){
  var fixture = "...";

  document.body.insertAdjacentHTML(
    "afterbegin",
    fixture);
});

//remove fixture from DOM
afterEach(function{
  document.body.removeChild(document.getElementById("fixture"));
});
