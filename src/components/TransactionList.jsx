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
        <>
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
            <div>
                {transactionState.filteredTransactions.map(transaction => (
                    <div key={transaction.id} className='grid md:grid-cols-6 p-4 items-center gap-2'>
                        <Link to={`/transactions/${transaction.id}`} className='md:col-span-5 flex p-4 items-center justify-between gap-4 border bg-transparent hover:bg-light rounded-lg shadow-md'>
                            <div className='text-secondary italic text-xs md:text-base'>{transaction.date}</div>
                            <div>
                                <div className='text-primary font-semibold'>{transaction.description}</div>
                                <div className='text-secondary italic text-sm md:text-base'>{transaction.category}</div>
                            </div>
                            <div className='md:text-xl text-primary font-semibold'>
                                {transaction.type === 'expense' ? '-' : ''} {transaction.amount}$
                            </div>
                            <div className='hidden md:block md:text-xl text-primary'>{transaction.type}</div>
                        </Link>
                        <div className='md:col-span-1 flex space-x-4 justify-end'>
                            <button onClick={() => navigate(`/transactionForm/${transaction.id}`)} className='text-primary hover:text-secondary'>Update</button>
                            <button onClick={() => handleDeleteTransaction(transaction.id)} className='text-primary hover:text-red-500'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TransactionList;