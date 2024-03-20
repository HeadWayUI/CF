import "./sponsorwidget.scss";
import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Link } from 'react-router-dom';


const Sponsorwidget = ({type,data}) => {

  const [count, setCount] = useState(0); 
  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";
 

  useEffect(() => {
    // Fetch data from endpoint
    // Example fetch request
    fetch(baseUrl + "/api/students")
      .then(response => response.json())
      .then(data => {
        // Assuming your data structure contains amount and diff fields
        console.log(data.length)
        setCount(data.count);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  let widgetData;

  //temporary
  const diff = 20;

  switch (type) {
    case "learners":
      widgetData = {
        title: "LEARNERS",
        isMoney: false,
        link: (
          <Link to="/learner">
            View all learners
          </Link>
        ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
      case "trainers":
      widgetData = {
        title: "TRAINERS",
        isMoney: false,
        link: (
          <Link to="/trainers">
            View all trainers
          </Link>
        ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "funds":
      widgetData = {
        title: "FUNDS",
        isMoney: true,
        link: (
          <Link to="#">
            See all Funds
          </Link>
        ),
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{widgetData.title}</span>
        <span className="counter">
          {widgetData.isMoney && "$"}  {data ? data.length : 0}
        </span>
        <span className="link">{widgetData.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {widgetData.icon}
      </div>
    </div>
  );
};

export default Sponsorwidget;
