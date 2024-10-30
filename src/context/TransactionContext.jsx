import { createContext, useReducer} from "react";
import { transactionReducer, loadTransactionsFromLocalStorage } from "../reducer/transactionReducer";

export const TransactionContext = createContext();

const initialState = {
    transactions: loadTransactionsFromLocalStorage(),
    filteredTransactions: loadTransactionsFromLocalStorage()
};

const TransactionContextProvider = ({children}) => {
    const [transactionState, transactionDispatch] = useReducer(transactionReducer, initialState);

    return (
        <TransactionContext.Provider value={{ transactionState, transactionDispatch }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider;

