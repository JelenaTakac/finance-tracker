import { createContext, useReducer} from "react";
import { transactionReducer } from "../reducer/transactionReducer";
import transactionData from "../mockApi/transactionData.json";


export const TransactionContext = createContext();

const TransactionContextProvider = ({children}) => {
    const [transactionState, transactionDispatch] = useReducer(transactionReducer, transactionData);

    return (
        <TransactionContext.Provider value={{ transactionState, transactionDispatch }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider;

