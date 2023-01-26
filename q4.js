const mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});
var modifyQuery = "UPDATE student SET name='Chloe Sullivan' WHERE roll_no=1006";
conn.connect((err) => {
    if (err) throw err;
    console.log("connected successfully!! ");
    conn.query(modifyQuery, function (err, result) {
      if (err) throw err;
      console.log("Data Updated");
    });
  });