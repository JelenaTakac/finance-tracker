import transactionData from "../mockApi/transactionData.json";

export const loadTransactionsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("transactions")) || transactionData;
}
export const transactionReducer = (state, action) => {
    let updatedTransactionState;
    switch (action.type) {
        case 'ADD_TRANSACTION' :
            updatedTransactionState = [...state, action.payload];
            localStorage.setItem("transactions", JSON.stringify(updatedTransactionState));
            return updatedTransactionState;

        case 'DELETE_TRANSACTION' :
            updatedTransactionState = state.filter(transaction => transaction.id !== action.payload);
            localStorage.setItem("transactions", JSON.stringify(updatedTransactionState));
            return updatedTransactionState;

        default: 
            return state;
    }
}