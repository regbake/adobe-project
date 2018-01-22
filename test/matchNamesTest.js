const assert = require("assert");
const expect = require("chai").expect;
const matchNames = require("../matchNames").matchNames;

//match names in the array of names
var matchNamesResult = matchNames("a", ["a", "ab", "c"]);
var noMatchResult = matchNames("a", ["b", "c", "d"]);

describe("Test the name matching function", function(){
  describe("Returns matched names from array", function(){
    it("should equal 'a' and 'ab'", function(){
      assert.equal(matchNamesResult[0], "a");
      assert.equal(matchNamesResult[1], "ab");
    });

    it("should be an array", function(){
      expect(matchNamesResult).to.be.an("array");
    })
  });

  describe("No matches", function(){
    it("Should return 'no matches'", function(){
      assert.equal(noMatchResult, "no matches found");
    });
  });
});
