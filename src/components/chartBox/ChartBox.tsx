import { Link } from "react-router-dom"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';





import './chartBox.scss'

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

export function ChartBox(props:Props) {
  return (
    <div>

        <div className="chartBox">
          <div className="boxInfo">
            <div className="title">
              <img src={props.icon} alt="" />
              <span> </span>
              <span className="th">{props.title}</span>
            </div>
            <h1>₹{props.number}</h1>
            <Link to="/" style={{color:props.color}}>
            View All
            </Link>
          </div>
          <div className="chartInfo">
            <div className="chart">
            <ResponsiveContainer width="99%" height="100%">

        <LineChart  data={props.chartData}>
          <Tooltip
          contentStyle={{background:"transparent",border:"none"}}
          labelStyle={{display:"none"}}
          position={{x:10,y:60}}
          />
          <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
            </div>
            {/* <div className="texts">
              <span className="percentage"
              style={{color:props.percentage<0?"tomato":"LimeGreen"}}
              >{props.percentage}</span>
              <span className="duration">this month
              
              </span>
            </div>
             */}
          </div>
        </div>
      
    </div>
  )
}
