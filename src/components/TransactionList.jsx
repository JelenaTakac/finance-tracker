import { useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionList = () => {
    const { transactionState } = useContext(TransactionContext);


    return (
        <div>
            {transactionState.map(transaction => (
                <div key={transaction.id} className='w-32 border bg-accent rounded-lg shadow-md'>
                    <h3 className='text-xl'>{transaction.amount}$</h3>
                    <h4>{transaction.type}</h4>
                    <h4>{transaction.category}</h4>
                    <div>{transaction.description}</div>
                    <div>{transaction.date}</div>
                </div>
            ))}
        </div>
    )
}

export default TransactionList;