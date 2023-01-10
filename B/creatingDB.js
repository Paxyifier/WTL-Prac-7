var mysql = require("mysql");

var con = mysql.createConnection({
  host: "sql.freedb.tech",
  user: "freedb_practicalUser",
  password: "M#TNxR!ExXFK6hZ",
  port: "3306"  
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
