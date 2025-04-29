import React from "react";
import SubscribeImg from "../assets/subscribe-img.png";

function Subscribe(){
   return (
      <section className="subscription">
         <div className="subscription-content">
            <h3>Get steady updates on EnterpriseOne Features</h3>
            <h2>Stay informed, <br />grow smarter.</h2>
            <h4>Subscribe to our Newsletter.</h4>
            <input type="text" placeholder="Your Email"/>
            <button>Subscribe</button>
         </div>

         <div><img src= {SubscribeImg} alt="photo" /></div>
      </section>
   );
};

export default Subscribe;