const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

const promisePool = pool.promise();

module.exports = {
  pool,
  promisePool
};
