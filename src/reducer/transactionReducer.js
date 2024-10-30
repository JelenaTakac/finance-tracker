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

        case 'FILTER_BY_CATEGORY' :
            const filteredTransactionsByCategory = state.transactions.filter(transaction => action.payload.length === 0 || action.payload.includes(transaction.category));
            return {...state, filteredTransactions: filteredTransactionsByCategory};

        case 'FILTER_BY_TIME_PERIOD' :
            const { startDate, endDate } = action.payload;
            const filteredTransactionsByTimePeriod = state.transactions.filter(transaction => {
                const transactionDate = new Date(transaction.date);
                const isAfterStartDate = startDate ? transactionDate >= new Date(startDate) : true;
                const isBeforeEndDate = endDate ? transactionDate <= new Date(endDate) : true;
                return isAfterStartDate && isBeforeEndDate;
            });
            return {...state, filteredTransactions: filteredTransactionsByTimePeriod};

        default: 
            return state;
    }
}