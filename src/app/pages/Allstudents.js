import React from "react";
import { useState, useEffect } from "react";
import Heder from "../shared/Heder";
import Footer from "../shared/Footer";
import std from "../../assets/images/tech.png";

const Allstudents = () => {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl ="http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(baseUrl + "/api/students"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  return (
    <>
      <Heder />
      <h1 style={{ textAlign: "center" }}>All Students</h1>
      <div className="container">
        <div className="row">
        {students.map((student) => (
          <div className="col-lg-4 col-md-6">
            <div className="card mb-3 bg-light">
              <div className="row g-0" key={student.id}>
                <div className="col-lg-6 col-md-6">
                  <img
                    src={student.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{student.firstName} {student.lastName}</h5>
                    <p className="card-text">{student.course}</p>
                    <p className="card-text">
                      <small className="text-muted">{student.description}</small>
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

export default Allstudents;
