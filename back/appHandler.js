const { pool } = require("./database")
const jsonic = require("jsonic")

async function handleLogin(req, res) {
    const body = jsonic(req.body)
    const client = await pool.connect()
    try {
        res.status(200).json({
        })
    } catch (err) {
        console.log(err)
        res.status(400).end()
    } finally {
        client.release()
    }
}

module.exports = {
    handleLogin
}