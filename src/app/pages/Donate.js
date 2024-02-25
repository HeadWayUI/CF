import React from 'react';
import Heder from '../shared/Heder';
import Footer from '../shared/Footer';
import { useState, useEffect } from 'react';

const Donate = () => {
  const [donars, setDonars] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "http://ec2-51-20-142-197.eu-north-1.compute.amazonaws.com:9090/"

  useEffect(() => {
    const fetchDonars = async () => {
      try {
        const response = await fetch(baseUrl + 'api/donors'); // Replace with your API endpoint
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

    return (
      <>
        <Heder />
        <div className="site-section fund-raisers">
          <div className="container">
            <div className="row mb-3 justify-content-center">
              <div className="col-md-8 text-center">
                <h2>Latest Doners</h2>
                <p className="lead">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            
            <div className="row">
            {donars.map((donar) => ( 
              <div className="col-md-6 col-lg-3 mb-5">
                <div className="person-donate text-center">
                  <img
                    src="../assets/images/person_3.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                  <div className="donate-info">
                    <h2>{donar.firstName}</h2>
                    <span className="time d-block mb-3">
                      {donar.emailAddress}
                    </span>
                    <p>
                      Donated <span className="text-success">$1,200</span>{" "}
                      <br /> <em>for</em>{" "}
                      <a href="#" className="link-underline fundraise-item">
                        Need Shelter for Children in Africa
                      </a>
                    </p>
                  </div>
                </div>
              </div>
                ))}
            </div>  
          </div>
        </div>

        <Footer />
      </>
    );
}

export default Donate
