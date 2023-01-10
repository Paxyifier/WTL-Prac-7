var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_practicalUser",
    password: "M#TNxR!ExXFK6hZ"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});