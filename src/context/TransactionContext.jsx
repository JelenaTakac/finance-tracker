import { createContext, useReducer} from "react";
import { transactionReducer, loadTransactionsFromLocalStorage } from "../reducer/transactionReducer";

export const TransactionContext = createContext();

const TransactionContextProvider = ({children}) => {
    const [transactionState, transactionDispatch] = useReducer(transactionReducer, loadTransactionsFromLocalStorage());

    return (
        <TransactionContext.Provider value={{ transactionState, transactionDispatch }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider;

