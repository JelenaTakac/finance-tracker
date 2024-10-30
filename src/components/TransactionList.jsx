import { useState, useEffect, useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Link, useNavigate } from 'react-router-dom';

const TransactionList = () => {
    const { transactionState, transactionDispatch } = useContext(TransactionContext);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        transactionDispatch({ type: 'FILTER_BY_TIME_PERIOD', payload: {startDate, endDate}});

    }, [startDate, endDate, transactionDispatch])

    const handleDeleteTransaction = (id) => {
        transactionDispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    return (
        <div>
            <div className="flex space-x-4 mb-4">
                <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="start-date">Start Date</label>
                    <input
                        type="date"
                        id="start-date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="end-date">End Date</label>
                    <input
                        type="date"
                        id="end-date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>
            {transactionState.filteredTransactions.map(transaction => (
                <div key={transaction.id} className='flex p-4 items-center'>
                    <Link to={`/transactions/${transaction.id}`} className='flex p-4 items-center justify-between gap-4 border bg-light rounded-lg shadow-md'>
                        <div className='text-secondary italic'>{transaction.date}</div>
                        <div>
                            <div className='text-primary'>{transaction.description}</div>
                            <div className='text-accent italic'>{transaction.category}</div>
                        </div>
                        <div className='text-xl text-primary'>
                            {transaction.type === 'expense' ? '-' : ''} {transaction.amount}$
                        </div>
                        <div className='text-xl text-primary'>{transaction.type}</div>
                    </Link>
                    <button onClick={() => navigate(`/transactionForm/${transaction.id}`)} className='text-primary hover:text-secondary'>Update</button>
                    <button onClick={() => handleDeleteTransaction(transaction.id)} className='text-primary hover:text-red-500'>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TransactionList;