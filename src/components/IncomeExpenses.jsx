import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { transactionCalculate } from '../utils'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const { income, expense } = transactionCalculate(transactions)

  return (
    <div className="container">
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>
    </div>
  )
}
