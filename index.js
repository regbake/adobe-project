var express = require("express");
var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express(); //initiate express

//to use ejs for templating
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));

//for the default/home page
app.get("/", function(req, res){
  //use fs to grab the json
  var names = fs.readFileSync("./names.json");
  names = JSON.parse(names);

  //send the info to the front
  res.render("index", {
    city: " Seattle",
    names: names.data.names
  });
});

app.get("/api/names", function(req, res){
  res.send({data: " Oakland??"});
});

//send the name to the API using Post method (more secure than Get)
app.post("/api/names", function(req, res){
  console.log(req.body.data);
  res.redirect("/");
});


app.listen(3000);
