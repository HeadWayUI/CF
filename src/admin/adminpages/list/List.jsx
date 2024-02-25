import "./list.scss"
import React  from 'react';
import Sidebar from "../../admincomponents/sidebar/Sidebar"
import Navbar from "../../admincomponents/navbar/Navbar"
import Datatable from "../../admincomponents/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List