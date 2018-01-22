const chai = require("chai");
const expect = require("chai").expect;
const app = require("../index.js"); //the app

chai.use(require("chai-http"));

describe("Name API endpoint", function(){
  it("should return json", function(){
    return chai.request(app)
      .get("/api/names")
      .then(function(res){
        expect(res).to.be.json;
        expect(res.body).to.be.an("object");
      });
  });
});
