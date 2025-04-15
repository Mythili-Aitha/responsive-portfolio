import React from "react";
import "../styles/Hero.css";
import profileImg from "../assets/profile.png";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Mythili Aitha</span>
          </h1>
          <p>Full-Stack Developer</p>
          <a href="#contact" className="btn">
            Hire me
          </a>
        </div>
        <div className="hero-img">
          <div className="img-circle">
            <img src={profileImg} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
