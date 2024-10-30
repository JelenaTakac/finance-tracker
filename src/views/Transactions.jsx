import React from 'react'
import TransactionList from '../components/TransactionList';
import FilterByCategory from '../components/FilterByCategory';

const Transactions = () => {
  return (
    <div>
        <FilterByCategory />
        <TransactionList />
    </div>
  )
}

export default Transactions