import React  from 'react';
import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import Sponsorfeatured from '../../sponsorcomponents/featured/Sponsorfeatured';

const Sponsorfunds = () => {
  return (
    <div className="list">
      <Sponsorsidebar/>
      <div className="listContainer">
        <Sponsornavbar/>
        <Sponsorfeatured/>
      </div>
    </div>
  )
}

export default Sponsorfunds
