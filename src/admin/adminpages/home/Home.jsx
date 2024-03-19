import Sidebar from "../../admincomponents/sidebar/Sidebar";
import Navbar from "../../admincomponents/navbar/Navbar";
import "./home.scss";
import React  from 'react';
import Widget from "../../admincomponents/widget/Widget";
import Featured from "../../admincomponents/featured/Featured";
import Chart from "../../admincomponents/chart/Chart";
import Table from "../../admincomponents/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="learners" />
          <Widget type="trainers" />
          <Widget type="sponsors" />
          <Widget type="fundsavailable" />
          <Widget type="actualfunds" />
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

