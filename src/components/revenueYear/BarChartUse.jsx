import React from 'react'
import './BarChartuse.scss'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';


export default function BarChartUse(props) {

  const customTooltipFormatter = (value, name) => {
    return [`${name}: ${value.toLocaleString()}`, 'Custom Label'];
  };
    
    let fy19Sum=1000;
    let fy20Sum=2000;
    let fy21Sum=3240;
    let fy22Sum=4350;
    let fy23Sum=3530;

    props.revenueInfo.forEach(item=>{
        fy19Sum += item.fy19;
        fy20Sum += item.fy20;
        fy21Sum += item.fy21;
        fy22Sum += item.fy22;
        fy23Sum += item.fy23;
        
    })
    console.log(fy19Sum)
    // const dataSum = [
    //   { year: 'FY19', value: fy19Sum },
    //   { year: 'FY20', value: fy20Sum },
    //   { year: 'FY21', value: fy21Sum },
    //   { year: 'FY22', value: fy22Sum },
    //   { year: 'FY23', value: fy23Sum },
    // ];

    const dataSum = [
      { year: 'FY19', value: 10000 },
      { year: 'FY20', value: 15000 },
      { year: 'FY21', value: 20000 },
      { year: 'FY22', value: 25000 },
      { year: 'FY23', value: 30000 },
    ];
    



  return (
    <div className='barChart'>
      <ResponsiveContainer width="100%" height={300}>
      <BarChart data={dataSum}>
        <XAxis dataKey="year" />
        <YAxis />

        <Tooltip formatter={customTooltipFormatter} />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>

    </div>
  )
}
