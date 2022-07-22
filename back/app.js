var express = require("express")
var app = express()
var cors = require('cors')
require("dotenv").config() 
var port = 8080
const { handleLogin } = require("./appHandler")

app.use(cors())
app.use(express.json())

app.post("/login", handleLogin)

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})