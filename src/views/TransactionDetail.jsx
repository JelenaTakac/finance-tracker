import React from 'react'
import jobImage from '../assets/transactionDetail/job.png'
import billsImage from '../assets/transactionDetail/bills.png'
import foodImage from '../assets/transactionDetail/food.png'
import transportImage from '../assets/transactionDetail/transport.png'
import shoppingImage from '../assets/transactionDetail/shopping.png'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const categoryImages = [
    { category: 'Job', image: jobImage },
    { category: 'Food', image: foodImage },
    { category: 'Transport', image: transportImage },
    { category: 'Shopping', image: shoppingImage },
    { category: 'Bills', image: billsImage },
]

const TransactionDetail = () => {
    const { transactionId } = useParams();
    const { transactionState } = useContext(TransactionContext);

    const transactionDetail = transactionState.transactions.find(transaction => transaction.id === parseInt(transactionId, 10));


    if (!transactionDetail) {
        return <div>Transaction not found</div>;
    }

    const renderTransactionDetailImage = categoryImages.find(img => img.category === transactionDetail.category);

    return (
        <div className='grid grid-cols-2'>
            <div>
                <img src={renderTransactionDetailImage.image} alt="" />
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