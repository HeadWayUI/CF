import "./sponsorsingle.scss";
import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import Sponsorchart from "../../sponsorcomponents/chart/Sponsorchart";
// import Sponsorlist from "../../sponsorpages/list/Sponsorlist";
import React, { useState, useEffect } from 'react';

const Sponsorsingle = ({ id }) => {
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState(null);
  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

   // Function to fetch user data based on selected ID
   const fetchStudentData = async (userId) => {
    try {
      // Make an API call to fetch user data based on selectedId
      // Replace this with your actual API endpoint
      const response = await fetch( baseUrl + `/api/student/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      alert(data)
      setData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle error state if needed
    }
  };

  // Fetch user data when selectedId changes
  useEffect(() => {
    if (userId) {
      fetchStudentData();
    }
  }, [userId]);

  return (
    <div className="single">
      <Sponsorsidebar />
      <div className="singleContainer">
        <Sponsornavbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            {data && (
            <div className="item">
              <img
                src={data.image}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.firstName} {data.lastName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.emailAddress}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data.contactNumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Ragini Residency 3-D , Kondapur , HYD , TS
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
            )}
          </div>
          
          <div className="right">
            <Sponsorchart aspect={3 / 2} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Sponsorlist/>
        </div> */}
      </div>
    </div>
  );
};

export default Sponsorsingle;
