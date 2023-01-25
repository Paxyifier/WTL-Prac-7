const mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root'
});
conn.connect((err) => {
  if (err) throw err;
  console.log("connected successfully!! ");
  conn.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});