const mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
  });
var selectAllQuery = "SELECT * FROM student ORDER BY name";
conn.connect((err) => {
    if (err) throw err;
    console.log("connected successfully!! ");
    conn.query(selectAllQuery, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });