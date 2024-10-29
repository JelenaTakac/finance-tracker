import React from 'react'
import { useNavigate } from 'react-router-dom'
import intro from '../assets/intro.png'
import TransactionList from '../components/TransactionList'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='grid grid-cols-2'>
        <div>
            <img src={intro} alt="Finance Traker Image" />
        </div>
        <div>
            <TransactionList />

              <button onClick={() => navigate('/transactionForm')}>Add New Transaction</button>
        </div>
    </div>
  )
}

export default Home