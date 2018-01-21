const assert = require("assert");
const matchNames = require("../matchNames").matchNames;

//match names in the array of names
matchNamesResult = matchNames("a", ["a", "b", "c"]);

describe("Test the name matching function", function(){
  describe("Returns matched names from array", function(){
    it("should equal 'a'", function(){
      assert.equal(matchNamesResult, "a");
      //check type array
    });
  });
});
