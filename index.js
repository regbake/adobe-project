const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express(); //initiate express

//to use ejs for templating
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));

//use fs to grab the names from json
var names = fs.readFileSync("./names.json");
names = JSON.parse(names);

//write a function to see if the names match...
function matchNames(string) {
  var nameArray = names.data.names;
  var matchArray = [];

  nameArray.forEach(function(name){
    var check = name.toLowerCase().includes(string);

    if (check) {
      matchArray.push(name);
    }
  });

  return matchArray;
};



//for the default/home page
app.get("/", function(req, res){
  //send the info to the front
  res.render("index", {
    city: " Seattle"
  });
});

app.get("/api/names", function(req, res){
  res.send({data: names});
});

//send the name to the API using Post method (more secure than Get)
app.post("/api/names", function(req, res){
  let search = req.body.data;

  //loop through names.json and return all entries that match the search param

  res.render("index", {
    city: " Seattle"
  });
});


app.listen(3000);

//for testing
module.exports = app;
