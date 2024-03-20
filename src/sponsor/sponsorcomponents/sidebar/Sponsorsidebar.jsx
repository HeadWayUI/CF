import "./sponsorsidebar.scss";
import React  from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Sponsorsidebar = () => {

  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      // Send a request to your logout endpoint
      await fetch(baseUrl + '/api/logout', {
        method: 'POST',
        credentials: 'include', // If using cookies for authentication
      });
      
      // Assuming successful logout, redirect the user to the login page or homepage
        navigate('/login');// Replace '/login' with your desired redirect route
    } catch (error) {
      console.error('Logout failed', error);
      // Handle any errors here, e.g., display an error message to the user
    }
  };
  
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
          <Link to="/trainers" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>trainers</span>
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
            <ExitToAppIcon className="icon" onClick={handleLogout} style={{ cursor: 'pointer' }} />
            <span onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sponsorsidebar;
