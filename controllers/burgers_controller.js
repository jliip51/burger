var express = require('express');
var burgers = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var eatenArray = [];
    for (i = 0; i < data.length; i++) {
      eatenArray.push(data[i].count_eaten);
    }
    function sumArr(total, num) {
    return total + num;
    };
    var hbsObject = {
      burger: data,
      total: eatenArray.reduce(sumArr)
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

router.put("/:id", function(req, res) {
  // var condition = "id = " + req.params.id;
  burgers.update(req.params.id, req.body.devoured, function(result) {
  console.log(result);
  res.redirect("/");
  });
});

module.exports = router;
