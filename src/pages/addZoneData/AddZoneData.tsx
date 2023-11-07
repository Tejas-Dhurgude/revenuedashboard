import React, { useState } from 'react';
import './addZoneData.scss';

export default function AddZoneData() {
  const [zone, setZone] = useState('north');
  const [revenue, setRevenue] = useState('0');

  const handleAddData = async () => {
    try {
      const data = {
        value: revenue,
        // Include any other data you want to send
      };
  
      const response = await fetch(`http://localhost:4000/zonedata/${zone}/${new Date().getFullYear()}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.status === 200) {
        setZone('')
        setRevenue('')
        alert('Data updated successfully');
      } else {
        alert('Data update failed');
      }
    } catch (error) {
      console.error(error);
      alert('Internal Server Error');
    }
  };
  
  return (
    <>
      <h1>Zone-Wise Data Addition</h1>
      <div className="parent">
        <div className="zone">
          <div className="input1">
            <label>Select Zone</label>
            <select className="zoneSelect" onChange={(e) => setZone(e.target.value)}>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="west">West</option>
              <option value="nykaa">Nykaa</option>
            </select>
          </div>
          <div className="input2">
            <label>Enter Revenue</label>
            <input
              type="text"
              onChange={(e) => setRevenue(e.target.value)}
              value={revenue}
            />
          </div>
          <div className="submit">
            <button onClick={handleAddData}>Add Data</button>
          </div>
        </div>
      </div>
    </>
  );
}
