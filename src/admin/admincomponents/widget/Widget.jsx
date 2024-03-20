import "./widget.scss";
import React  from 'react';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Widget = ({ type ,data}) => {

  const [donars, setDonars] = useState([]);
  const [client, setClient] = useState([]);
  const [students, setStudents] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl ="http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  // let data;

        // Donar api endpoint
        useEffect(() => {
          const fetchDonars = async () => {
            try {
              const response = await fetch(baseUrl + '/api/donors'); // Replace with your API endpoint
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setDonars(data);
            } catch (error) {
              console.error('Error fetching user data:', error);
            } finally {
              setLoading(false);
            }
          };
          fetchDonars();
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
          <Link to="/learners" >
            View all Learners
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
    case "sponsors":
      widgetData = {
        title: "SPONSORS",
        isMoney: false,
        link: (
          <Link to="/sponsorlist">
            View all Sponsors
          </Link>
        ),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
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
            <Link to="/trainerslist">
              View all Trainers
            </Link>
          ),
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        };
        break;
    case "fundsavailable":
      widgetData = {
        title: "FUNDS AVAILABLE",
        isMoney: true,
        link: (
          <Link to="#" >
           See All Funds
          </Link>
        ),
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "actualfunds":
      widgetData = {
        title: "ACTUAL FUNDS",
        isMoney: true,
        link: (
          <Link to="#">
            See All Actual Funds
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
          {widgetData.isMoney && "$"} {data ? data.length : 0}
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

export default Widget;
