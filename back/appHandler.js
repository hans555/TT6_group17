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
      "SELECT base_currency, exchange_currency, rate from exchange_rate"
    );
    console.log(rows);
    console.log(body)
    res.status(200).json({rows});
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

//Functionality 3
async function handleGetCurrencyWallet(req, res) {
  const body  = jsonic(req.body);
  try {
    const [rows, fields] = await promisePool.query(
      `SELECT * FROM currency WHERE wallet_id = ${body.wallet_id}`
    );
    console.log(rows);
    console.log(body.wallet_id);
    res.status(200).json({rows});
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
      `SELECT amount FROM user u LEFT JOIN wallet w ON u.id =  w.user_id LEFT JOIN currency c ON w.user_id = c.wallet_id WHERE u.username = "${body.username}" and  c.currency = "${body.currency}" AND w.id = ${body.id}`
    );
    const [currency, exchange_rate] = await promisePool.query(
      "SELECT base_currency, exchange_currency, rate from exchange_rate");

    if (body.amount < rows.amount) { 
      const [rows, fields] = await promisePool.query(
        `INSERT INTO transaction (wallet_id, debit_id, debit_currency, debit_amount, credit_id, credit_currency, credit_amount, description, created_by, updated_by) VALUES(1, 13, "JPY", 10, 1, "USD", 10, "Test", "Jacky", "Jacky")`
      );
      
      const [rows, fields] = await promisePool.query(
        `UPDATE currency SET amount = amount + ${body.amount} WHERE wallet_id = ${body.id} and currency = {credit_currency}`
      );
    }
    console.log(rows);
    console.log(body);
    res.status(200).json({rows});
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
    res.status(200).json({rows});
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
