import React from 'react';
import Heder from "../shared/Heder";
import Footer from "../shared/Footer";
import std from "../../assets/images/tech.png";
import { useState, useEffect } from "react";

const Alltrainers = () => {

  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl ="http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await fetch(baseUrl + "/api/trainers"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTrainers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrainers();
  }, []);


  return (
    <>
    
    <Heder />
      <h1 style={{ textAlign: "center" }}>All Trainers</h1>
      <div className="container">
  <div className="row">
  {trainers.map((trainer) => (
    <div className="col-lg-4 col-md-6">
  <div className="card mb-3 bg-light">
    <div className="row g-0" key={trainer.id}>
      <div className="col-lg-6 col-md-6">
        <img src={trainer.image} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="card-body">
          <h5 className="card-title">{trainer.firstName} {trainer.lastName}</h5>
          <p className="card-text">
          {trainer.course}
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
))}
  </div>

</div>
      <Footer />
      
    </>
  )
}

export default Alltrainers
