import transactionData from "../mockApi/transactionData.json";

export const loadTransactionsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("transactions")) || transactionData;
}
export const transactionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION' :
            const updatedTransactionState = [...state, action.payload];
            localStorage.setItem("transactions", JSON.stringify(updatedTransactionState));
            return updatedTransactionState;
        default: 
            return state;
    }
}