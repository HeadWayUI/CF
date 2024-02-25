import React from "react";
import Heder from "../shared/Heder";
import Footer from "../shared/Footer";
import std from "../../assets/images/tech.png";
import { useState, useEffect } from "react";

const Alltechnology = () => {

  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl ="http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch(baseUrl + "/api/technologies/all"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTechnologies();
  }, []);

  return (
    <>
      <Heder />
      <h1 style={{ textAlign: "center" }}>All Technologies</h1>
      <div className="container">
        <div className="row">
        {technologies.map((technology) => (
          <div className="col-lg-4 col-md-6">
            <div className="card mb-3 bg-light">
              <div className="row g-0" key={technology.id}>
                <div className="col-lg-6 col-md-6">
                  <img
                    src={technology.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{technology.techTitle}</h5>
                    <p className="card-text">{technology.description}</p>
                    <p className="card-text">
                      {/* <small className="text-muted">About Certification</small> */}
                      <small className="text-muted">{technology.certification}</small>
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

export default Alltechnology;
