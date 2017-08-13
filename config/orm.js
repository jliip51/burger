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
//
//   updateOne: function() {
//   var queryString =
//   connection.query(queryString, , function(err, data) {
//     if (err) throw err;
//     cb(data);
//   });
// }
}

module.exports = orm;
