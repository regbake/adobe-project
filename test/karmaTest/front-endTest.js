const chai = require("chai");
const expect = require("chai").expect;
const fs = require("fs");
const $ = require("jquery");

var names = ['Reggie', 'Mitchel', 'Justin', 'Ichiro']

//spawn the test fixture
beforeEach(function(){
  var fixture = "<div id='fixture'><button id='button'>Display Names</button>" +
    "<table id='allNameTable'><tr><th>All Names</th></tr></table>" +
    "</div>";

  document.body.insertAdjacentHTML(
    "afterbegin",
    fixture);
});

//remove fixture from DOM
afterEach(function(){
  document.body.removeChild(document.getElementById("fixture"));
});

describe("Front end testing", function(){
  describe("Test the All Names table, before adding names", function(){
    xit("var names is array", function(){ //local array of names
      expect(names).to.be.an("array");
    });

    xit("Table has length 1", function(){ //before adding names
      var table = document.getElementById("allNameTable");

      expect(table.rows.length).to.equal(1);
    });
  });

  describe("After inserting names", function(){
    it("Table has length 5", function(){
      var table = document.getElementById("allNameTable");

      names.forEach(function(name){
        $("#allNameTable").append("<tr><td>"+ name +"</td></tr>");
      });

      expect(table.rows.length).to.equal(5);
    });
  });
});

















//fin
