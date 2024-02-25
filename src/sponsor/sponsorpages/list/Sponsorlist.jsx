import "./sponsorlist.scss"
import React  from 'react';
import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import Sponsordatatable from "../../sponsorcomponents/datatable/Sponsordatatable"

const Sponsorlist = () => {
  return (
    <div className="list">
      <Sponsorsidebar/>
      <div className="listContainer">
        <Sponsornavbar/>
        <Sponsordatatable/>
      </div>
    </div>
  )
}

export default Sponsorlist