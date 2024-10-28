import { useState } from 'react'
import './App.css'
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

function App() {

  return (
    <>
        <h1 className='bg-accent text-white p-6'>Hello Finance Tracker</h1>
        <TransactionList />
        <TransactionForm />
    </>
  )
}

export default App
