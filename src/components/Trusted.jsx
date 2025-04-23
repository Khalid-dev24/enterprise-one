import React from "react";
import "../index.css";
import Waec from "../assets/waec.png";
import Mtn from "../assets/mtn.png";
import Hospitalita from "../assets/hospitalita.png";
import Alm from "../assets/alm.png";
import Data from "../assets/datanetwork.png";
import CyberSpace from "../assets/cyberspace.png";
import BlueChip from "../assets/bluechip.png";
import Bcl from "../assets/bcl.png";
import Auslind from "../assets/auslind.png";
import Tsc from "../assets/tsc.png";
import Rosette from "../assets/rosette.png";
import Raycon from "../assets/raycon.png";
import Prorad from "../assets/prorad.png";
import Primewater from "../assets/primewaterview.png";
import Medtoye from "../assets/medtoye.png";
import Jnci from "../assets/jnci.png";
import Hmvl from "../assets/hmvl.png";
import Fl from "../assets/fl.png";
import Alkaisar from "../assets/alkaisar.png";
import Bodej from "../assets/bodej.png";


function Trusted() {

  const logos = [
    Waec, Mtn, Hospitalita, Alm, Data, CyberSpace, BlueChip, Bcl, Auslind, Tsc,
    Rosette, Raycon, Prorad, Primewater, Medtoye, Jnci, Hmvl, Fl, Alkaisar, Bodej,
  ];

    return (
      <div className="trusted">
        <div className="trusted-header"> 
          <h1>Trusted by Leading <br />Enterprises</h1>
          <p>Proven Trust and Satisfaction <br />Around the World</p>
        </div>
        <div className="partner-logos-wrapper">
          <div className="partner-logos">
            {logos.map((logo, index) => (
                <img key={index} src={logo} alt={`Partner ${index + 1}`} />
            ))}
            {/* Duplicate logos for seamless scrolling */}
            {logos.map((logo, index) => (
                <img key={`duplicate-${index}`} src={logo} alt={`Partner ${index + 1}`} />
            ))}
          </div>
         </div>
      </div>
    );
  }
  
  
  export default Trusted;