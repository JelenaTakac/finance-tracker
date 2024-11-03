import React from 'react'
import { useNavigate } from 'react-router-dom'
import intro from '../assets/intro.png'
import TransactionsSummary from '../components/TransactionsSummary'
import RecentTransactions from '../components/RecentTransactions'
import CategoriesChart from '../components/CategoriesChart'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='px-4 grid md:grid-cols-2 mb-8'>
          <div className='flex flex-col items-center'>
            <div className='w-[75%]'>
                <img src={intro} alt="Finance Traker Image"/>
            </div>
            <h2 className='text-lg font-bold text-left'>Category Distribution</h2>
            <CategoriesChart />
        </div>
          <div className='space-y-5 text-center'>
              <TransactionsSummary />
            <div>
                <h2 className='text-lg font-bold mb-2 text-left'>Recent Transactions</h2>
                <RecentTransactions />
            </div>
            <button onClick={() => navigate('/transactionForm')} className='p-2 text-sm md:text-base md:p-3 text-primary border border-primary hover:bg-primary hover:text-white rounded-md font-semibold'>Add New Transaction</button>
        </div>
    </div>
  )
}

export default Home