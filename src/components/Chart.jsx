import { PieChart, Pie, Cell } from 'recharts';

const Chart = ({ totalIncome, totalExpenses }) => {
    const data = [
        { name: 'Income', value: totalIncome },
        { name: 'Expense', value: totalExpenses },
    ];

    const COLORS = ['#5222D0', '#EC615B'];

    return (
        <PieChart width={400} height={200}>
            <Pie
                data={data}
                cx={200}
                cy={100}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
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

export default Chart