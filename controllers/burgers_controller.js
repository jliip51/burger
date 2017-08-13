var express = require('express');
var burgers = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/add", function(req, res) {
  console.log(req.body.name);
  burgers.create(req.body.name, function(resp) {
    console.log(resp);
    res.redirect("/");
  });
});

module.exports = router;
