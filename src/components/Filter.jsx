import { useState, useEffect, useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { FILTER_TRANSACTIONS } from '../utils/actionTypes'
import FilterByCategory from './FilterByCategory'
import FilterByDate from './FilterByDate'
import { ChevronDown } from 'lucide-react';

const Filter = () => {
    const { transactionDispatch } = useContext(TransactionContext);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [openFilterByCategory, setOpenFilterByCategory] = useState(false);
    const [openFilterByDate, setOpenFilterByDate] = useState(false);

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
        <div className='md:flex md:justify-between my-4 md:my-10'>
            <div className="w-full">
                <div className="border-b border-light">
                    <div
                        className="flex justify-between items-center p-4 cursor-pointer"
                        onClick={() => setOpenFilterByCategory(!openFilterByCategory)}
                    >
                        <h2 className="text-primary text-base md:text-lg font-semibold">Filter by Category</h2>
                        <span className={`transform transition-transform ${openFilterByCategory ? 'rotate-180' : 'rotate-0'}`}>
                            <ChevronDown className='size-5 md:size-6 text-primary' />
                        </span>
                    </div>
                    {openFilterByCategory && (
                        <div className="py-2 px-4 md:p-4">
                            <FilterByCategory
                                onHandleCategoryChange={handleCategoryChange}
                                selectedCategories={selectedCategories}
                            />
                        </div>
                    )}
                </div>

                <div className="border-b border-light">
                    <div
                        className="flex justify-between items-center p-4 cursor-pointer"
                        onClick={() => setOpenFilterByDate(!openFilterByDate)}
                    >
                        <h2 className="text-primary text-base md:text-lg font-semibold">Filter by Date</h2>
                        <span className={`transform transition-transform ${openFilterByDate ? 'rotate-180' : 'rotate-0'}`}>
                            <ChevronDown className='size-5 md:size-6 text-primary'/>
                        </span>
                    </div>
                    {openFilterByDate && (
                        <div className="py-2 px-4 md:p-4">
                            <FilterByDate
                                onHandleStartDate={handleStartDate}
                                onHandleEndDate={handleEndDate}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Filter