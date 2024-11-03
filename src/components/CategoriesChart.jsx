import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#5222D0', '#003b73', '#0074b7', '#60a3d9', '#60a3d9'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, name, percent }) => {
    const radius = outerRadius + 8; 
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="#003b73" 
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            fontSize={14}
        >
            {`${name} ${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const CategoriesChart = () => {
    const { transactionState } = useContext(TransactionContext);

    const transactionCounts = {};
    transactionState.transactions.forEach(transaction => {
        const category = transaction.category;
        transactionCounts[category] = (transactionCounts[category] || 0) + 1;
    })

    const data = Object.entries(transactionCounts).map(([name, value]) => ({ name, value }));

    return (
        <PieChart width={350} height={300} className='mx-auto'>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={360}
                endAngle={0}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
      </PieChart>
    )
}

export default CategoriesChart