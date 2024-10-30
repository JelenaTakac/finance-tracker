import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';

const Summary = () => {
    const { transactionState } = useContext(TransactionContext);

    const totalIncome = transactionState.filter(transaction => transaction.type === 'income').reduce((accumulator, transaction) => accumulator + transaction.amount, 0);

    const totalExpenses = transactionState.filter(transaction => transaction.type === 'expense').reduce((accumulator, transaction) => accumulator + transaction.amount, 0);

    const balance = totalIncome - totalExpenses;

    return (
        <div className="p-6 bg-light rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <div className="mb-2 text-primary">
                <strong>Total Income:</strong> ${totalIncome.toFixed(2)}
            </div>
            <div className="mb-2 text-red-500">
                <strong>Total Expenses:</strong> -${totalExpenses.toFixed(2)}
            </div>
            <div className="text-xl font-semibold text-accent">
                <strong>Balance:</strong> ${balance.toFixed(2)}
            </div>
        </div>
    )
}

export default Summary