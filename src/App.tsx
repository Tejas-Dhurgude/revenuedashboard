import Home from "./pages/Home/Home"
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Tasks from "./pages/tasks/Tasks";
import './styles/global.scss'
// import TopBox from "./components/topBox/TopBox";
// import AddZoneData from "./pages/addZoneData/AddZoneData";

// import RevenueYear from './components/revenueYear/RevenueYear'
import RevenueYear from "./components/revenueYear/RevenueYear";

import {
  createBrowserRouter,
  RouterProvider,
  
  Outlet,
} from "react-router-dom";
import MonthwiseRevenue from "./pages/monthwiseRevenue/MonthwiseRevenue";
import ZoneWiseRevenue from "./pages/zoneWiseRenevue/ZoneWiseRevenue";

function App() {


  const Layout=()=>{

    return(
      <div className="main">
          <Navbar/>
          <div className="container">
            <div className="menuContainer">
              <Menu/>
            </div>
            <div className="contentContainer">
              <Outlet/>
            </div>
          </div>
        
      <Footer/>
      </div>

    )

  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout/>
      ),
      children:[
        {
          path:"/",
        element:<Home/>
        },
        {
          path:"/users",
        element:<Users/>
        },
        {
          path:"/products",
        element:<Products/>
        },
        {
          path:"/monthwiserevenue",
          element:<MonthwiseRevenue/>
        },
        {
          path:"/zonewise",
          element:<ZoneWiseRevenue/>
        },
        
        {
          path:"/revenueyear",
          element:<RevenueYear/>
        },
        {
          path: "/tasks",
          element: <Tasks />,
        },
        {
          path:"/addzonewisedata",
          element:<Home/>,
        },

      ]
    },
    
    
  ]);


  return (
    <div>    
      <RouterProvider router={router}/>
      </div>


  )
}

export default App
