import React from 'react'

import { GlobalProvider } from './context/GlobalContext'

import './App.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  )
}

export default App
