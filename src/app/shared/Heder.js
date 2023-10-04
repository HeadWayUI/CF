import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from "../../assets/images/banner-1.jpg"
import img2 from "../../assets/images/banner-2.jpg"
import img3 from "../../assets/images/banner-3.jpg"

const Heder = () => {
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
                    <Link className="navbar-brand" to ="/">Career Funds</Link>
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
            </OwlCarousel>;  
        </>
    )
}

export default Heder
