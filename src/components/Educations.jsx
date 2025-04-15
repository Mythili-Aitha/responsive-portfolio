import React from "react";
import "../styles/Education.css";
import { snist, uh } from "../constants/Constant";
const educationList = [
  {
    degree: "Master of Science | Computer Science",
    institution: "University of Houston",
    graduation: "May 2024",
    logo: uh,
  },
  {
    degree: "Bachelor of Technology | Computer Science and Engineering",
    institution: "Sreenidhi Institute of Science & Technology",
    graduation: "April 2022",
    logo: snist,
  },
];

const Education = () => {
  return (
    <section id="education" className="education section">
      <h2 className="section-title">Education</h2>
      <div className="edu-grid">
        {educationList.map((edu, index) => (
          <div className="edu-card" key={index} data-aos="fade-up">
            <div className="edu-logo">
              {edu.logo && <img src={edu.logo} alt={edu.institution} />}
            </div>
            <div className="edu-info">
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-year">Graduated: {edu.graduation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
