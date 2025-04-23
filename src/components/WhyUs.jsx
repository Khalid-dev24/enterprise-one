import React from "react";
import "../index.css";
import WhyUsImage from "../assets/whyus-img.png";

function WhyUs() {
    return (
        <div className="why-us">
            <div className="why-us-content">
                <h1>Why EnterpriseOne?</h1>
                <p>EnterpriseOne simplifies business management with a powerful, open-source ERP & CRM designed for efficiency and growth. Scalable and intuitive, it empowers teams to streamline operations and make smarter decisions.</p>
                <button className="whyus-btn">Try For Free</button>
            </div>

            <div className="whyus-image">
                <img src={WhyUsImage} alt="Why Us" />
            </div>
        </div>
    
    );
};


export default WhyUs;