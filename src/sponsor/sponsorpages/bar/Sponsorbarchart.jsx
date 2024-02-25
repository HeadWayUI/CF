import React  from 'react';
import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import Barchart from "../../sponsorcomponents/bar/Barchart"

const Sponsorbarchart = () => {
  return (
    <div className="list">
      <Sponsorsidebar/>
      <div className="listContainer">
        <Sponsornavbar/>
        <Barchart />
      </div>
    </div>
  )
}

export default Sponsorbarchart