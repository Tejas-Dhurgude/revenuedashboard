import React, { useEffect, useState } from 'react'
import './TinyChart.scss'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
     Area,
  } from 'recharts';
  
  const yAxisFormatter = (value) => {
    if (value >= 1000000) {
      return `${value / 1000000}M`;
    } else {
      return value;
    }
  };
  

export default function TinyChart() {
    const [revenueInfo,setRevenueInfo]=useState([
      {
        product: 'Product A',
        fy19: 1000000,
        fy20: 1200000,
        fy21: 900000,
        fy22: 1100000,
        fy23: 1300000,
      },
      {
        product: 'Product B',
        fy19: 800000,
        fy20: 950000,
        fy21: 1100000,
        fy22: 850000,
        fy23: 950000,
      },
      {
        product: 'Product C',
        fy19: 1500000,
        fy20: 1300000,
        fy21: 1400000,
        fy22: 1600000,
        fy23: 1800000,
      },
      {
        product: 'Product D',
        fy19: 1200000,
        fy20: 1400000,
        fy21: 1100000,
        fy22: 1300000,
        fy23: 1500000,
      },
      {
        product: 'Product E',
        fy19: 900000,
        fy20: 1100000,
        fy21: 1200000,
        fy22: 900000,
        fy23: 1100000,
      },
      {
        product: 'Product F',
        fy19: 1100000,
        fy20: 1300000,
        fy21: 1400000,
        fy22: 1600000,
        fy23: 1800000,
      },
      {
        product: 'Product G',
        fy19: 800000,
        fy20: 950000,
        fy21: 1100000,
        fy22: 850000,
        fy23: 950000,
      },
    ])


    const getRevenueInfo=async()=>{

        try{
            const response = await fetch('http://localhost:5000/revenueyear');
            const jsonData = await response.json();
            console.log(jsonData);
            setRevenueInfo(jsonData);
        }
        catch(err){
            console.log(err.messsage)
        }

    }

    useEffect(()=>{
        getRevenueInfo()
    },[])


  return (
    
          
    
    <div className="tinyChart">
    <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueInfo} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="product" />

<YAxis
  label={{ value: 'Revenue', angle: -90, position: 'insideLeft', offset: -10 }}
  tick={{ fontSize: 12 }}
  tickFormatter={yAxisFormatter} // Apply the custom tick formatter
/>


  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="fy19" name="FY19" stroke="#0088FE" strokeWidth={2} dot={{ stroke: '#0088FE', r: 4 }} />
  <Line type="monotone" dataKey="fy20" name="FY20" stroke="#00C49F" strokeWidth={2} dot={{ stroke: '#00C49F', r: 4 }} />
  <Line type="monotone" dataKey="fy21" name="FY21" stroke="#FFBB28" strokeWidth={2} dot={{ stroke: '#FFBB28', r: 4 }} />
  <Line type="monotone" dataKey="fy22" name="FY22" stroke="#FF5733" strokeWidth={2} dot={{ stroke: '#FF5733', r: 4 }} />
  <Line type="monotone" dataKey="fy23" name="FY23" stroke="#800080" strokeWidth={2} dot={{ stroke: '#800080', r: 4 }} />
</LineChart>

        </ResponsiveContainer>

    </div>
    
  

      
    
  )
}
