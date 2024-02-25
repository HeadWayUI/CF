import React from "react";
import { useState, useEffect } from "react";
import Heder from "../shared/Heder";
import Footer from "../shared/Footer";
import std from "../../assets/images/tech.png";

const Allfunders = () => {

  const [funders, setFunders] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl ="http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  useEffect(() => {
    const fetchFunders = async () => {
      try {
        const response = await fetch(baseUrl + "/api/donors"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFunders(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFunders();
  }, []);


  return (
    <>
      <Heder />
      <h1 style={{ textAlign: "center" }}>All Funders</h1>
      <div className="container">
        <div className="row">
        {funders.map((funder) => (
          <div className="col-lg-4 col-md-6">
            <div className="card mb-3 bg-light">
              <div className="row g-0" key={funder.id}>
                <div className="col-lg-6 col-md-6">
                  <img
                    src={funder.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{funder.firstName} {funder.lastName} </h5>
                    <p className="card-text">This is a wider card with</p>
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
  );
};

export default Allfunders;
