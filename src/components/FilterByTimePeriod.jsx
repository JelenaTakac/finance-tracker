import { useState } from 'react'

const FilterByTimePeriod = ({ onHandleStartDate, onHandleEndDate }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDate = (selectedDate) => {
        onHandleStartDate(selectedDate);
        setStartDate(selectedDate);
    }

    const handleEndDate = (selectedDate) => {
        onHandleEndDate(selectedDate);
        setEndDate(selectedDate);
    }

    return (
        <div className="space-y-2 md:flex md:space-x-4 mb-4">
            <div className='flex items-center space-x-2'>
                <label className="text-gray-700 font-bold" htmlFor="start-date">Start Date</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => handleStartDate(e.target.value)}
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div className='flex items-center space-x-2'>
                <label className="text-gray-700 font-bold" htmlFor="end-date">End Date</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={(e) => handleEndDate(e.target.value)}
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
        </div>
    )
}

export default FilterByTimePeriod