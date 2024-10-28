import { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionForm = () => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');
    const [category, setCategory] = useState('Job');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const { transactionDispatch } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Date.now(),
            amount: parseFloat(amount),
            type,
            category,
            description,
            date
        };

        transactionDispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });

        resetForm();
    };

    const resetForm = () => {
        setAmount('');
        setType('income');
        setCategory('Job');
        setDescription('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
                    Amount
                </label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Type</label>
                <div className="flex items-center">
                    <label className="mr-4">
                        <input
                            type="radio"
                            value="income"
                            checked={type === 'income'}
                            onChange={() => setType('income')}
                            className="mr-1"
                        />
                        Income
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="expense"
                            checked={type === 'expense'}
                            onChange={() => setType('expense')}
                            className="mr-1"
                        />
                        Expense
                    </label>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
                    Category
                </label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                >
                    <option value="Job">Job</option>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transport">Transport</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
                Add Transaction
            </button>
        </form>
    );
};

export default TransactionForm;
