import React, { useState, useEffect } from "react";
import "./topBox.scss";
import { topDealUsers } from "../../data.ts";

const TopBox = () => {
  const [revenue, setRevenue] = useState([
    4000, 5000, 8000, 9000, 10000, 90000, 99990,
  ]);

  const currentYear = new Date().getFullYear();

  // useEffect(() => {
  //   // Create an async function to fetch data for all users
  //   const fetchDataForAllUsers = async () => {
  //     const updatedRevenue = await Promise.all(
  //       topDealUsers.map(async (user) => {
  //         try {
  //           const response = await fetch(
  //             `http://localhost:4000/revenuesofallproduct/${currentYear}/${user.productName}`
  //           );
  //           const jsonData = await response.json();
  //           return jsonData.total_sum;
  //         } catch (err) {
  //           console.log(err);
  //           return 0; // Default value in case of an error
  //         }
  //       })
  //     );

  //     setRevenue(updatedRevenue);
  //   };

  //   fetchDataForAllUsers(); // Call the data fetching function when the component mounts
  // }, [currentYear]);

  return (
    <div className="topBox">
      <h1 className="title">Top Revenues So far FY23</h1>
      <div className="list">
        {topDealUsers.map((user, index) => (
          <div className="listItem" key={user.id}>
            <div className="user">
            <i className="fa-brands fa-product-hunt"></i>
              <div className="userTexts">
                <span className="username">{user.productName}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">₹{revenue[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
