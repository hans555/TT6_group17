const { getConnection, promisePool } = require("./database");
const jsonic = require("jsonic");

//Functionality 1
async function handleLogin(req, res) {
  const body = jsonic(req.body);
  const { username, password } = body;
  try {
    const [rows] = await promisePool.query(
      `SELECT * from user WHERE username = '${username}' AND password = '${password}'`
    );
    if (rows.length === 0) {
      res.status(500).end();
    } else {
      res.status(200).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
}

//Functionality 2
async function handleGetExchangeRate(req, res) {
  const body = jsonic(req.body);
  try {
    const [rows, fields] = await promisePool.query(
      "SELECT base_currency, exchange_currency, rate from exchange_rate"
    );
    console.log(rows);
    console.log(body);
    res.status(200).json({ rows });
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

//Functionality 3
async function handleGetCurrencyWallet(req, res) {
  const body = jsonic(req.body);
  try {
    const [rows, fields] = await promisePool.query(
      `SELECT * FROM currency WHERE wallet_id = ${body.wallet_id}`
    );
    console.log(rows);
    console.log(body.wallet_id);
    res.status(200).json({ rows });
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

//Functionality 4
async function handlePostTransaction(req, res) {
  const body = jsonic(req.body);
  try {
    const [rows, fields] = await promisePool.query(
      "SELECT rate from exchange_rate"
    );
    console.log(rows);
    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

//Functionality 5
async function handleGetWallet(req, res) {
  const body = jsonic(req.body);
  try {
    const [rows, fields] = await promisePool.query(
      "SELECT user_id, name from wallet"
    );
    console.log(rows);
    res.status(200).json({ rows });
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

//Functionality 6
async function handleDeleteWallet(req, res) {
  const body = jsonic(req.body);
  const { wallet_id } = body;

  const mysql = require("mysql2/promise");
  const conn = await mysql.createConnection({
    user: "admin",
    host: "dbsseed.clccjpvfxzeh.us-east-1.rds.amazonaws.com",
    database: "multicurrency",
    password: "password",
    port: 3306,
  });
  try {
    await conn.beginTransaction();
    await conn.execute(
      `DELETE FROM transaction WHERE wallet_id = ${wallet_id}`
    );
    await conn.execute(`DELETE FROM currency WHERE wallet_id = ${wallet_id}`);
    await conn.execute(`DELETE FROM wallet WHERE wallet_id = ${wallet_id}`);
    res.status(200).end();
    await conn.commit();
    console.log("commit");
  } catch (err) {
    console.log(err);
    console.log("roll");
    await conn.rollback();
    res.status(500).end();
  } finally {
    await conn.end();
  }
}

module.exports = {
  handleLogin,
  handleGetExchangeRate,
  handleDeleteWallet,
  handleGetCurrencyWallet,
  handleGetWallet,
  handlePostTransaction,
};
