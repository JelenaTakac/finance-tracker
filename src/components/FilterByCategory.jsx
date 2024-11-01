import { useContext, useState, useEffect, useRef } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Filter } from 'lucide-react';

const FilterByCategory = () => {
    const { transactionState, transactionDispatch } = useContext(TransactionContext);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); 
    const buttonRef = useRef(null);

    const uniqueCategories = [...new Set(transactionState.transactions.map(transaction => transaction.category))];

    const handleCategoryChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter(cat => cat !== category)
            : [...selectedCategories, category];

        setSelectedCategories(updatedCategories);
        transactionDispatch({ type: 'FILTER_BY_CATEGORY', payload: updatedCategories });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative mb-4">
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="flex gap-4 px-4 py-2 text-primary border-bg-primary hover:bg-primary  hover:border-bg-primary hover:text-white rounded-lg shadow-md"
            >
                Filter By Category
                <Filter />
            </button>

            {isDropdownOpen && (
                <div ref={dropdownRef} className="absolute mt-2 p-4 bg-light border rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Select Categories</h3>
                    <div className="space-y-2">
                        {uniqueCategories.map(category => (
                            <label key={category} className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                    className="mr-2"
                                />
                                <span>{category}</span>
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterByCategory;
