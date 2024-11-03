import React from "react";

const FilterByCategory = ({ onHandleCategoryChange, selectedCategories }) => {
    const categories = ['Job', 'Food', 'Transport', 'Shopping', 'Bills'];

    return (
        <div>
            <div className="space-y-2">
                {categories.map(category => (
                    <label key={category} className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => onHandleCategoryChange(category)}
                            className="mr-2 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm md:text-base text-primary">{category}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterByCategory;
