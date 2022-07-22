import { useState, useEffect } from 'react'
import exchangeRate from './components/exchangeRate.js'
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {
  //const [showAddTransaction, setshowAddTransaction] = useState(false)
  const [wallets, setWallets] = useState([]) // to show what currencies a user will have in his wallet
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

  // Display wallets that user has
  const displayWallet = () => {
    


    setWallets([...wallets, data]) //whatever data is posted to backend then add to default wallet array
  }
  
    
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

  const exchangeRatesLive = () => [{                           // base SGD, filled with dummy values first
      "EUR": 1.36,
      "USD": 1.39,
      "CAD": 1.20,
      "AUD": 1.00,
      "CNH": 1.50,
      "HKD": 2.00,
      "JPY": 1.90,
      "NZD": 1.33,
      "NOK": 1.20,
      "GBP": 1.09,
      "SEK": 1.18,
      "THB": 1.40
  }];

  return (
    <div className="App">
      <exchangeRate exchangeRates={exchangeRatesLive} />
      <displayWallet walletLists={wallets} />
    </div>
  );
}

export default App;
