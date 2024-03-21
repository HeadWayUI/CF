import "./single.scss";
import Sidebar from "../../admincomponents/sidebar/Sidebar";
import Navbar from "../../admincomponents/navbar/Navbar";
import Chart from "../../admincomponents/chart/Chart";
import List from "../../admincomponents/table/Table";
import React, { useState , useEffect }  from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const Single = () => {
  const {studentId} = useParams();
  console.log(studentId)
  const [learner , setLearner ] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090/api/student/${id}`)
  //     .then(res => {
  //       console.log(res.data);
  //       setLearner(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, [id]);

  useEffect(() => {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token');
    
    console.log('local' + token)
  
    // Make sure token is available
    if (token) {
      axios.get(`http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090/api/student/${studentId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res.data);
        setLearner(res.data);
      })
      .catch(err => console.log(err));
    }
  }, [studentId]); // No need to include token in the dependency array as it's read from localStorage
  


  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{learner.firstName} {learner.lastName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{learner.emailAddress}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 9988775566</span>
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
          </div>
          <div className="right">
            <Chart aspect={3 / 2} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
