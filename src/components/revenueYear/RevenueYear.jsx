import { useEffect, useState } from 'react';
import './revenueYear.scss';
import React from 'react';
import TinyChart from './TinyChart';
import BarChartUse from './BarChartUse';


export default function RevenueYear() {
  
  const [revenueInfo, setRevenueInfo] = useState([
    { year: 'FY19', revenue: 45000 },
    { year: 'FY20', revenue: 52000 },
    { year: 'FY21', revenue: 58000 },
    { year: 'FY22', revenue: 62000 },
    { year: 'FY23', revenue: 70000 },
  ]);

  
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
    <>
  <div className="title2">Overall Revenue</div>
<div className='revenueyear'>
  
  <div >
  <TinyChart/>
  </div>
  <div>
  <BarChartUse revenueInfo={revenueInfo} />
  </div>
</div>
</>

  );
}
