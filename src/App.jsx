import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import TransactionForm from './components/TransactionForm';
import Transactions from './views/Transactions';
import TransactionDetail from './views/TransactionDetail';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
        <Navbar />
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
