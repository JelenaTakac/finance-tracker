import { useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Link, useNavigate } from 'react-router-dom';
import dollarImage from '../assets/dollar.png';
import { FilePenLine, FileX2 } from 'lucide-react';
import Swal from 'sweetalert2';

const TransactionList = () => {
    const { transactionState, transactionDispatch } = useContext(TransactionContext);
    const navigate = useNavigate();

    const handleDeleteTransaction = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                transactionDispatch({ type: 'DELETE_TRANSACTION', payload: id });
                Swal.fire('Deleted!', 'The transaction has been deleted.', 'success');
            }
        });
    }

    const sortTransactions = transactionState.filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div>
            {sortTransactions.map(transaction => (
                <div key={transaction.id} className='grid md:grid-cols-6 py-2 items-center gap-2'>
                    <Link to={`/transactions/${transaction.id}`} className='md:col-span-5 flex p-4 items-center justify-between gap-4 border bg-transparent hover:bg-light rounded-lg shadow-md'>
                        <img src={dollarImage} alt="Dollar image" className='size-8 md:size-10'/>
                        <div>
                            <div className='text-primary font-semibold'>{transaction.description}</div>
                            <div className='flex gap-2 items-center'>
                                <div className='text-secondary italic text-xs md:text-base'>{transaction.date}</div>
                                <div className='text-secondary italic text-xs md:text-base'>{transaction.category}</div>
                            </div>
                        </div>
                        <div className='md:text-xl text-primary font-semibold'>{transaction.amount}$</div>
                    </Link>
                    <div className='md:col-span-1 flex space-x-4 justify-end'>
                        <button onClick={() => navigate(`/transactionForm/${transaction.id}`)} className='text-primary hover:text-secondary'><FilePenLine /></button>
                        <button onClick={() => handleDeleteTransaction(transaction.id)} className='text-primary hover:text-red-500'><FileX2 /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TransactionList;