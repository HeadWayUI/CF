import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from "../../assets/images/banner-1.jpg"
import img2 from "../../assets/images/banner-2.jpg"
import img3 from "../../assets/images/banner-3.jpg"

const Home = () => {
    const options = {
        item: 1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        animateOut:'fadeOut',
        nav:false,
        dots:true,
        margin:0,
        responsive:{
            1100:{
                items:1
            },
            724:{
                items:1
            },
            500:{
                items:1
            },
            370:{
                items:1,
                innerWidth:"100%",
                innerHeight:"100%",
            },
    },
};
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to ="/">CareerFunds</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link to ="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to ="/donate" className="nav-link">Doners</Link></li>
                            <li className="nav-item"><Link to ="/contact" className="nav-link">Contact</Link></li>
                            <li className="nav-item"><Link to ="/gallery" className="nav-link">Gallery</Link></li>
                            <li className="nav-item"><Link to ="/blog" className="nav-link">Blog</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to ="/login" className="nav-link">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <div className="block-31" style={{ position: "relative" }}>
                <div className="owl-carousel loop-block-31 ">
                    <div className="block-30 block-30-sm item" style={{ backgroundImage: "url('../assets/images/bg_1.jpg')" }} data-stellar-background-ratio="0.5">
                        <img src="../assets/images/img_1.jpg" alt="" className="img-fluid" />
                        <div className="container">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-md-7">
                                    <h2 className="heading mb-5">Free Website Template for Charity Websites.</h2>
                                    <p style={{ display: "inline-block" }}><a href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox className="ftco-play-video d-flex"><span className="play-icon-wrap align-self-center mr-4"><span className="ion-ios-play"></span></span> <span className="align-self-center">Watch Video</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <OwlCarousel className='owl-theme' {...options}>
                <div class='item'>
                    <h4 style={{height:"700px"}}><img src={img1} alt='bg image-01' /></h4>
                </div>
                <div class='item'>
                    <h4 style={{height:"700px"}}><img src={img2} alt='bg image-01' /></h4>
                </div>
                <div class='item'>
                    <h4 style={{height:"700px"}}><img src={img3} alt='bg image-01' /></h4>
                </div>
            </OwlCarousel>

            {/* WHO ARE WE START */}
            <div className="site-section section-counter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pr-5">
                            <div className="block-48">
                                <span className="block-48-text-1">Served Over</span>
                                <div className="block-48-counter ftco-number" data-number="1321901">0</div>
                                <span className="block-48-text-1 mb-4 d-block">Children in 150 Countries</span>
                                <p className="mb-0"><a href="#" className="btn btn-white px-3 py-2">View Our Program</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 welcome-text">
                            <h2 className="display-4 mb-3">Who Are We?</h2>
                            <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
                            <p className="mb-0"><a href="#" className="btn btn-primary px-3 py-2">Learn More</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* WHO ARE WE END */}

            {/* OUR MISSION START  */}
            <div className="site-section border-top">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="media block-6">
                                <div className="icon"><span className="ion-ios-bulb"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Our Mission</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href="#" className="link-underline">Learn More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="media block-6">
                                <div className="icon"><span className="ion-ios-cash"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Make Donations</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href="#" className="link-underline">Learn More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="media block-6">
                                <div className="icon"><span className="ion-ios-contacts"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">We Need Volunteers</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <p><a href="#" className="link-underline">Learn More</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
  {/* OUR MISSION END  */}
  
  {/* LATEST FUND RAISERS START  */}
            <div className="site-section fund-raisers bg-light">
                <div className="container">
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>Latest Fundraisers</h2>
                            <p className="lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p><a href="#" className="link-underline">View All Fundraisers</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 block-11">
                 <div className='container'>
                    <OwlCarousel className='owl-theme'>   
                        <div className="card fundraise-item" style={{margin:"5px"}}>
                            <a href="#"><img className="card-img-top" src="../assets/images/img_1.jpg" alt="Image placeholder" /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="#">Water Is Life. Clean Water In Urban Area</a></h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                <div className="progress custom-progress-success">
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                            </div>
                        </div>


                        <div className="card fundraise-item" style={{margin:"5px"}}>
                            <a href="#"><img class="card-img-top" src="../assets/images/img_7.jpg" alt="Image placeholder" /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="#">Need Shelter for Children in Africa</a></h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                <div className="progress custom-progress-success">
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                            </div>
                        </div>

                        <div className="card fundraise-item" style={{margin:"5px"}}>
                            <a href="#"><img class="card-img-top" src="../assets/images/img_3.jpg" alt="Image placeholder" /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="#">Children Needs Education</a></h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                <div className="progress custom-progress-success">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "28%" }} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                            </div>
                        </div>


                        <div className="card fundraise-item" style={{margin:"5px"}}>
                            <a href="#"><img class="card-img-top" src="../assets/images/img_4.jpg" alt="Image placeholder" /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="#">Refugees Needs Food</a></h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                <div className="progress custom-progress-success">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "28%" }} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                            </div>
                        </div>


                        <div className="card fundraise-item" style={{margin:"5px"}}>
                            <a href="#"><img class="card-img-top" src="../assets/images/img_6.jpg" alt="Image placeholder" /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="#">Voluteer </a></h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                <div className="progress custom-progress-success">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "28%" }} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                            </div>
                        </div>

                        <div className="card fundraise-item" style={{margin:"5px"}} >
                            <a href="#"><img class="card-img-top" src="../assets/images/img_3.jpg" alt="Image placeholder" /></a>
                            <div className="card-body">
                                <h3 className="card-title"><a href="#">Children Needs Food</a></h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                <div className="progress custom-progress-success">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "28%" }} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                            </div>
                        </div>
                        </OwlCarousel>
                    </div>
                    </div>
                </div>
            
 {/* LATEST FUND RAISERS END  */}

 {/* LATEST DONATION START */}

            <div className="site-section fund-raisers">
                <div className="container">
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>Latest Donations</h2>
                            <p className="lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="mb-5"><a href="#" className="link-underline">View All Donations</a></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-5">
                            <div className="person-donate text-center">
                                <img src="../assets/images/person_1.jpg" alt="Image placeholder" className="img-fluid" />
                                <div className="donate-info">
                                    <h2>Jorge Smith</h2>
                                    <span className="time d-block mb-3">Donated Just now</span>
                                    <p>Donated <span className="text-success">$252</span> <br /> <em>for</em> <a href="#" className="link-underline fundraise-item">Water Is Life. Clean Water In Urban Area</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-5">
                            <div className="person-donate text-center">
                                <img src="../assets/images/person_2.jpg" alt="Image placeholder" className="img-fluid" />
                                <div className="donate-info">
                                    <h2>Christine Charles</h2>
                                    <span className="time d-block mb-3">Donated 1 hour ago</span>
                                    <p>Donated <span className="text-success">$400</span> <br /> <em>for</em> <a href="#" className="link-underline fundraise-item">Children Needs Education</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-5">
                            <div className="person-donate text-center">
                                <img src="../assets/images/person_3.jpg" alt="Image placeholder" className="img-fluid" />
                                <div className="donate-info">
                                    <h2>Albert Sluyter</h2>
                                    <span className="time d-block mb-3">Donated 4 hours ago</span>
                                    <p>Donated <span className="text-success">$1,200</span> <br /> <em>for</em> <a href="#" className="link-underline fundraise-item">Need Shelter for Children in Africa</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-5">
                            <div className="person-donate text-center">
                                <img src="../assets/images/person_4.jpg" alt="Image placeholder" className="img-fluid" />
                                <div className="donate-info">
                                    <h2>Andrew Holloway</h2>
                                    <span className="time d-block mb-3">Donated 9 hours ago</span>
                                    <p>Donated <span className="text-success">$100</span> <br /> <em>for</em> <a href="#" className="link-underline fundraise-item">Water Is Life. Clean Water In Urban Area</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* LATEST DONATION END */}

