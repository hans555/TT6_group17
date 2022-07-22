import { React, useState } from 'react'
import ExchangeRate from './components/ExchangeRate'
import DisplayWallets from './components/DisplayWallets'
import About from './components/About'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


const App = () => {
  const [wallets, setWallets] = useState([
    {
      "id": 1,
      "wallet_type": "USD"
    },
    {
      "id": 2,
      "wallet_type": "EUR"
    },
    {
      "id": 3,
      "wallet_type": "THB"
    },
  ]);

  // useEffect to load data from backend initially when web application loads up
  /*useEffect(() => {
    const getWallet = async () => {
      const walletsFromServer = await fetchWallets()
      setWallets(walletsFromServer) //fetch data from backend on the user's wallets
    }
    getWallet()
  }, [])

  // Fetch Wallet
  const fetchWallets = async () => {
    const res = await fetch('http://localhost:5000/tasks')

    const data = await res.json()
*/

 
    // Delete Wallet
    const deleteWallet = (id) => {
      setWallets(wallets.filter((wallet) => wallet.id !== id))
    };
  
    // Base SGD to exchange
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
  

    return (
      <Router>
        <div className="App">
          <Routes>
            <Route
              path='/home'
              element={
                <div>
                  <ExchangeRate exchangeRatesList={exchangeRatesLive} />
                  {wallets.length > 0
                    ? (<DisplayWallets walletsList={wallets} onDelete={deleteWallet} />)
                    : (<h1>No Wallets to show</h1>)}

                </div>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
}
  
export default App;
