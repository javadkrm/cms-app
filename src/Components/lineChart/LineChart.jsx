import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './LineChart.css'

export default function Chart({title, data, dataKey, grid}) {

    return (
        <div className='chartWrapper'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width='100%' aspect={3}>
                <LineChart className='lineChart' responsive data={data}>
                    {grid && <CartesianGrid strokeDasharray="3 3" />}
                    <XAxis dataKey='month' stroke='#5550bd'/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}