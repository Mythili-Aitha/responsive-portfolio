import React from "react";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact section" data-aos="fade-up">
      <h2 className="section-title">Mythili Aitha</h2>
      <p>Full-Stack developer | Master's in Computer Science</p>

      <div className="contact-icons">
        <a
          href="https://github.com/Mythili-Aitha"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub className="icon" /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mythili-aitha/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="icon" /> LinkedIn
        </a>

        <a href="mailto:mythiliaitha@gmail.com" className="icon-link">
          <FaEnvelope className="icon" /> Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
