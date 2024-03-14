import React from "react";
import Heder from "../shared/Heder";
import Footer from "../shared/Footer";

const Conatct = () => {
  return (
    <>
      <Heder />
      <h1 style={{ textAlign: "center" }}>Get In Touch</h1>
      <div className="site-section">
        <div className="container">
          <div className="row block-09">
            <div className="col-md-6">
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control px-3 py-3"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control px-3 py-3"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control px-3 py-3"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control px-3 py-3"
                    placeholder="Message"
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
