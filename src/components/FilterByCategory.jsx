import { useContext, useState} from 'react'
import { TransactionContext } from '../context/TransactionContext'

const FilterByCategory = () => {
    const { transactionState, transactionDispatch } = useContext(TransactionContext);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const uniqueCategories = [...new Set(transactionState.transactions.map(transaction => transaction.category))];

    const handleCategoryChange = (category) => {
        const updatedCategories = selectedCategories.includes(category) ? selectedCategories.filter(cat => cat !== category) : [...selectedCategories, category];

        setSelectedCategories(updatedCategories);
        transactionDispatch({ type: 'FILTER_BY_CATEGORY', payload: updatedCategories });
    }


    return (
        <div className="mb-4 p-4 bg-light rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
                {uniqueCategories.map(category => (
                    <label key={category} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                        />
                        <span>{category}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default FilterByCategory