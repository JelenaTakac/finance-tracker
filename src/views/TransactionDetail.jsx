import React from 'react'
import jobImage from '../assets/job.png'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const TransactionDetail = () => {
    const { transactionId } = useParams();
    const { transactionState } = useContext(TransactionContext);

    const transactionDetail = transactionState.transactions.find(transaction => transaction.id === parseInt(transactionId, 10));


    if (!transactionDetail) {
        return <div>Transaction not found</div>;
    }

    return (
        <div className='grid grid-cols-2'>
            <div>
                <img src={jobImage} alt="" />
            </div>
            <div className="p-4 border rounded-lg bg-white shadow-md">
                <h2 className="text-xl font-bold mb-4">Transaction Detail</h2>
                <p><strong>Description:</strong> {transactionDetail.description}</p>
                <p><strong>Amount:</strong> {transactionDetail.amount}$</p>
                <p><strong>Category:</strong> {transactionDetail.category}</p>
                <p><strong>Date:</strong> {transactionDetail.date}</p>
            </div>
        </div>
    )
}

export default TransactionDetail