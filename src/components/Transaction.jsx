import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const Transaction = ({ id, text, amount }) => {
  const sign = amount < 0 ? '-' : '+'
  const { deleteTransaction } = useContext(GlobalContext)

  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}{' '}
      <span>
        {sign} ${Math.abs(amount).toFixed(2)}
      </span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">
        x
      </button>
    </li>
  )
}
