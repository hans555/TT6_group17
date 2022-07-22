import React from 'react'

const exchangeRate = ( {exchangeRatesLive} ) => {
    <h1>Exchange Rates</h1>
    return (
        <div>
            {exchangeRatesLive.map(exchangeRateLive =>
            <h2>{exchangeRateLive}</h2>)}
        </div>
  )
}



export default exchangeRate;
