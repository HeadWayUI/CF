// Sponsorsingle.jsx
import React, { useState, useEffect } from 'react';
import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import Sponsorchart from "../../sponsorcomponents/chart/Sponsorchart";

const Sponsorsingle = ({ id }) => {
  const [data, setData] = useState(null);
  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  // Function to fetch student data based on ID
  const fetchStudentData = async (id) => {
    try {
      const response = await fetch(baseUrl + `/api/students/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch student data');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  useEffect(() => {
    // Fetch student data when component mounts
    fetchStudentData(id);
  }, [id]);

  return (
    <div className="single">
      <Sponsorsidebar />
      <div className="singleContainer">
        <Sponsornavbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            {data && (
              <div className="item">
                <img src={data.image} alt="" className="itemImg" />
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
                    <span className="itemValue">{data.address}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">{data.country}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <Sponsorchart aspect={3 / 2} title="User Spending (Last 6 Months)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorsingle;
