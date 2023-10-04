import React from 'react'
import Heder from '../shared/Heder'
import Footer from '../shared/Footer'
const Gallery = () => {
    return (
      <>
        <Heder />
        <div className="block-31" style={{ position: "relative" }}>
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-7 text-center">
                <h2 className="heading">Our Gallery</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a
                  href="images/img_1.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_1.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="images/img_2.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_2.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="images/img_3.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_3.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="images/img_4.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_4.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>

              <div className="col-md-4">
                <a
                  href="images/img_1.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_1.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="images/img_2.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_2.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>

              <div className="col-md-4">
                <a
                  href="images/img_1.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_1.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="images/img_2.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_2.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="images/img_3.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_3.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="images/img_4.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_4.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>

              <div className="col-md-4">
                <a
                  href="images/img_1.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_1.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="../assets/images/img_2.jpg"
                  className="img-hover"
                  data-fancybox="gallery"
                >
                  <span className="icon icon-search"></span>
                  <img
                    src="../assets/images/img_2.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="featured-section overlay-color-2"
          style={{ backgroundImage: "url('../assets/images/volunter.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <img
                  src="../assets/images/volunter.jpg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
              </div>

              <div className="col-md-6 pl-md-5">
                <div className="form-volunteer">
                  <h2>Be A Volunteer Today</h2>
                  <form action="#" method="post">
                    <div className="form-group">
                      {/* <label for="name">Name</label> */}
                      <input
                        type="text"
                        className="form-control py-2"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="form-group">
                      {/* <label for="email">Email</label> */}
                      <input
                        type="text"
                        className="form-control py-2"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      {/* <label for="v_message">Email</label> */}
                      <textarea
                        name="v_message"
                        id=""
                        cols="30"
                        rows="3"
                        className="form-control py-2"
                        placeholder="Write your message"
                      ></textarea>
                      {/* <input type="text" className ="form-control py-2" id="email">  */}
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-white px-5 py-2"
                        value="Send"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Gallery
