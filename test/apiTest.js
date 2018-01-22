const chai = require("chai");
const expect = require("chai").expect;
const app = require("../index.js"); //the app

chai.use(require("chai-http"));

describe("/GET Name API endpoint", function(){
  it("should return 200, json, and object", function(){
    return chai.request(app)
      .get("/api/names")
      .then(function(res){
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("object");
      });
  });

  it("should return Not Found", function(){
    return chai.request(app)
      .get("/null_path")
      .then(function(res){
        throw new Error("Path does exist!");
      })
      .catch(function(err){
        expect(err).to.have.status(404);
      });
  });
});

describe("/POST API called by AJAX", function(){
  it("returns matched names etc.", function(){
    return chai.request(app)
      .post("/api/names")
      .type("form")
      .send({
        data: "Reg"
      })
      .then(function(res){
        expect(res).to.have.status(200);
        expect(res).to.be.html; //return html
      });
  });

  xit("Bad request", function(){
    return chai.request(app)
      .post("/api/names")
      .send({
        data: "Reg"
      })
      .then(function(res){
        expect(res).to.be.html; //return html
        throw new Error("Not form data");
      })
      .catch(function(err){
        expect(err).to.have.status(500);
      });
  });

  describe("/GET root route", function(){
    it("should return html", function(){
      return chai.request(app)
        .get("/")
        .then(function(res){
          expect(res).to.be.html;
          expect(res).to.have.status(200);
        });
    });
  });
});
