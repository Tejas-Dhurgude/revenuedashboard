import React, { useState, useEffect } from "react";
import './zoneWiseRevenue.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { PieChart, Pie, Cell } from "recharts";

export default function ZoneWiseRevenue() {
  const [data, setData] = useState([
    {
      zone: "north",
      value: 10,
      color: '#0088FE',
    },
    {
      zone: "south",
      value: 15,
      color: '#00C49F',
    },
    {
      zone: "nykaa",
      value: 14,
      color: '#FFBB28',
    },
    {
      zone: "west",
      value: 24,
      color: '#FF8042',
    },
  ]);

  const fetchData = async (year) => {
    const response = await fetch(`http://localhost:4000/zonewisereport/${year}`);
    const jsonData = await response.json();

    const updatedData = data.map((item) => ({
      ...item,
      value: jsonData[item.zone], // Update the value based on the fetched data
    }));

    setData(updatedData);
  }

  useEffect(() => {
    // Pass the desired year when calling fetchData
    fetchData(2023); // Change the year to the desired value
  }, []);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="zonewise">
      <h1>Zone-Wise Revenue</h1>
      <div className="box">
        <div className="report box1">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis
                dataKey="zone"
                label={{ value: "Zone", position: "insideBottom", offset: -10 }} // X-axis label
              />
              <YAxis
                label={{
                  value: "Revenue",
                  angle: -90,
                  position: "insideLeft",
                  offset: -10,
                }} // Y-axis label
              />
              <Tooltip contentStyle={{ background: "#fff", border: "1px solid #ccc" }} />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="box2">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={400} height={400}>
              <Tooltip formatter={(value, name) => [value, 'Revenue']} />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="options">
        {data.map((item) => (
          <div className="option" key={item.zone}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.zone}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
      
        </div>
      
      </div>
      
    </div>
  );
}
