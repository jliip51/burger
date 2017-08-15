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

update: function(table, objColVals, condition, cb) {
  var queryString = "UPDATE " + table;

  queryString += " SET ";
  queryString += objToSql(objColVals);
  queryString += " WHERE ";
  queryString += condition;

  console.log(queryString);
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},
}

module.exports = orm;
