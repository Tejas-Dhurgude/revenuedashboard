import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import task from "../../task.png";
import completed from "../../completed.png";
import { useDate } from "../../date";
import { taskChart } from "../../data";

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

import "./tasks.scss";

const Tasks = () => {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());

  const { date, time, wish } = useDate();

  const [display, setDisplay] = useState([]);

  const businessDevelopment = [
    "This week, we successfully closed a deal with a new client, expanding our customer base and revenue streams.",
    "We conducted a market analysis and identified new opportunities for growth in the technology sector, which we plan to explore in the coming months.",
    "Our team attended a business networking event where we established valuable connections with potential partners and investors.",
    "We initiated a partnership with a key supplier, ensuring a stable and cost-effective supply chain for our products.",
    
  ];

  const marketing = [
    "In our latest marketing campaign, we saw a 20% increase in website traffic and a 15% rise in social media engagement.",
    "Our email marketing efforts resulted in a 10% boost in click-through rates, driving more conversions and sales.",
    "We launched a successful influencer marketing campaign, reaching a wider audience and enhancing brand awareness.",
    "The marketing team is currently testing new ad creatives to optimize our online advertising campaigns for better performance.",
    
  ];

  const operationAndEngineering = [
    "This week, our manufacturing processes were streamlined, reducing production time and costs.",
    "Our engineering team successfully implemented automation in our assembly line, improving efficiency and product quality.",
    "We conducted a safety audit, resulting in the implementation of new safety protocols to ensure a secure working environment for our employees.",
    "The operations team optimized our supply chain management, resulting in reduced lead times and inventory costs.",
   
  ];

  const internationalBusiness = [
    "Our expansion into the European market reached a significant milestone, with the opening of our first overseas office.",
    "We secured new trade agreements with international partners, facilitating global trade and import/export activities.",
    "Our team successfully navigated complex international regulations, ensuring compliance in all regions of operation.",
    "We are in the final stages of negotiations with a strategic partner in Asia, which will open up new opportunities in the Asian market.",
    
  ];

  const weeklyReport = [
    "This week's progress and achievements were excellent, showcasing the growth and potential of our business.",
    "Our teams have been working tirelessly to implement our strategic initiatives, and we are on track to meet our quarterly goals.",
    "We are closely monitoring our key performance indicators, which are showing positive trends in various areas of our business.",
    "Feedback from customers and stakeholders continues to be positive, which reflects our commitment to quality and excellence.",
  
  ];

  // Function to update the display array based on the selected category
  const updateDisplay = (category) => {
    switch (category) {
      case "Business Development":
        setDisplay(businessDevelopment);
        break;
      case "Marketing":
        setDisplay(marketing);
        break;
      case "Operation and Engineering":
        setDisplay(operationAndEngineering);
        break;
      case "International Business":
        setDisplay(internationalBusiness);
        break;
      case "Weekly Report":
        setDisplay(weeklyReport);
        break;
      default:
        setDisplay([]);
        break;
    }
  };

  return (
    <div className="tasks">
      <div className="box box1">
        <p className="pin">Weekly Pinned</p>
        <div className="task">
          <img src={task} alt="" />
          <div>
            <p>Business Development</p>
            <button onClick={() => updateDisplay("Business Development")}>Proceed</button>
          </div>
        </div>
        <div className="task">
          <img src={task} alt="" />
          <div>
            <p>Marketing</p>
            <button onClick={() => updateDisplay("Marketing")} className="btn">Proceed</button>
          </div>
        </div>
        <div className="task">
          <img src={completed} alt="" />
          <div>
            <p>Operation and Engineering</p>
            <button onClick={() => updateDisplay("Operation and Engineering")}>Proceed</button>
          </div>
        </div>
        <div className="task">
          <img src={completed} alt="" />
          <div>
            <p>International Business</p>
            <button onClick={() => updateDisplay("International Business")}>Proceed</button>
          </div>
        </div>
        <div className="task">
          <img src={completed} alt="" />
          <div>
            <p>Weekly Report</p>
            <button onClick={() => updateDisplay("Weekly Report")}>Proceed</button>
          </div>
        </div>
      </div>
      <div className="box box2">
        <h3>
          {wish}
          <br />
          {date}
        </h3>
        <ul className="u">
          {display.map((note, index) => (
            <li key={index} className="l">{note}</li>
          ))}
        </ul>
      </div>
      <div className="box box3">
        <h3>{time}</h3>
        <span className="quote">"Measure what Matters!"</span>
      </div>
      <div className="box4">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="box box5">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={taskChart}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="none" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              position={{ x: 800, y: 60 }}
            />
            <Legend />
            <Bar dataKey="online" fill="#8884d8" />
            <Bar dataKey="offline" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Tasks;
