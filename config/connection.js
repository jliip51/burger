var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL); // hoisting
} else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'WIguIw2bv$$',
    database: 'burgers_db'
  });
}

module.exports connection = connection.connect(function(err){
  if (err) {
    console.log('Error connecting' + err.stack);
    return;
  }
  console.log('Connected as id :' + connection.threadId);
});
