import React from 'react'
import DisplayWallet from './DisplayWallet'

const DisplayWallets = ( { walletsList, onDelete} ) => {
    <h1>Current Wallets</h1>
    return (
        <div>
            <h1>Current Wallets You Own</h1>
            {walletsList.map((walletList) => (
                <DisplayWallet key={walletList.id} walletList={walletList} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default DisplayWallets;


