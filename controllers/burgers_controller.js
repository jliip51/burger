var express = require('express');
var burgers = require('../models/burger.js');

var router = express.router();

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burgers.create(req.body.name, function(resp) {
    console.log(resp);
    res.redirect("/");
  });
});
