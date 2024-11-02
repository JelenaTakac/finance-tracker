import transactionData from "../mockApi/transactionData.json";

export const loadTransactionsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("transactions")) || transactionData;
}
export const transactionReducer = (state, action) => {
    let updatedTransactionState;
    switch (action.type) {
        case 'ADD_TRANSACTION' :
            updatedTransactionState = [...state.transactions, action.payload];
            localStorage.setItem("transactions", JSON.stringify(updatedTransactionState));
            return {
                ...state, 
                transactions: updatedTransactionState,
                filteredTransactions: updatedTransactionState,
            };

        case 'UPDATE_TRANSACTION' :
            updatedTransactionState = state.transactions.map(transaction => transaction.id === action.payload.id ? action.payload : transaction);
            localStorage.setItem("transactions", JSON.stringify(updatedTransactionState));
            return {
                ...state, 
                transactions: updatedTransactionState,
                filteredTransactions: updatedTransactionState,
            };

        case 'DELETE_TRANSACTION' :
            updatedTransactionState = state.transactions.filter(transaction => transaction.id !== action.payload);
            localStorage.setItem("transactions", JSON.stringify(updatedTransactionState));
            return {
                ...state, 
                transactions: updatedTransactionState,
                filteredTransactions: updatedTransactionState,
            };

        case 'FILTER_TRANSACTIONS' :
            const { startDate, endDate, selectedCategories } = action.payload;
            const filterByCategory = (transaction) => {
                return selectedCategories.length === 0 || selectedCategories.includes(transaction.category);
            };
            
            const filterByDate = (transaction) => {
                const transactionDate = new Date(transaction.date);
                const isAfterStartDate = startDate ? transactionDate >= new Date(startDate) : true;
                const isBeforeEndDate = endDate ? transactionDate <= new Date(endDate) : true;
                return isAfterStartDate && isBeforeEndDate;
            }

            const filteredTransactionResults = state.transactions.filter(transaction => {
                return filterByCategory(transaction) && filterByDate(transaction)
            });

            return {...state, filteredTransactions: filteredTransactionResults}


        default: 
            return state;
    }
}