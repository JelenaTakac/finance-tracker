import { useContext, useState, useEffect } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { ADD_TRANSACTION, UPDATE_TRANSACTION } from '../utils/actionTypes';
import { useNavigate, useParams } from 'react-router-dom';

const TransactionForm = () => {
    const [transactionInfo, setTransactionInfo] = useState({
        description: '',
        amount: '',
        type: 'income',
        category: '',
        date: '',
    })

    const { transactionState, transactionDispatch } = useContext(TransactionContext);
    const navigate = useNavigate();
    const { transactionId } = useParams();

    useEffect(() => {
        if(transactionId) {
            const transactionToUpdate = transactionState.transactions.find(transaction => transaction.id === parseInt(transactionId));
            const newTransactionInfo = transactionToUpdate?.type === 'expense' ? { ...transactionToUpdate, amount: (-1) * transactionToUpdate.amount } : transactionToUpdate
            transactionToUpdate && setTransactionInfo(newTransactionInfo);
        }
    }, [transactionId, transactionState.transactions]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTransactionInfo((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            ...transactionInfo,
            id: transactionId ? parseInt(transactionId) : Date.now(),
            amount: transactionInfo.type === 'expense' ? (-1) * parseFloat(transactionInfo.amount) : parseFloat(transactionInfo.amount)
        };

        transactionDispatch({ type: transactionId ? UPDATE_TRANSACTION : ADD_TRANSACTION, payload: newTransaction });

        resetForm();
        navigate('/transactions');
    };

    const resetForm = () => {
        setTransactionInfo({
            description: '',
            amount: '',
            type: 'income',
            category: '',
            date: '',
        })
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md md:w-1/2 mx-6 md:mx-auto mt-12">
            <div className="mb-4">
                <label className="block text-primary text-sm md:text-base font-bold mb-2" htmlFor="amount">
                    Amount
                </label>
                <input
                    type="number"
                    step="0.01"
                    id="amount"
                    name='amount'
                    value={transactionInfo.amount}
                    onChange={handleInputChange}
                    min={0}
                    onKeyDown={(e) => {
                        if (e.key === '-') {
                            e.preventDefault();
                        }
                    }}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-primary text-sm md:text-base font-bold mb-2">Type</label>
                <div className="flex items-center">
                    <label className="mr-4 text-sm md:text-base">
                        <input
                            type="radio"
                            name='type'
                            value="income"
                            checked={transactionInfo.type === 'income'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Income
                    </label>
                    <label className="text-sm md:text-base">
                        <input
                            type="radio"
                            name='type'
                            value="expense"
                            checked={transactionInfo.type === 'expense'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Expense
                    </label>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-primary text-sm md:text-base font-bold mb-2" htmlFor="category">
                    Category
                </label>
                <select
                    id="category"
                    name='category'
                    value={transactionInfo.category}
                    onChange={handleInputChange}
                    className="w-full text-sm md:text-base px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                >
                    <option value="" disabled>Select category</option>
                    <option value="Job">Job</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-primary text-sm md:text-base font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    name='description'
                    value={transactionInfo.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-primary text-sm md:text-base font-bold mb-2" htmlFor="date">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    name='date'
                    value={transactionInfo.date}
                    onChange={handleInputChange}
                    className="w-full text-sm md:text-base px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full text-primary text-sm md:text-base border border-primary hover:text-white hover:bg-primary py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300"
            >
                {transactionId ? 'Update Transaction' : 'Add Transaction'}
            </button>
        </form>
    );
};

export default TransactionForm;
