import React from 'react';
import Sidebar from "../../admincomponents/sidebar/Sidebar";
import Navbar from "../../admincomponents/navbar/Navbar";
import Bar from "../../admincomponents/bar/Bar";

const Adminbar = () => {
  return (
    <>
      <div className="list">
            <Sidebar />
            <div className="listContainer">
            <Navbar />
            <Bar />
            </div>
         </div> 
    </>
  )
}

export default Adminbar
