import React from "react";
import Heder from "../shared/Heder";
import Footer from "../shared/Footer";

const Conatct = () => {
  return (
    <>
      <Heder />

      <div class="block-31" style={{ position: "relative" }}>
        <div class="owl-carousel loop-block-31 ">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7 text-center">
                <h2 class="heading">Get In Touch</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row block-09">
            <div className="col-md-12">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Conatct;
