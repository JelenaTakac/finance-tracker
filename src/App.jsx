import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import TransactionForm from './components/TransactionForm';

function App() {

  return (
    <Router>

          <nav>
            <ul className='flex justify-end space-x-4 py-4'>
                  <li><NavLink to='/' className='text-primary hover:text-secondary'>Home</NavLink></li>
                  <li><NavLink to='/transactionForm' className='text-primary hover:text-secondary'>Transaction Form</NavLink></li>
            </ul>
        </nav>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/transactionForm' element={<TransactionForm />} />
        </Routes>
    </Router>
  )
}

export default App
