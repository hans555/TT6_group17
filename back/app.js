var express = require("express");
var app = express();
var cors = require("cors");
require("dotenv").config();
var port = 8080;
const {
  handleLogin,
  handleDeleteWallet,
  handleGetCurrencyWallet,
  handleGetExchangeRate,
  handleGetWallet,
  handlePostTransaction,
} = require("./appHandler");

app.use(cors());
app.use(express.json());

app.post("/login", handleLogin);
app.post("/get-exchange-rate", handleGetExchangeRate);
app.post("/get-currency-wallet", handleGetCurrencyWallet);
app.post("/post-transaction", handlePostTransaction);
app.post("/get-wallet", handleGetWallet);
app.post("/delete-wallet", handleDeleteWallet);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
