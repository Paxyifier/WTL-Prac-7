const mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});
conn.connect((err)=>{
    if (err) throw err;
    console.log("connected successfully!! ");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
conn.end();
conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});
conn.connect((err)=>{
    if (err) throw err;
    var createTableQuery = "CREATE TABLE student( roll_no NUMERIC(4), )"
})