import React from 'react'
import { useNavigate } from 'react-router-dom'
import intro from '../assets/intro.png'
import Summary from '../components/TransactionsSummary'
import RecentTransactions from '../components/RecentTransactions'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='px-4 grid md:grid-cols-2'>
        <div>
            <img src={intro} alt="Finance Traker Image" />
        </div>
        <div className='space-y-8 text-center'>
            <Summary />
            <RecentTransactions />
            <button onClick={() => navigate('/transactionForm')} className='p-4 text-primary border border-primary hover:bg-primary hover:text-white rounded-md font-semibold'>Add New Transaction</button>
        </div>
    </div>
  )
}

export default Home