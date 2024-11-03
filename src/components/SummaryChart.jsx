import { PieChart, Pie, Cell } from 'recharts';

const SummaryChart = ({ totalIncome, totalExpenses }) => {
    const data = [
        { name: 'Income', value: totalIncome },
        { name: 'Expense', value: totalExpenses },
    ];

    const COLORS = ['#5222D0', '#EC615B'];

    return (
        <PieChart width={200} height={200} className='mx-auto'>
            <Pie
                data={data}
                cx={100}
                cy={150}
                startAngle={180}
                endAngle={0}
                innerRadius={70}
                outerRadius={90}
                cornerRadius={5}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    )
}

export default SummaryChart