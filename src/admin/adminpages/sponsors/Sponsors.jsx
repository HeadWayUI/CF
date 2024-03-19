import React from 'react';
import Sidebar from "../../admincomponents/sidebar/Sidebar"
import Navbar from "../../admincomponents/navbar/Navbar"
import Datatable2 from "../../admincomponents/datatable/Datatable2"

const Sponsors = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Datatable2 />
    </div>
  </div>
  )
}

export default Sponsors
