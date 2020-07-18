import React from 'react'
import { Transaction } from './Transaction'

export const TransactionList = () => (
  <div className="container">
    <h3>History</h3>
    <ul id="list" className="list">
      <Transaction />
    </ul>
  </div>
)
