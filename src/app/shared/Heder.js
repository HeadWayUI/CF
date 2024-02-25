import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from "../../assets/images/bb.png"
import img2 from "../../assets/images/b-02.png"
import img3 from "../../assets/images/b-03.png"

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
                    <Link to= "/alldonars">
                    <button type="button" class="btn btn-primary position-relative">
                        Sponsors
                        <span class="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger">
                        5
                        </span>
                    </button>
                    </Link>

                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link to ="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to ="/alltechnology" className="nav-link">Technologies</Link></li>
                            <li className="nav-item"><Link to ="/allclients" className="nav-link">Clients</Link></li>
                            <li className="nav-item"><Link to ="/fund" className="nav-link">Funds</Link></li>
                            <li className="nav-item"><Link to ="/gallery" className="nav-link">Gallery</Link></li> 
                            <li className="nav-item"><Link to ="/blog" className="nav-link">Articles</Link></li>               
                            <li className="nav-item"><Link to ="/contact" className="nav-link">Contact</Link></li>
                            <li className="nav-item"><Link to ="/login" className="nav-link">Login</Link></li>                            
                        </ul>
                    </div>
                </div>
            </nav>
            <OwlCarousel className='owl-theme' {...options}>
                <div class='item'>
                    <h4 ><img src={img1} alt='bg image-01' /></h4>
                </div>
                <div class='item'>
                    <h4 style={{height:"550px"}}><img src={img2} alt='bg image-01' /></h4>
                </div>
                <div class='item'>
                    <h4 style={{height:"550px"}}><img src={img3} alt='bg image-01' /></h4>
                </div>
            </OwlCarousel>;  
        </>
    )
}

export default Heder;
