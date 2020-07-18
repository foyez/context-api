import React, { useContext } from 'react'

import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalContext'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div className="container">
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </div>
  )
}
