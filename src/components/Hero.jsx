import React from 'react';
import '../styles/Hero.css'
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span>Mythili Aitha</span></h1>
        <p>Frontend Developer</p>
        <a href="#contact" className="btn">Hire Me</a>
      </div>
      <div className="hero-img">
        <img src="https://via.placeholder.com/300" alt="profile" />
      </div>
    </section>
  );
};

export default Hero;
