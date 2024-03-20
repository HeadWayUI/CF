import React from 'react';
import "../list/sponsorlist.scss";
import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import Sponsordatatable2 from '../../sponsorcomponents/datatable/Sponosrdatatable2';
const Trainers1 = () => {
  return (
    <>
       <div className="list">
      <Sponsorsidebar/>
      <div className="listContainer">
        <Sponsornavbar/>
        <Sponsordatatable2/>
      </div>
    </div>
    </>
  )
}

export default Trainers1
