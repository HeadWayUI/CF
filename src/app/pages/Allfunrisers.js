import React from 'react'
import Heder from '../shared/Heder'
import Footer from '../shared/Footer'

const Allfunrisers = () => {
  return (
    <>
        <Heder />
            <div className ="block-31" style={{position: "relative"}}>
                <div className ="owl-carousel loop-block-31 ">
                        <div className ="container">
                            <div className ="row align-items-center justify-content-center text-center">
                                <div className ="col-md-7">
                                    <h2 className ="heading mb-5">Our Fundrisers</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className ="site-section bg-light">
                <div className ="container">
                    <div className ="row">

                        <div className ="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
                            <div className ="post-entry">
                                <a href="blog-single.html" className ="mb-3 img-wrap">
                                    <img src="../assets/images/img_4.jpg" alt="Image placeholder" className ="img-fluid" />
                                </a>
                                <h3><a href="#">Be A Volunteer Today</a></h3>
                                <span className ="date mb-4 d-block text-muted">July 26, 2018</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p><a href="#" className ="link-underline">Read More</a></p>
                            </div>
                        </div>

                        <div className ="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
                            <div className ="post-entry">
                                <a href="blog-single.html" className ="mb-3 img-wrap">
                                    <img src="../assets/images/img_4.jpg" alt="Image placeholder" className ="img-fluid" />
                                </a>
                                <h3><a href="#">Be A Volunteer Today</a></h3>
                                <span className ="date mb-4 d-block text-muted">July 26, 2018</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p><a href="#" className ="link-underline">Read More</a></p>
                            </div>
                        </div>
                        <div className ="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mb-lg-0">
                            <div className ="post-entry">
                                <a href="blog-single.html" className ="mb-3 img-wrap">
                                    <img src="../assets/images/img_5.jpg" alt="Image placeholder" className ="img-fluid" />
                                </a>
                                <h3><a href="#">You May Save The Life of A Child</a></h3>
                                <span className ="date mb-4 d-block text-muted">July 26, 2018</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p><a href="#" className ="link-underline">Read More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
  )
}

export default Allfunrisers
