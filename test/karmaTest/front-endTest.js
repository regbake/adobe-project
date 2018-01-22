const chai = require("chai");
const expect = require("chai").expect;
const $ = require("jquery");

var names = ['Reggie', 'Mitchel', 'Justin', 'Ichiro'] //declared local

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
    it("var names is array", function(){ //local array of names
      expect(names).to.be.an("array");
    });

    it("Table has length 1", function(){ //before adding names
      var table = document.getElementById("allNameTable");

      expect(table.rows.length).to.equal(1);
    });
  });

  //after inserting 4 names
  describe("After inserting names", function(){
    it("Table has length 5", function(){
      var table = document.getElementById("allNameTable");

      names.forEach(function(name){
        $("#allNameTable").append("<tr><td>"+ name +"</td></tr>");
      });

      expect(table.rows.length).to.equal(5);
    });
  });

  describe("Test button functionality", function(){
    it("Click button once to add names to table", function(){
      var button = document.getElementById("button");
      var table = document.getElementById("allNameTable");

      //add the event handler to the button
      button.addEventListener("click", function(e){
        names.forEach(function(name){
          $("#allNameTable").append("<tr><td>"+ name +"</td></tr>");
        });
      }, {once: true});

      expect(table.rows.length).to.equal(1);
      button.click();
      expect(table.rows.length).to.equal(5);
      button.click(); //test the "Once: true" functionality, non compatible with safari
      expect(table.rows.length).to.equal(5);
    });
  });
});

















//fin
