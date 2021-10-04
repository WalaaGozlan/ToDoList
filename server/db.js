const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "walaa.mysql89",
    database:"todoapp" 
})

module.exports = db;