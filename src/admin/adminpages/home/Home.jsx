import Sidebar from "../../admincomponents/sidebar/Sidebar";
import Navbar from "../../admincomponents/navbar/Navbar";
import "./home.scss";
import React, { useState, useEffect } from 'react';
import Widget from "../../admincomponents/widget/Widget";
import Featured from "../../admincomponents/featured/Featured";
import Chart from "../../admincomponents/chart/Chart";
import Table from "../../admincomponents/table/Table";

const Home = () => {
  const [learnersData, setLearnersData] = useState(null);
  const [trainersdata, setTrainersData] = useState(null);
  const [sponsorsdata, setSponsorsData] = useState(null);
  const [fundsData, setFundsData] = useState(null);
  const [actuvalfundsData, setActuvalFundsData] = useState(null);
  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  useEffect(() => {
    // Fetch learners data
    fetch(baseUrl + "/api/students")
      .then(response => response.json())
      .then(data => setLearnersData(data))
      .catch(error => console.error('Error fetching learners data:', error));
 // Fetch sponsors data
      fetch(baseUrl + '/api/donors')
      .then(response => response.json())
      .then(data => setSponsorsData(data))
      .catch(error => console.error('Error fetching sponsors data:', error));
 // Fetch trainers data
      fetch(baseUrl + "/api/trainers")
      .then(response => response.json())
      .then(data => setTrainersData(data))
      .catch(error => console.error('Error fetching trainers data:', error));

    // Fetch funds data
    fetch('funds_endpoint_url')
      .then(response => response.json())
      .then(data => setFundsData(data))
      .catch(error => console.error('Error fetching funds data:', error));
  }, []);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="learners" data={learnersData} />
          <Widget type="trainers" data={trainersdata} />
          <Widget type="sponsors" data={sponsorsdata}/>
          <Widget type="fundsavailable" data = {fundsData}/>
          <Widget type="actualfunds" data = {actuvalfundsData}/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;

