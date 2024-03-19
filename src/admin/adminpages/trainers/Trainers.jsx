import React from 'react';
import Sidebar from "../../admincomponents/sidebar/Sidebar"
import Navbar from "../../admincomponents/navbar/Navbar"
import Datatable3 from "../../admincomponents/datatable/Datatable3"

const Trainers = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Datatable3 />
    </div>
  </div>
  )
}

export default Trainers
