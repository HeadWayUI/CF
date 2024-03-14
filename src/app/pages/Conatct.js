import React from "react";
import Heder from "../shared/Heder";
import Footer from "../shared/Footer";
import { useState, useEffect } from 'react';

const Conatct = () => {
   //be in touch end-point
   const [firstName, setFirstName] = useState('');
   const [contactNumber, setContactNumber] = useState('');
   const [emailAddress, setEmailAddress] = useState('');
   const [description, setDescription] = useState('');
   const [status, setStatus] = useState('');
   

   const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { firstName, contactNumber, emailAddress, description };

    try {
        const response = await fetch('http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090/contactus/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setStatus('Thank you for your message! We will be in touch soon.');
            setFirstName('');
            setContactNumber('');
            setEmailAddress('');
            setDescription('');
        } else {
            setStatus('There was an error submitting the form. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        setStatus('There was an error submitting the form. Please try again.');
    }
}

  return (
    <>
      <Heder />
      <h1 style={{ textAlign: "center" }}>Get In Touch</h1>
      <div className="site-section">
        <div className="container">
          <div className="row block-09">
            <div className="col-md-6">
              <form action="#"  onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control px-3 py-3"
                    placeholder="Your Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control px-3 py-3"
                    placeholder="Your Phone Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control px-3 py-3"
                    placeholder="Your Email" value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control px-3 py-3"
                    placeholder="Message" value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
              {status && <p className="status">{status}</p>} {/* Display status message */}
            </div>
            <div  className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.941298450315!2d78.34795397400079!3d17.462523500638618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb938d0b68ea43%3A0xf730d5e0e5025ad!2sHeadway%20data%20systems%20private%20limited!5e0!3m2!1sen!2sin!4v1710397449364!5m2!1sen!2sin" width="600" height="450" style={{ textAlign: "border:0;"  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Conatct;
