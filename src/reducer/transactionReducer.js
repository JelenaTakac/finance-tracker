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

        case 'DELETE_TRANSACTION' :
            updatedTransactionState = state.transactions.filter(transaction => transaction.id !== action.payload);
            localStorage.setItem("transactions", JSON.stringify(updatedTransactionState));
            return {
                ...state, 
                transactions: updatedTransactionState,
                filteredTransactions: updatedTransactionState,
            };

        case 'FILTER_BY_CATEGORY' :
            const filteredTransactions = state.transactions.filter(transaction => action.payload.length === 0 || action.payload.includes(transaction.category));
            return {...state, filteredTransactions};

        default: 
            return state;
    }
}