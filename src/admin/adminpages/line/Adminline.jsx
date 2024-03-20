import React from 'react';
import Sidebar from "../../admincomponents/sidebar/Sidebar";
import Navbar from "../../admincomponents/navbar/Navbar";
import BasicLineChart from '../../admincomponents/line/Line';
const Adminline = () => {
  return (
    <>
    <div className="list">
          <Sidebar />
          <div className="listContainer">
          <Navbar />
          <BasicLineChart />
          </div>
       </div> 
  </>
  )
}

export default Adminline
