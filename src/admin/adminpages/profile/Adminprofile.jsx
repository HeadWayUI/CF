import React from 'react';
import Sidebar from "../../admincomponents/sidebar/Sidebar";
import Navbar from "../../admincomponents/navbar/Navbar";
import Profile from '../../admincomponents/profile/Profile';

const Adminprofile = () => {
  return (
    <>
       <div className="list">
         <Sidebar />
            <div className="listContainer">
            <Navbar />
            <Profile />
            </div>
         </div> 
    </>
  )
}

export default Adminprofile
