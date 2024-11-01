import React from 'react'
import TransactionList from '../components/TransactionList';
import FilterByCategory from '../components/FilterByCategory';
import FilterByTimePeriod from '../components/FilterByTimePeriod';

const Transactions = () => {
  return (
    <div className='px-8'>
        <div className='md:flex md:justify-between mt-12'>
            <FilterByCategory />
            <FilterByTimePeriod />
        </div>
        <TransactionList />
    </div>
  )
}

export default Transactions