import React from 'react'
import { useNavigate } from 'react-router-dom'
import intro from '../assets/intro.png'
import Summary from '../components/Summary'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='grid grid-cols-2'>
        <div>
            <img src={intro} alt="Finance Traker Image" />
        </div>
        <div>
            <Summary />
            <button onClick={() => navigate('/transactionForm')} className='p-4 bg-primary hover:bg-secondary text-light rounded-md'>Add New Transaction</button>
        </div>
    </div>
  )
}

export default Home