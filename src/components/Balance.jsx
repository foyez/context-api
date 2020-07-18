import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'
import { totalBalance } from '../utils'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const total = totalBalance(transactions)
  const sign = total < 0 ? '-' : ''

  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">
        {sign}${Math.abs(total).toFixed(2)}
      </h1>
    </div>
  )
}
