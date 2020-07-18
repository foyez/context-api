import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'
import { totalBalance } from '../utils'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const total = totalBalance(transactions)

  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  )
}
