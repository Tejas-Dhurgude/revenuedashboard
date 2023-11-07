
import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import './pieCardBox.scss';

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const currentMonthName = monthNames[currentMonth];

const year='2023'
const PieChartBox = () => {
  const [sortedData, setSortedData] = useState([]);
  const[text,setText]=useState('View Revenue report')

const [data, setData] = useState([
  { name: "ProductA", value: 800, color: "#0088FE" },
  { name: "ProductB", value: 300, color: "#00C49F" },
  { name: "ProductC", value: 300, color: "#FFBB28" },
  { name: "ProductD", value: 200, color: "#FF8042" },
]);
const topvolume = async () => {
  try {
    const response = await fetch(`http://localhost:4000/top/October`);
    const jsonData = await response.json();
    
    if(text=='View Revenue report'){
    return jsonData.rev.result_array;
  }
  else{
    return jsonData.rev1.result_array;
    
  }
  
  
  
  } catch (err) {
    console.error(err);
    return [];
  }
};

useEffect(() => {
  const fetchData = async () => {
    const data = await topvolume();
    const sortedDataResult = data.sort((a, b) => b[1] - a[1]).slice(0, 4);
    setSortedData(sortedDataResult);
    console.log(sortedData)
    // Update the data array with the top 4 products
    setData((prevData) => {
      const newData = [...prevData];
      sortedDataResult.forEach((item, index) => {
        newData[index].name = item[0];
        let a=parseInt(item[1], 10);
        console.log(typeof(a))
        newData[index].value = a;
      });
      console.log(data)
      return newData;
    });
  };

  fetchData();
}, [text]);

console.log(data)

function handleClick(){
  if(text=='View Revenue report'){
  setText('View Volume report')
}
else{
  setText('View Revenue report')
}
}


  return (


    <div className="pieChartBox">
      <h1 className="th">Top Products In terms of Volume FY23</h1>
      {/* <button onClick={handleClick} className="btn1"> {text}</button> */}
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
                
      </div>
      
       <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
       
       
    </div>

  );
};

export default PieChartBox;
