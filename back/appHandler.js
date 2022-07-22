const { pool, promisePool } = require("./database");
const jsonic = require("jsonic");

async function handleLogin(req, res) {
  const body = jsonic(req.body);
  try {
    const [rows, fields] = await promisePool.query("SELECT rate from exchange_rate");
    console.log(rows);
    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

module.exports = {
  handleLogin,
};
