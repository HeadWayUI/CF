import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'popper.js';
import { useState, useEffect } from 'react';

import "../../assets/css/style.css";
import "../../assets/css/open-iconic-bootstrap.min.css"
import "../../assets/css/animate.css"
import "../../assets/css/owl.carousel.min.css"
import "../../assets/css/owl.theme.default.min.css"
import "../../assets/css/magnific-popup.css"
import "../../assets/css/aos.css"
import "../../assets/css/ionicons.min.css"
import "../../assets/css/bootstrap-datepicker.css"
import "../../assets/css/jquery.timepicker.css"
import "../../assets/css/flaticon.css"
import "../../assets/css/icomoon.css"
import "../../assets/css/fancybox.min.css"
import "../../assets/css/bootstrap.css"
import Footer from '../shared/Footer';
import Heder from '../shared/Heder';



const Home = () => {

        const [donars, setDonars] = useState([]);
        const [technology, setTechnology] = useState([]);
        const [client, setClient] = useState([]);
        const [students, setStudents] = useState([]);
        const [trainers, setTrainers] = useState([]);
        const [stories, setStories] = useState([]);
        const [loading, setLoading] = useState(true);
        const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";
        const imgUrl = 'https://careerfund-images.s3.eu-north-1.amazonaws.com/images.jpeg';


        // Donar api endpoint
        useEffect(() => {
            const fetchDonars = async () => {
              try {
                const response = await fetch(baseUrl + '/api/donors'); // Replace with your API endpoint
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

        // Technology api endpoint

        useEffect(() => {
            const fetchTechnologies = async () => {
              try {
                const response = await fetch(baseUrl + '/api/technologies/all'); // Replace with your API endpoint
                if (!response.ok) {
                  throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setTechnology(data);
              } catch (error) {
                console.error('Error fetching user data:', error);
              } finally {
                setLoading(false);
              }
            };
            fetchTechnologies();
        }, []);


        // Clients api endpoint
        useEffect(() => {
            const fetchClients = async () => {
              try {
                const response = await fetch(baseUrl + '/clients/all'); // Replace with your API endpoint
                if (!response.ok) {
                  throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setClient(data);
              } catch (error) {
                console.error('Error fetching user data:', error);
              } finally {
                setLoading(false);
              }
            };
            fetchClients();
        }, []);
        
        // Success stories endpoint
        useEffect(() => {
            const fetchStories = async () => {
              try {
                const response = await fetch(baseUrl + '/api/stories'); // Replace with your API endpoint
                if (!response.ok) {
                  throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setStories(data);
              } catch (error) {
                console.error('Error fetching user data:', error);
              } finally {
                setLoading(false);
              }
            };
            fetchStories();
        }, []);

        // students api endpoints 
        useEffect(() => {
            const fetchStudents = async () => {
              try {
                const response = await fetch(baseUrl + '/api/students'); // Replace with your API endpoint
                if (!response.ok) {
                  throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setStudents(data);
              } catch (error) {
                console.error('Error fetching user data:', error);
              } finally {
                setLoading(false);
              }
            };
            fetchStudents();
        }, []);

        // Trainers api endpoints 

        useEffect(() => {
            const fetchTrainers = async () => {
              try {
                const response = await fetch(baseUrl + '/api/trainers'); // Replace with your API endpoint
                if (!response.ok) {
                  throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setTrainers(data);
              } catch (error) {
                console.error('Error fetching user data:', error);
              } finally {
                setLoading(false);
              }
            };
            fetchTrainers();
        }, []);

        const contact = (e)=>{
            e.preventDefault();
        }

            
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
        <Heder/>
            {/* WHO ARE WE START */}
            <div className="site-section section-counter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pr-5">
                            <div className="block-48">
                                <span className="block-48-text-1">Served Over</span>
                                <div className="block-48-counter ftco-number" data-number="13">0</div>
                                <span className="block-48-text-1 mb-4 d-block">Children in 150 Countries</span>
                                <p className="mb-0"><Link to ="/blog" className="btn btn-white px-3 py-2">View Our Program</Link></p>
                            </div>
                        </div>
                        <div className="col-md-6 welcome-text">
                            <h2 className="display-4 mb-3">Who Are We?</h2>
                            <p className="lead">Far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
                            <p className="mb-0"><Link to ="/about" className="btn btn-primary px-3 py-2">Know More</Link></p>
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

  {/* Students start  */}
<div className="site-section fund-raisers">
                <div className="container">
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>On-Going Interns</h2>
                            <p className="lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="mb-5"><Link to ="/allinterns" className="link-underline">View All Interns</Link></p>
                        </div>
                    </div>
                    <div className="row">
                    {students.map((student) => (
                        <div className="col-md-6 col-lg-3 mb-5">
                            <div className="person-donate text-center">
                                <img src={student.image} alt="Image placeholder" className="img-fluid" />
                                <div className="donate-info">
                                    <h2>{student.firstName} {student.lastName}</h2>
                                    <span className="time d-block mb-3">{student.course}</span>
                                    <p>{student.description}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
{/* students end  */}

{/* Trainers Start  */}
<div className="site-section fund-raisers bg-light">
                <div className="container">
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>Our Trainers</h2>
                            <p className="lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="mb-5"><Link to ="/alltrainers" className="link-underline">View All Trainers</Link></p>
                        </div>
                    </div>
                    <div className="row">
                    {trainers.map((trainer) => (
                        <div className="col-md-6 col-lg-3 mb-5">
                            <div className="person-donate text-center">
                                <img src={trainer.image} alt="Image placeholder" className="img-fluid" />
                                <div className="donate-info">
                                    <h2>{trainer.firstName} {trainer.lastName}</h2>
                                    <span className="time d-block mb-3">{trainer.course}</span>
                                    <p>Certified In Java</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
{/* Trainers End  */}

  {/* Technologies Start */}
  <div className="site-section fund-raisers bg-light">
                <div className="container">
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>Technologies</h2>
                            <p className="lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p><Link to ="/alltechnology" className="link-underline">View All Technologies</Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 block-11">
                 <div className='container'>
                    <OwlCarousel className='owl-theme'> 
                    {technology.map((technology) => (  
                        <div className="card fundraise-item" style={{margin:"5px"}}>
                            <a href="#"><img className="card-img-top" src={technology.image} alt="Image placeholder" /></a>
                            
                            <div className="card-body"> 
                                    <h3 className="card-title"><a href="#">{technology.techTitle}</a></h3>
                                    <p className="card-text">{technology.description}</p>
                                    <span className="donation-time mb-3 d-block">About Certification</span>
                                    <span className="fund-raised d-block">{technology.certification}</span>                            
                            </div>
                            
                        </div>
                        ))}
                        </OwlCarousel>
                    </div>
                    </div>
                </div>
  {/* Technologies End */}
  
  {/* LATEST CLIENT START  */}
            <div className="site-section fund-raisers ">
                <div className="container">
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>Clients</h2>
                            <p className="lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p><Link to ="/allclients" className="link-underline">View All Clients</Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 block-11">
                 <div className='container'>
                    <OwlCarousel className='owl-theme'> 
                    {client.map((client) => (  
                        <div className="card fundraise-item" style={{margin:"5px"}} key={client.id}>
                            <a href="#"><img className="card-img-top" src={client.image} alt="Image placeholder" /></a>
                            
                            <div className="card-body"> 
                                    <h3 className="card-title"><a href="#">{client.name}</a></h3>
                                    <p className="card-text">{client.description}</p>
                                    {/* <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                    <div className="progress custom-progress-success">
                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <span className="fund-raised d-block">$12,000 raised of $30,000</span>                             */}
                            </div>
                            
                        </div>
                        ))}
                        </OwlCarousel>
                    </div>
                    </div>
                </div>
            
 {/* LATEST CLIENT END  */}

 {/* LATEST DONATION START */}

            <div className="site-section fund-raisers bg-light">
                <div className="container">
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>Latest Funders</h2>
                            <p className="lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="mb-5"><Link to ="/alldonars" className="link-underline">View All Funders</Link></p>
                        </div>
                    </div>
                    <div className="row">
                    {donars.map((donar) => (
                        <div className="col-md-6 col-lg-3 mb-5">
                            <div className="person-donate text-center">
                                <img src={imgUrl} alt="Image placeholder" className="img-fluid" />
                                <div className="donate-info">
                                    <h2>{donar.firstName} {donar.lastName}</h2>
                                    <span className="time d-block mb-3">{donar.emailAddress}</span>
                                    <p>Occupation</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
{/* LATEST DONATION END */}

{/* SUCCESS STORIES START */}
       
            <div className="featured-section overlay-color-2" >
                <div className="container">
                <OwlCarousel className='owl-theme' {...options}>
                {stories.map((storie) => (
                    <div className="row" key={storie.ssId}>
                        <div className="col-md-6">
                            <img src={storie.image} alt="Image placeholder" className="img-fluid" />
                        </div>
                        <div className="col-md-6 pl-md-5">
                            <span className="featured-text d-block mb-3">{storie.title}</span>
                            <h2>{}</h2>
                            <p className="mb-3">{storie.description}</p>
                            <span className="fund-raised d-block mb-5">We have raised $100,000</span>

                            {/* <p><a href="#" className="btn btn-success btn-hover-white py-3 px-5">Read The Full Story</a></p> */}
                        </div>   
                    </div>
                      ))}
                    </OwlCarousel>
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
                                <h2>Be In Touch .. !</h2>
                                <form action="#" method="post" >
                          
                                {/* {formError && <p className="error">{formError}</p>} */}
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text"  name="firstName" className="form-control py-2" id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email"  name='emailAddress' className="form-control py-2" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="number" name='contactNumber' className="form-control py-2" id="email" placeholder="Enter your phoneNumber" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="v_message">Message</label>
                                        <textarea name="description"   cols="30" rows="2" className="form-control py-2" placeholder="Write your message"></textarea>
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

<Footer/>
        </>
    )
}

export default Home;
