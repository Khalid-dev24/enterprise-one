import React from "react";
import "../index.css";
import HeroImg from "../assets/hero-img.png";


function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-text">
        <h1 style={{ fontFamily: 'Anton, sans-serif' }}>Optimize Your Business <br /> with a Trusted <br /> ERP & CRM</h1>
        <p>A powerful ERP & CRM designed to streamline <br />operations, enhance collaboration, and drive <br />business growth.</p>
        <button className="hero-btn">Try For Free</button>
      </div>
      <div className="hero-image">
        <img src={HeroImg} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;