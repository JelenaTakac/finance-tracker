import { useState, useEffect, useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { FILTER_TRANSACTIONS } from '../utils/actionTypes'
import FilterByCategory from './FilterByCategory'
import FilterByTimePeriod from './FilterByTimePeriod'

const Filter = () => {
    const { transactionState, transactionDispatch } = useContext(TransactionContext);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const uniqueCategories = [...new Set(transactionState.transactions.map(transaction => transaction.category))];

    const handleCategoryChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter(cat => cat !== category)
            : [...selectedCategories, category];

        setSelectedCategories(updatedCategories);
    };

    const handleStartDate = (selectedStartDate) => {
        setStartDate(selectedStartDate);
    }

    const handleEndDate = (selectedEndDate) => {
        setEndDate(selectedEndDate);
    }

    useEffect(() => {
        transactionDispatch({ type: FILTER_TRANSACTIONS, payload: { startDate, endDate, selectedCategories } });

    }, [startDate, endDate, selectedCategories, transactionDispatch])


    return (
        <div className='md:flex md:justify-between mt-12'>
            <FilterByCategory onHandleCategoryChange={handleCategoryChange} uniqueCategories={uniqueCategories} selectedCategories={selectedCategories} />
            <FilterByTimePeriod onHandleStartDate={handleStartDate} onHandleEndDate={handleEndDate} />
        </div>
    )
}

export default Filter