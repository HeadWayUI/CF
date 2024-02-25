import React  from 'react';
import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import Piechart from "../../sponsorcomponents/pie/Piechart"

const Sponsorpiechart = () => {
  return (
    <div className="list">
      <Sponsorsidebar/>
      <div className="listContainer">
        <Sponsornavbar/>
        <Piechart />
      </div>
    </div>
  )
}

export default Sponsorpiechart