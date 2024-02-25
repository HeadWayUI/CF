import "./sponsorsidebar.scss";
import React  from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";


const Sponsorsidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/sponsoradmin" style={{ textDecoration: "none" }}>
          <span className="logo">Career Fund</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/sponsoradmin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
            <Link to="/learner" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Learners</span>
            </li>
          </Link>
          <Link  to = "/funds" style={{ textDecoration: "none" }} >
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Funds</span>
          </li>
          </Link>
          <p className="title">PAYMENTS</p>
          <Link to="/sponsorpayments" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Raised</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>History</span>
          </li>
          </Link>
          <p className="title">Revenue Chart View</p>
          <Link to="/sponsorpie" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Pie</span>
          </li>
          </Link>
          <Link to = "/sponsorbar" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Bar</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sponsorsidebar;
