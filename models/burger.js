var orms = require('../config/orms.js');

var burgers = {
  all: function(cb) {
    orm.selectAll('burgers', function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  create: function(value, cb) {
    orm.insertOne('burgers', 'burger_name', value, function(err, res) {
      if (err) throw err;
      cb(res);
    });
  }






};

module.exports = burgers;
