var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});
var createTableQuery = "CREATE TABLE student( roll_no NUMERIC(4), name VARCHAR(15), address VARCHAR(15), contact_no NUMERIC(10), dept VARCHAR(15))";
conn.connect((err) => {
    if (err) throw err;
    console.log("connected successfully!! ");
    conn.query(createTableQuery,  (err, result)=> {
      if (err) throw err;
      console.log("Table Created");
    });
  });