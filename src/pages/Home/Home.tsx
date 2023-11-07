
import TopBox from '../../components/topBox/TopBox'
import './Home.scss'
import {ChartBox} from '../../components/chartBox/ChartBox'
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser} from '../../data'
import PieChartBox from '../../components/pieCardBox/PieCardBox'
import { useState } from 'react'

// export const chartBoxUser = {
//   color: "#8884d8",
//   icon: "/userIcon.svg",
//   title: "Revenue Collected",
//   number: "2200",
//   dataKey: "users",
//   percentage: '+4',
//   chartData: [
//     { name: "Week1", users: 400 },
//     { name: "Week2", users: 600 },
//     { name: "Week3", users: 500 },
//     { name: "Week4", users: 700 },
//     {name:"Week5",users:900}
//   ],
// };



export default function Home() {

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const[data1,setData1]=useState(
     {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Collection Perfomed",
  number: "22000",
  dataKey: "users",
  percentage: '+8',
  chartData: [
    { name: "Week1", users: 400 },
    { name: "Week2", users: 600 },
    { name: "Week3", users: 500 },
    { name: "Week4", users: 700 },
    {name:"Week5",users:900}
  ],
})

const[data2,setData2]=useState(
  {
color: "#8884d8",
icon: "/userIcon.svg",
title: "Target Revenue",
number: "23000",
dataKey: "users",
percentage: '+8',
chartData: [
 { name: "Week1", users: 400 },
 { name: "Week2", users: 600 },
 { name: "Week3", users: 500 },
 { name: "Week4", users: 700 },
 {name:"Week5",users:900}
],
})

  const d = new Date();
  let name = month[d.getMonth()];
  const year=d.getFullYear()

  // Define the base URL
// const baseURL = 'http://localhost:4000'; // Update with your server's address

// // Function to fetch data for a specific week
// const fetchDataForWeek = async (weekNumber, month) => {
//   try {
//     const response = await fetch(`${baseURL}/weekwisedata/${weekNumber}/${month}`);
//     const data = await response.json();
//     return data.total_sum;
//   } catch (err) {
//     console.log(err);
//     return 0; // Default value in case of an error
//   }
// };

// // Process the chartData array
// let s=0;
// const processChartData = async () => {
//   for (let weekNumber = 1; weekNumber <= 5; weekNumber++) {
    
//     const month = 'October'; // You can change this based on your requirements

//     const totalSum = await fetchDataForWeek(weekNumber, month);
//     console.log(typeof(totalSum))
//     s=s+parseInt(totalSum)
//     chartBoxUser.number=s

//     // Find the corresponding week object and update the 'users' property
//     const week = chartBoxUser.chartData.find(item => item.name === `Week${weekNumber}`);
    
//       week.users = totalSum;

    
//   }

//   // Now, chartBoxUser.chartData is updated with the fetched data
//   console.log(chartBoxUser.chartData);
// };

// // Call the function to process the chart data
// processChartData();

// chartBoxUser.chartData = chartBoxUser.chartData.filter(item => item.users !== 0);

// const fetchtarget=async(week,year,n)=>{
  
// }


  return (
    <>
    
    <div className='title-head'>
      <div>October, 2023</div>
      <div>Officedeck Technologies Pvt Ltd</div>
       </div>
    <div className="home">
      
      <div className="box box1">
        <TopBox/>
      
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
      
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBox {...data1}/></div>
      <div className="box box6"><ChartBox {...data2}/></div>
      


      {/* <div className="box box7"><BigChartBox/></div> */}
      {/* <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>

      //  */}
      
      
    </div>
    </>
  )
}
