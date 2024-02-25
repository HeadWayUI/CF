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
             
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Gallery
