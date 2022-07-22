import React from 'react'


const exchangeRate = ({ exchangeRatesList }) => { 
  return (
    <div>
      <h1>Exchange Rates</h1>
      {exchangeRatesList.map(({ currency, rate }) => (
        <p key={currency}>Currency: {currency} Rate: {rate}</p>
      ))}
    </div>
  );
}



export default exchangeRate;
