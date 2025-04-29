import React from "react";
import "../index.css";
import HeroImg from "../assets/hero-img.png";


function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Optimize Your Business <br /> with a Trusted <br /> <span>ERP & CRM</span></h1>
        <p>A powerful ERP & CRM designed to streamline <br />operations, enhance collaboration, and drive <br />business growth.</p>
        <div className="column">
          <button className="hero-btn">Try For Free <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.371094 9.3457V6.99219L7.19727 4.81445L0.371094 2.49023V0.351562L9.63867 3.92578V5.91797L0.371094 9.3457Z" fill="#2C2C31"/>
            </svg>
          </button> <span><a href="#contactus">Talk to an Expert</a></span>
        </div>
       
      </div>
      <div className="hero-image">
        <img src={HeroImg} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;