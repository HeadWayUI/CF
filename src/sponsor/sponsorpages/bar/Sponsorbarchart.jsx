import React  from 'react';
import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import Barchart from "../../sponsorcomponents/bar/Barchart";
// import SponsorChart from '../../sponsorcomponents/chart/Sponsorchart';

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