{/* SUCCESS STORIES START */}
            <div className="featured-section overlay-color-2" >

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="../assets/images/success.jpg" alt="Image placeholder" className="img-fluid" />
                        </div>
                        <div className="col-md-6 pl-md-5">
                            <span className="featured-text d-block mb-3">Success Stories</span>
                            <h2>Water Is Life. We Successfuly Provide Clean Water in South East Asia</h2>
                            <p className="mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <span className="fund-raised d-block mb-5">We have raised $100,000</span>

                            <p><a href="#" className="btn btn-success btn-hover-white py-3 px-5">Read The Full Story</a></p>
                        </div>

                    </div>
                </div>

            </div>
{/* SUCCESS STORIES END */}

{/* LATEST NEWS START */}
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <h2>Latest News</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="post-entry">
                                <a href="#" className="mb-3 img-wrap">
                                    <img src="../assets/images/img_4.jpg" alt="Image placeholder" className="img-fluid" />
                                </a>
                                <h3><a href="#">Be A Volunteer Today</a></h3>
                                <span className="date mb-4 d-block text-muted">July 26, 2018</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p><a href="#" className="link-underline">Read More</a></p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="post-entry">
                                <a href="#" className="mb-3 img-wrap">
                                    <img src="../assets/images/img_5.jpg" alt="Image placeholder" className="img-fluid" />
                                </a>
                                <h3><a href="#">You May Save The Life of A Child</a></h3>
                                <span className="date mb-4 d-block text-muted">July 26, 2018</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p><a href="#" className="link-underline">Read More</a></p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="post-entry">
                                <a href="#" className="mb-3 img-wrap">
                                    <img src="../assets/images/img_6.jpg" alt="Image placeholder" className="img-fluid" />
                                </a>
                                <h3><a href="#">Children That Needs Care</a></h3>
                                <span className="date mb-4 d-block text-muted">July 26, 2018</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                <p><a href="#" className="link-underline">Read More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* LATEST NEWS END */}

