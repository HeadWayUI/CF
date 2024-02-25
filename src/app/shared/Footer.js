import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className ="footer">
                <div className ="container">
                    <div className ="row mb-5">
                        <div className ="col-md-6 col-lg-4">
                            <h3 className ="heading-section">About Us</h3>
                            <p className ="mb-5">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p><a href="#" className ="link-underline">Read  More</a></p>
                        </div>
                        <div className ="col-md-6 col-lg-4">
                            <div className ="block-23">
                                <h3 className ="heading-section">Get Connected</h3>
                                <ul>
                                    <li><span className ="icon icon-map-marker"></span><span className ="text">Ragini Residency 3 - D , Sriram Nagar , Kondapur, Hyderabad, India</span></li>
                                    <li><a href="#"><span className ="icon icon-phone"></span><span className ="text">+91 9898989898</span></a></li>
                                    <li><a href="#"><span className ="icon icon-envelope"></span><span className ="text">careerfundsinfo@gmail.com</span></a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className ="row pt-5">
                        <div className ="col-md-12 text-center">

                            <p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.  */}
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className ="ion-ios-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >SK@HDS</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.  */}
                            </p>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
