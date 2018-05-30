// MySQL
// ============================================================
let mysql = require("mysql");

let connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: ""
})

connection.connect(function(err) {
    if(err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
})

// Export to ORM
module.exports = connection;