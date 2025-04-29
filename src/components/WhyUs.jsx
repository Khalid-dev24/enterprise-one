import React from "react";
import "../index.css";
import WhyUsImage from "../assets/whyus-img.png";

function WhyUs() {
    return (
        <div className="why-us" id="whyus">
            <div className="whyus-content">
                <h1>Why EnterpriseOne?</h1>
                <p>EnterpriseOne simplifies business management with a powerful, open-source ERP & CRM designed for efficiency and growth. Scalable and intuitive, it empowers teams to streamline operations and make smarter decisions.</p>
                <button className="whyus-btn">Try For Free <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.371094 9.3457V6.99219L7.19727 4.81445L0.371094 2.49023V0.351562L9.63867 3.92578V5.91797L0.371094 9.3457Z" fill="#2C2C31"/>
                </svg></button>
            </div>

            <div className="whyus-image">
                <img src={WhyUsImage} alt="Why Us" />
            </div>
        </div>
    
    );
};


export default WhyUs;