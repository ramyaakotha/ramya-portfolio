import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container" id="Hero" >
      <div className="hero-content">
        <h2> Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless
          Visually Stunning Web Solutions 
        </p>
      </div>

      <div className="hero-img">
        <div>
            <div className="tech-icon">
                <img src="../logo192.png"  alt="tech-icon"/>
            </div>
            <img src="../assets/heroImg.jpg" style={{borderRadius: "10px"}}  alt="hero-img"/>
        </div>
     

      <div>
        <div className="tech-icon">
          <img src="../assets/html-5.png"  alt="tech-icon"/>
        </div>
        <div className="tech-icon">
          <img src="../assets/css-3.png"  alt="tech-icon"/>
        </div>
        <div className="tech-icon">
          <img src="../assets/js.png"  alt="tech-icon"/>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
