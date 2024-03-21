import React  from 'react';
import Sidebar from "../../../admincomponents/sidebar/Sidebar"
import Navbar from "../../../admincomponents/navbar/Navbar"

const Studentview = () => {
  return (
    <>
     <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <h1>hello</h1>
      </div>
    </div>
    
    </>
  );
};

export default Studentview;
