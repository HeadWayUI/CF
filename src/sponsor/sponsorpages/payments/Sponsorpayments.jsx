import "./sponsorpayments.scss"
import React  from 'react';
import Sponsorsidebar from "../../sponsorcomponents/sidebar/Sponsorsidebar";
import Sponsornavbar from "../../sponsorcomponents/navbar/Sponsornavbar";
import Sponsorpayments from "../../sponsorcomponents/payments/Sponsorpayments";


const Sponsorlist = () => {
  return (
    <div className="list">
      <Sponsorsidebar/>
      <div className="listContainer">
        <Sponsornavbar/>
        <Sponsorpayments />
      </div>
    </div>
  )
}

export default Sponsorlist