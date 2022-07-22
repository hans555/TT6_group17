const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
    user: "admin",
    host: "dbsseed.clccjpvfxzeh.us-east-1.rds.amazonaws.com",
    database: "multicurrency",
    password: "password",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

const promisePool = pool.promise();

module.exports = {
  promisePool
};