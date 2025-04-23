import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Trusted from "./Trusted.jsx";
import Features from "./Features.jsx";
import WhyUs from "./WhyUs.jsx";
import StandOut from "./StandOut";
import Testimonials from "./Testimonials.jsx";
import Subscribe from "./Subscribe.jsx";

function Home() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Trusted />
     <Features />
     <WhyUs />
     <StandOut />
     <Testimonials />
     <Subscribe />
    </div>
  );
};


export default Home;