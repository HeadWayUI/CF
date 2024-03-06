import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import "./sponsorhome.scss";
import React  from 'react';
import Sponsorwidget from "../../sponsorcomponents/widget/Sponsorwdget";
import Sponsorfeatured from "../../sponsorcomponents/featured/Sponsorfeatured";
import Sponsorchart from "../../sponsorcomponents/chart/Sponsorchart";
// import Sponsortable from "../../sponsorcomponents/table/Sponsortable";


const Sponsorhome = () => {
  return (
    <div className="home">
      <Sponsorsidebar />
      <div className="homeContainer">
        <Sponsornavbar />
        <div className="widgets">
          <Sponsorwidget type="learners" />
          <Sponsorwidget type="funds" />
        </div>
        <div className="charts">
          <Sponsorfeatured />
          <Sponsorchart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Sponsortable />
        </div> */}
      </div>
    </div>
  );
};

export default Sponsorhome;

