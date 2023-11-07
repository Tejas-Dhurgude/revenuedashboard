
import { productA,productB,productC,productD } from '../../data';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BarChartA from '../../components/barChartA/BarChartA';
import './monthwiseRevenue.scss'

export default function MonthwiseRevenue() {
    const currentDate = new Date();

// Get the current year
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
const year = currentDate.getFullYear();

// Format the date as "DD/MM/YYYY"
const formattedDate = `${day}/${month}/${year}`;
console.log(productA)

  return (
    <div className="monthwise-revenue">
        <div className="title">
        FY23 Products [Revenues vs Volume]
        </div>
        <div className="produce-wise-graph">
          {/* <div className="box b1">a</div>
          <div className="box b1">b</div>
           */}
        <div className='box box1'>
          <h1>HexCush</h1>
        <BarChartA data={productA} />
        </div>

        <div className='box box2'>
          <h1>Fill8</h1>
          <BarChartA data={productB}/></div>
        <div className='box box3'>
          <h1>Npack</h1>
          <BarChartA data={productC}/></div>
        <div className='box box4'>
          <h1>Paper Bag</h1>
          <BarChartA data={productD}/></div>
          <div className='box box4'>
          <h1>Bubble</h1>
          <BarChartA data={productB}/></div>
          <div className='box box4'>
          <h1>Corrugated Box</h1>
          <BarChartA data={productA}/></div>
          <div className='box box4'>
          <h1>Other misc</h1>
          <BarChartA data={productC}/></div>
          
        </div>
    </div>
  )
}
