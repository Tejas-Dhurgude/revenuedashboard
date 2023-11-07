
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarChartA(props) {
  // Filter out objects without a "volume" property
  const filteredData = props.data.filter(item => item.hasOwnProperty('volume'));

  return (
    <div>
      
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={filteredData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="volume" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

