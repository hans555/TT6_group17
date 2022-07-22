const { pool, promisePool } = require("./database");
const jsonic = require("jsonic");

async function handleLogin(req, res) {
  const body = jsonic(req.body);
  try {
    const [rows, fields] = await promisePool.query("SELECT 1");
    console.log(rows);
    console.log(fields);
    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(400).end();
  } finally {
    client.release();
  }
}

module.exports = {
  handleLogin,
};
