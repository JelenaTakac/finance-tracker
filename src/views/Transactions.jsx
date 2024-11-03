import React from 'react'
import TransactionList from '../components/TransactionList';
import Filter from '../components/Filter';

const Transactions = () => {
  return (
    <div className='px-4 md:px-8'>
        <Filter />
        <TransactionList />
    </div>
  )
}

export default Transactions