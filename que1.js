const mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root'
});
conn.connect((err) => {
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
  password: 'root',
  database: 'mydb'
});
var createTableQuery = "CREATE TABLE student( roll_no NUMERIC(4), name VARCHAR(15), address VARCHAR(15), contact_no NUMERIC(10), dept VARCHAR(15))";
var insertIntoTable = "INSERT INTO student (roll_no, name, address, contact_no, dept) VALUES ? ";
const studentData = [[1001, 'John Doe', '123 Main St', 1234567890, 'Computer Science'],
[1002, 'Jane Smith', '456 Park Ave', 9876543210, 'Mathematics'],
[1003, 'Bob Johnson', '789 Elm St', 1111111111, 'Physics'],
[1004, 'Samantha Brown', '321 Oak St', 2222222222, 'Chemistry'],
[1005, 'Michael Davis', '159 Pine St', 3333333333, 'Biology'],
[1006, 'Ashley Taylor', '753 Cedar St', 4444444444, 'Geography'],
[1007, 'Jessica Anderson', '147 Oak St', 5555555555, 'History'],
[1008, 'Christopher Thomas', '369 Maple St', 6666666666, 'Political Science'],
[1009, 'Matthew Moore', '753 Elm St', 7777777777, 'Economics'],
[1010, 'Amanda Martin', '964 Pine St', 8888888888, 'Sociology']
];
var modifyQuery = "UPDATE student SET name='Chloe Sullivan' WHERE roll_no=1006";
var selectAllQuery = "SELECT * FROM student";
conn.connect(async (err) => {
  if (err) throw err;
  conn.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
  })
  conn.query(insertIntoTable, studentData, (err, result => {
    if (err) throw err;
    console.log(result);
  }));
  conn.query(modifyQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  conn.query(selectAllQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
  })
});