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
  var names = fs.readFileSync("./names.json");
  names = JSON.parse(names);
  console.log(names.data.names)

  res.render("index", {
    city: " Seattle",
    names: names.data.names
  });
});



app.listen(3000);
