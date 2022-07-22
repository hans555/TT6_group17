import React from 'react'
import { FaTimes } from 'react-icons/fa'

const DisplayWallet = ({ walletList, onDelete }) => {
    return (
      <div>
        <h3>
          {walletList.wallet_type}{' '}
          <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onDelete(walletList.id)}
          />
        </h3>
      </div>
    )
  }
  
export default DisplayWallet;
