import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';
import SummaryChart from './SummaryChart';

const TransactionsSummary = () => {
    const { transactionState } = useContext(TransactionContext);

    const totalIncome = transactionState.transactions.filter(transaction => transaction.type === 'income').reduce((accumulator, transaction) => accumulator + transaction.amount, 0);

    const totalExpenses = transactionState.transactions.filter(transaction => transaction.type === 'expense').reduce((accumulator, transaction) => accumulator + transaction.amount, 0);

    const balance = totalIncome - ((-1) * totalExpenses);

    return (
        <div>
            <SummaryChart totalIncome={totalIncome} totalExpenses={(-1) * totalExpenses} />
            <div className="p-6 rounded-lg shadow-md space-y-2">
                <div className="text-lg sm:text-xl text-my-purple">
                    <strong>Total Income:</strong> {totalIncome.toFixed(2)}$
                </div>
                <div className="text-lg sm:text-xl text-my-orange">
                    <strong>Total Expenses:</strong> {totalExpenses.toFixed(2)}$
                </div>
                <hr className='text-primary'/>
                <div className="text-xl sm:text-2xl font-semibold text-primary">
                    <strong>Balance:</strong> {balance.toFixed(2)}$
                </div>
            </div>
        </div>
    )
}

export default TransactionsSummary