const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express(); //initiate express
const matchNames = require("./matchNames.js").matchNames; //separate function

//to use ejs for templating
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));

//use fs to grab the names from json
var names = fs.readFileSync("./names.json");
names = JSON.parse(names);
var nameArray = names.data.names;

//for the default/home page
app.get("/", function(req, res){
  //send the info to the front
  res.render("index", {
    city: " Seattle",
    matches: []
  });
});

//names api
app.get("/api/names", function(req, res){
  res.send({data: names});
});

//send the name to the API using Post method (more secure than Get)
app.post("/api/names", function(req, res){
  let search = req.body.data;
  let matches = matchNames(search, nameArray);

  res.render("index", {
    city: " Seattle",
    matches: matches
  });
});

app.listen(3000, function(){
  console.log("Listening on port 3000, yo!");
});

//for testing
module.exports = app;
