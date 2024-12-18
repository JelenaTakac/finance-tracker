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
        <div className='grid space-y-4 md:grid-cols-2 p-4 items-center'>
            <div>
                <img src={renderTransactionDetailImage.image} alt="" />
            </div>
            <div className='space-y-4 text-center md:text-left'>
                <h2 className="text-xl md:text-2xl text-primary font-bold capitalize mb-6 md:mb-10">Transaction Type: {transactionDetail.type}</h2>
                <h3 className='text-primary text-lg md:text-xl'><strong>Description:</strong> {transactionDetail.description}</h3>
                <h3 className='text-primary text-lg md:text-xl'><strong>Amount:</strong> {transactionDetail.amount}$</h3>
                <h3 className='text-primary text-lg md:text-xl'><strong>Category:</strong> {transactionDetail.category}</h3>
                <h3 className='text-primary text-lg md:text-xl'><strong>Date:</strong> {transactionDetail.date}</h3>
            </div>
        </div>
    )
}

export default TransactionDetail