var orm = require('../config/orm.js');

var burgers = {
  all: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  create: function(value, cb) {
    orm.insertOne('burgers', 'burger_name', value, function(res) {
      console.log(res);
      cb(res);
    });
  },

  update: function(id, devoured, cb) {
    orm.update("burgers", id, devoured, function(res) {
      console.log(res);
      cb(res);
    });
  },
};

module.exports = burgers;
