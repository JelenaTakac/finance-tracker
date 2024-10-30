import { useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Link } from 'react-router-dom';

const TransactionList = () => {
    const { transactionState, transactionDispatch } = useContext(TransactionContext);

    const handleDeleteTransaction = (id) => {
        transactionDispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    return (
        <div>
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
                    <button className='text-primary hover:text-secondary'>Edit</button>
                    <button onClick={() => handleDeleteTransaction(transaction.id)} className='text-primary hover:text-red-500'>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TransactionList;