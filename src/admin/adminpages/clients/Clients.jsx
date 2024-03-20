import React from 'react';
import Sidebar from "../../admincomponents/sidebar/Sidebar"
import Navbar from "../../admincomponents/navbar/Navbar"
import ClientDatatable from "../../admincomponents/datatable/ClientDatatable"

const Clients = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <ClientDatatable />
    </div>
  </div>
  )
}

export default Clients
