var connection = require('./connection.js');

var orm = {
  selectAll: function(tableName, cb) {
  var queryString = 'SELECT * FROM ??;';
  connection.query(queryString, [tableName], function(err, data) {
    if (err) throw err;
    cb(data);
  });
},

  insertOne: function(tableName, column, value, cb) {
  var queryString = 'INSERT INTO ?? (??) VALUES (?)';
  console.log(queryString);
  connection.query(queryString, [tableName, column, value] , function(err, data) {
    if (err) throw err;
    cb(data);
  });
},

update: function(table, id, devoured, cb) {
  if (parseInt(devoured) === 0) {
    var queryString = "UPDATE ?? SET devoured=true, count_eaten=count_eaten + 1 WHERE id=?";
  } else {
    queryString = "UPDATE ?? SET devoured=false WHERE id=?";
  }
  connection.query(queryString, [table, id], function(err, data) {
    if (err) throw err;
    cb(data);
  });
},
}

module.exports = orm;
