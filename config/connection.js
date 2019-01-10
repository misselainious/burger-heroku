// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "flute0207",
//   database: "burger_db"
// });

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "flute0207",
    database: "burger_db"
    // host: 's',
    // user: 'x8id18t5c4vus6jo',
    // password: 'uv530txieobwnob6',
    // database: 'k5kzjbpq7uiwrxlj'
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
