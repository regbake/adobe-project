var express = require("express");
var path = require("path");
var app = express();

//to use ejs for templating
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("index", {city: " Seattle"});
});

app.listen(3000);
