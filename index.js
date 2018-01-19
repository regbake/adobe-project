var express = require("express");
var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express(); //initiate express

//to use ejs for templating
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));

//use fs to grab the json
var names = fs.readFileSync("./names.json");
names = JSON.parse(names);

//for the default/home page
app.get("/", function(req, res){
  //send the info to the front
  res.render("index", {
    city: " Seattle",
    names: names.data.names,
    matchName: [1,2,3]
  });
});

app.get("/api/names", function(req, res){
  res.send({data: " Oakland??"});
});

//send the name to the API using Post method (more secure than Get)
app.post("/api/names", function(req, res){
  let matchName = [req.body.data, 2, 3];

  //send the info to the front
  res.render("index", {
    city: " Seattle",
    names: names.data.names,
    matchName: matchName
  });
  //we are getting the name we want to search for
  //find if it matches any names in the API then
  //spit those matching names back to the front

  // res.redirect("/");
});


app.listen(3000);
