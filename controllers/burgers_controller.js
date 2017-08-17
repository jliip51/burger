var express = require('express');
var burgers = require('../models/burger.js');

var router = express.Router();

 function getSum(data){
  var eatenArray = [];
  var sum;
  for (i = 0; i < data.length; i++) {
    eatenArray.push(data[i].count_eaten);
  }
  function sumArr(total, num) {
  return total + num;
  };
  sum = eatenArray.reduce(sumArr);
  return sum;
};

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burger: data,
      total: getSum(data)
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/add", function(req, res) {
  console.log("New Name Test:" + req.body.name +":Test");
  console.log(req.body.name.length)
  if (req.body.name.length > 0 && req.body.name !== " ")  {
    console.log(req.body.name);
    burgers.create(req.body.name, function(resp) {
      console.log(resp);
      return res.redirect("/");
    });
  } else {
  burgers.all(function(data) {
    var hbsObject = {
      burger: data,
      total: getSum(data),
      alert: 'Input Name Before Clicking Submit Button.'
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
}
});

router.put("/:id", function(req, res) {
  burgers.update(req.params.id, req.body.devoured, function(result) {
  console.log(result);
  res.redirect("/");
  });
});

module.exports = router;
