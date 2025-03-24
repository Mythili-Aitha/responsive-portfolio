import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, I’m <span className="highlight">Mythili Aitha</span>
        </h1>
        <h2>Frontend Developer</h2>
        <p>
          I specialize in creating interactive and beautiful user interfaces. 
          Let’s work together to build something amazing!
        </p>
        <a href="#contact" className="hero-btn">Hire Me</a>
      </div>
      {/* Optional: Add an illustration or a photo to the right side */}
    </section>
  );
};

export default Hero;
