import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { Link } from 'react-router-dom';
import dollarImage from '../assets/dollar.svg';

const RecentTransactions = () => {
    const { transactionState } = useContext(TransactionContext);

    const fiveRecentTransactions = transactionState.filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);


    return (
        <div>
            {fiveRecentTransactions.map(transaction => (
                <div key={transaction.id} className='grid items-center'>
                    <Link to={`/transactions/${transaction.id}`} className='md:col-span-5 flex p-3 items-center justify-between gap-4 border bg-transparent hover:border-primary rounded-lg shadow-md'>
                        <div className='flex gap-8 items-center'>
                            <img src={dollarImage} alt="Dollar image" className='size-6 md:size-8' />
                            <div className='text-left'>
                                <div className='text-xs md:text-sm text-primary font-semibold'>{transaction.description}</div>
                                <div className='flex gap-2 items-center'>
                                    <div className='text-secondary italic text-xs md:text-sm'>{transaction.date}</div>
                                    <div className='text-secondary italic text-xs md:text-sm'>{transaction.category}</div>
                                </div>
                            </div>
                        </div>
                        <div className='text-sm md:text-lg text-primary font-semibold'>{transaction.amount}$</div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default RecentTransactions