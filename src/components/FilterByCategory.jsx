import { useState, useEffect, useRef } from 'react';
import { Filter } from 'lucide-react';

const FilterByCategory = ({ onHandleCategoryChange, uniqueCategories, selectedCategories }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); 
    const buttonRef = useRef(null);

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
                className="flex gap-4 px-4 py-2 text-primary border border-primary hover:bg-primary  hover:border-bg-primary hover:text-white rounded-lg"
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
                                    onChange={() => onHandleCategoryChange(category)}
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
