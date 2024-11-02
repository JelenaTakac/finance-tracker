import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { Link } from 'react-router-dom';
import dollarImage from '../assets/dollar.png'

const RecentTransactions = () => {
    const { transactionState } = useContext(TransactionContext);

    const fiveRecentTransactions = transactionState.filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);


    return (
        <div>
            {fiveRecentTransactions.map(transaction => (
                <div key={transaction.id} className='grid md:grid-cols-6 py-2 items-center gap-2'>
                    <Link to={`/transactions/${transaction.id}`} className='md:col-span-5 flex p-4 items-center justify-between gap-4 border bg-transparent hover:bg-light rounded-lg shadow-md'>
                        <img src={dollarImage} alt="Dollar image" className='size-8 md:size-10' />
                        <div>
                            <div className='text-primary font-semibold'>{transaction.description}</div>
                            <div className='flex gap-2 items-center'>
                                <div className='text-secondary italic text-xs md:text-base'>{transaction.date}</div>
                                <div className='text-secondary italic text-xs md:text-base'>{transaction.category}</div>
                            </div>
                        </div>
                        <div className='md:text-xl text-primary font-semibold'>{transaction.amount}$</div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default RecentTransactions