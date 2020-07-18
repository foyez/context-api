import React, { createContext, useReducer } from 'react'

import { reducer } from './reducer'
import { Actions } from './actions'

// initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
}

// create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // ACTIONS
  function addTransaction(transaction) {
    dispatch({
      type: Actions.ADD_TRANSACTION,
      payload: transaction,
    })
  }

  function deleteTransaction(id) {
    dispatch({
      type: Actions.DELETE_TRANSACTION,
      payload: id,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
