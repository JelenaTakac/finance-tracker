import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import TransactionForm from './components/TransactionForm';
import Transactions from './views/Transactions';
import TransactionDetail from './views/TransactionDetail';

function App() {

  return (
    <Router>

          <nav>
            <ul className='flex justify-end space-x-4 py-4'>
                  <li><NavLink to='/' className='text-primary hover:text-secondary'>Home</NavLink></li>
                  <li><NavLink to='/transactions' className='text-primary hover:text-secondary'>Transactions</NavLink></li>
                  <li><NavLink to='/transactionForm' className='text-primary hover:text-secondary'>New Transaction</NavLink></li>
            </ul>
        </nav>

        <Routes>
            <Route path='/' element={<Home />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/transactionForm' element={<TransactionForm />} />
                <Route path='/transactionForm/:transactionId' element={<TransactionForm />} />
                <Route path='/transactions/:transactionId' element={<TransactionDetail />} />
        </Routes>
    </Router>
  )
}

export default App
