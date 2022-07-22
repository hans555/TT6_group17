const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    user: "admin",
    host: "dbsseed.clccjpvfxzeh.us-east-1.rds.amazonaws.com",
    database: "multicurrency",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

module.exports = {
  pool,
};


let config = {
  
}