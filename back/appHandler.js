const { pool, promisePool } = require("./database");
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
      res.status(500).end()
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
      "SELECT rate from exchange_rate"
    );
    console.log(rows);
    res.status(200).json({});
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
      "SELECT rate from exchange_rate"
    );
    console.log(rows);
    res.status(200).json({});
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
      "SELECT rate from exchange_rate"
    );
    console.log(rows);
    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

//Functionality 6
async function handleDeleteWallet(req, res) {
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

module.exports = {
  handleLogin,
  handleGetExchangeRate,
  handleDeleteWallet,
  handleGetCurrencyWallet,
  handleGetWallet,
  handlePostTransaction,
};
