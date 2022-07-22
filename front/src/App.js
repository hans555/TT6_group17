import { useState, useEffect } from 'react'
import exchangeRate from './components/exchangeRate'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {
  //const [showAddTransaction, setshowAddTransaction] = useState(false)
  //const [wallets, setWallets] = useState([]) // to show what currencies a user will have in his wallet
  //const [value, setValue] = useState(0);
  //const [fromCurrency, setFromCurrency] = useState("");
  //const [toCurrency, setToCurrency] = useState("");
  //const [currencies] = useState(["EUR", "USD", "CAD", "AUD", "CNH", "HKD", "JPY", "NZD", "NOK", "GBP", "SEK", "THB"]);
  //const [result, setResult] = useState(0);

  //useEffect(() => {
  //const getWallet = async () => {
  //const tasksFromServer = await fetchTasks()
  //setWallets(tasksFromServer) //fetch date from backend on the user's wallets
  //}

  //getWallet()
  //}, [])

  // Add Transaction
  //const addTransaction = async (transaction) => {
  //const res = await fetch('http://localhost:5000/tasks', {
  //method: 'POST',
  //headers: {
  //'Content-type': 'application/json',
  //},
  //body: JSON.stringify(task),
  //})

  //const data = await res.json()

 
  // Delete Transaction
  //const deleteTransaction = async (id) => {
  //const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //method: 'DELETE',
  //})
  //We should control the response status to decide if we will change the state or not.
  //res.status === 200
  //? setTasks(tasks.filter((task) => task.id !== id))
  //: alert('Error Deleting This Task')
  //}

  // base SGD to exchange
  const exchangeRatesLive = [
    {
      "currency": "EUR",
      "rate": 1.36
    },
    {
      "currency": "USD",
      "rate": 1.36
    },
    {
      "currency": "CAD",
      "rate": 1.36
    },
    {
      "currency": "AUD",
      "rate": 1.36
    },
    {
      "currency": "CNH",
      "rate": 1.36
    },
    {
      "currency": "HKD",
      "rate": 1.36
    },
    {
      "currency": "JPY",
      "rate": 1.36
    },
    {
      "currency": "NZD",
      "rate": 1.36
    },
    {
      "currency": "NOK",
      "rate": 1.36
    },
    {
      "currency": "GBP",
      "rate": 1.36
    },
    {
      "currency": "SEK",
      "rate": 1.36
    },
    {
      "currency": "THB",
      "rate": 1.36
    },
  ];
  

  // Display wallets that user has
  //const walletsList = [
   // "USD",
   // "EUR"
  //];
  // <displayWallets walletsList={walletsList} />

  return (
    <div className="App">
      <h1>Hello</h1>
      <exchangeRate exchangeRatesList={exchangeRatesLive} />
    </div>
  );
}

export default App;
