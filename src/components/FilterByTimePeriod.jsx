import { useState, useEffect, useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';

const FilterByTimePeriod = () => {
    const { transactionDispatch } = useContext(TransactionContext);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        transactionDispatch({ type: 'FILTER_BY_TIME_PERIOD', payload: { startDate, endDate } });

    }, [startDate, endDate, transactionDispatch])


    return (
        <div className="flex space-x-4 mb-4">
            <div className='flex items-center space-x-2'>
                <label className="text-gray-700 font-bold" htmlFor="start-date">Start Date</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div className='flex items-center space-x-2'>
                <label className="text-gray-700 font-bold" htmlFor="end-date">End Date</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
        </div>
    )
}

export default FilterByTimePeriod