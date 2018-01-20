const assert = require("assert");
const matchNames = require("../matchNames").matchNames;

matchNamesResult = matchNames("a", ["a", "b", "c"]);

describe("A function", function(){
  describe("Returns a matched names from array", function(){
    it("should equal a", function(){
      assert.equal(matchNamesResult, "a");
    });
  });
});
