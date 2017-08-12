var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var path = require("path");

var port = process.env.PORT || 5000;

var app = express ();

app.get("/", function (req, res) {

  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port);
console.log("Connected on port: " + port);
