import { useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Link, useNavigate } from 'react-router-dom';

const TransactionList = () => {
    const { transactionState, transactionDispatch } = useContext(TransactionContext);
    const navigate = useNavigate();

    const handleDeleteTransaction = (id) => {
        transactionDispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const sortTransactions = transactionState.filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div>
            {sortTransactions.map(transaction => (
                <div key={transaction.id} className='grid md:grid-cols-6 py-2 items-center gap-2'>
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
    )
}

export default TransactionList;