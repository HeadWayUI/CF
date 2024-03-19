import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import "./sponsorhome.scss";
import React, { useState, useEffect } from 'react';
import Sponsorwidget from "../../sponsorcomponents/widget/Sponsorwdget";
import Sponsorfeatured from "../../sponsorcomponents/featured/Sponsorfeatured";
import Sponsorchart from "../../sponsorcomponents/chart/Sponsorchart";



const Sponsorhome = () => {
 
  const [learnersData, setLearnersData] = useState(null);
  const [fundsData, setFundsData] = useState(null);
  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  useEffect(() => {
    // Fetch learners data
    fetch(baseUrl + "/api/students")
      .then(response => response.json())
      .then(data => setLearnersData(data))
      .catch(error => console.error('Error fetching learners data:', error));

    // Fetch funds data
    fetch('funds_endpoint_url')
      .then(response => response.json())
      .then(data => setFundsData(data))
      .catch(error => console.error('Error fetching funds data:', error));
  }, []);

  return (
    <div className="home">
      <Sponsorsidebar />
      <div className="homeContainer">
        <Sponsornavbar />
        <div className="widgets">
          <Sponsorwidget type="learners" data={learnersData} />
          <Sponsorwidget type="funds"   data={fundsData} />
        </div>
        <div className="charts">
          <Sponsorfeatured />
          <Sponsorchart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Sponsorhome;

