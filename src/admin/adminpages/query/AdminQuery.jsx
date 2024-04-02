import React from 'react';
import Sidebar from "../../admincomponents/sidebar/Sidebar";
import Navbar from "../../admincomponents/navbar/Navbar";
import Query from '../../admincomponents/query/Query';
import Querydatatable from '../../admincomponents/datatable/Querydatatable';

const AdminQuery = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Querydatatable />
    </div>
  </div>
  )
}

export default AdminQuery
