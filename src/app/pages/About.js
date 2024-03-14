import React from 'react'
import Heder from '../shared/Heder'
import Footer from '../shared/Footer'

const About = () => {
  return (
    <>
    <Heder />
    
    <div className="block-31" style={{position: "relative"}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="heading">Welcome to CareerFunds!</h2>
            </div>
          </div>
        </div>
      </div>

  <div className="site-section mb-5">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-12 mb-2"><h1>About Us</h1></div>
        <div className="col-md-6">
            <p className="lead">At CareerFunds, we are dedicated to empowering individuals to achieve their career aspirations and unlock their full potential. Whether you're a recent graduate exploring career opportunities or a seasoned professional looking to advance in your field, we're here to support you every step of the way.</p>
            <p className="lead">Our mission is to provide accessible and comprehensive resources to help individuals navigate the ever-evolving landscape of the job market. From career counseling and resume writing to interview preparation and skill development, we offer a range of services tailored to meet your unique needs.</p>
            
          </div>
          <div className="col-md-6">
          <img src="../assets/images/volunter.jpg" alt="Image placeholder" width={550} height={400} style={{borderRadius:8}}/>
          </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-12 mb-5 text-center mt-5">
          <h2>Leadership</h2>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="../assets/images/person_1.jpg" alt="Image placeholder" />
                <h3 className="block-38-heading">Greeg Graham</h3>
                <p className="block-38-subheading">CEO</p>
              </div>
              <div className="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="../assets/images/person_2.jpg" alt="Image placeholder" />
                <h3 className="block-38-heading">Jennifer Greive</h3>
                <p className="block-38-subheading">President</p>
              </div>
              <div className="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="../assets/images/person_3.jpg" alt="Image placeholder" />
                <h3 className="block-38-heading">Patrick Marx</h3>
                <p className="block-38-subheading">Marketer</p>
              </div>
              <div className="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="../assets/images/person_4.jpg" alt="Image placeholder" />
                <h3 className="block-38-heading">Mike Coolbert</h3>
                <p className="block-38-subheading">Partner</p>
              </div>
              <div className="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <Footer />
    </>
  )
}

export default About
