var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",

  user: "yourusername",

  password: "yourpassword",

  database: "Student",
});

con.connect(function (err) {
  if (err) throw err;

  console.log("Connected!");

  var sql =
    "INSERT INTO Mca(Rollno,name, address) VALUES (1,'Company Inc', 'Highway 37')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
