import React from 'react';
import Sidebar from "../../admincomponents/sidebar/Sidebar";
import Navbar from "../../admincomponents/navbar/Navbar";
import Pie from "../../admincomponents/pie/Pie";

const Adminpie = () => {
  return (
    <>
         <div className="list">
         <Sidebar />
            <div className="listContainer">
            <Navbar />
            <Pie />
            </div>
         </div> 
    </>
  )
}

export default Adminpie
