import { useState } from 'react'

const FilterByDate = ({ onHandleStartDate, onHandleEndDate }) => {
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
                <label className="text-sm md:text-base text-primary" htmlFor="start-date">Start Date</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => handleStartDate(e.target.value)}
                    className="text-sm md:text-base p-2 md:px-3 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div className='flex items-center space-x-2'>
                <label className="text-sm md:text-base text-primary" htmlFor="end-date">End Date</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={(e) => handleEndDate(e.target.value)}
                    className="text-sm md:text-base p-2 md:px-3 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
        </div>
    )
}

export default FilterByDate