{/* CONTACT-US START */}
            <div className="featured-section overlay-color-2">

                <div className="container">
                    <div className="row">

                        <div className="col-md-6 mb-5 mb-md-0">
                            <img src="../assets/images/volunter.jpg" alt="Image placeholder" className="img-fluid" />
                        </div>

                        <div className="col-md-6 pl-md-5">

                            <div className="form-volunteer">

                                <h2>Be A Volunteer Today</h2>
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control py-2" id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" className="form-control py-2" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="v_message">Email</label>
                                        <textarea name="v_message" id="" cols="30" rows="3" className="form-control py-2" placeholder="Write your message"></textarea>
                                        <input type="text" className="form-control py-2" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-white px-5 py-2" value="Send" />
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
{/* CONTACT-US END */}

{/* FOOTER START */}
            <footer className="footer">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-4">
                            <h3 className="heading-section">About Us</h3>
                            <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            <p className="mb-5">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p><a href="#" className="link-underline">Read  More</a></p>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <h3 className="heading-section">Recent Blog</h3>
                            <div className="block-21 d-flex mb-4">
                                <figure className="mr-3">
                                    <img src="../assets/images/img_1.jpg" alt="" className="img-fluid" />
                                </figure>
                                <div className="text">
                                    <h3 className="heading"><a href="#">Water Is Life. Clean Water In Urban Area</a></h3>
                                    <div className="meta">
                                        <div><a href="#"><span className="icon-calendar"></span> July 29, 2018</a></div>
                                        <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                        <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="block-21 d-flex mb-4">
                                <figure className="mr-3">
                                    <img src="../assets/images/img_2.jpg" alt="" className="img-fluid" />
                                </figure>
                                <div className="text">
                                    <h3 className="heading"><a href="#">Life Is Short So Be Kind</a></h3>
                                    <div className="meta">
                                        <div><a href="#"><span className="icon-calendar"></span> July 29, 2018</a></div>
                                        <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                        <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="block-21 d-flex mb-4">
                                <figure className="mr-3">
                                    <img src="../assets/images/img_4.jpg" alt="" className="img-fluid" />
                                </figure>
                                <div className="text">
                                    <h3 className="heading"><a href="#">Unfortunate Children Need Your Love</a></h3>
                                    <div className="meta">
                                        <div><a href="#"><span className="icon-calendar"></span> July 29, 2018</a></div>
                                        <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                        <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="block-23">
                                <h3 className="heading-section">Get Connected</h3>
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">Ragini Residency 3 - D , Sriram Nagar, Kondapur, Hyderabad, India</span></li>
                                    <li><a href="#"><span className="icon icon-phone"></span><span className="text">+91 9898989898</span></a></li>
                                    <li><a href="#"><span className="icon icon-envelope"></span><span className="text">careerfundsinfo@gmail.com.com</span></a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className="row pt-5">
                        <div className="col-md-12 text-center">

                            <p>

                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ion-ios-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >SK@HDS</a>

                            </p>

                        </div>
                    </div>
                </div>
            </footer>
            {/* FOOTER END */}
        </>
    )
}

export default Home
