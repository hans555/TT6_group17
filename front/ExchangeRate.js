import React from 'react'


const ExchangeRate = ({ exchangeRatesList }) => { 
  return (
    <div>
      <h1>Exchange Rates relative to SGD</h1>
      {exchangeRatesList.map(({ currency, rate }) => (
        <li key={currency}>Currency: {currency} Rate: <b>{rate}</b></li>
      ))}
    </div>
  );
}



export default ExchangeRate;
