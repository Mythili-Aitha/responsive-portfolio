import React from "react";
import { a, uh } from "../constants/Constant";
import "../styles/Experience.css";
const experiences = [
  {
    company: "University of Houston",
    logo: uh,
    role: "Web Developer",
    duration: "Dec 2023 – May 2024",
    points: [
      "Updated the university website using HTML, CSS, JavaScript, ReactJS, and Cascade CMS, increasing page views by 40% and user engagement by 25%.",
      "Improved data display using Python tools like Pandas and NumPy, and created interactive charts with D3.js and Chart.js, boosting engagement by 40%.",
      "Optimized website performance by reducing load times by 30% through image optimization, CSS/JS minimization, and caching strategies.",
    ],
  },
  {
    company: "Agile Solutions",
    logo: a,
    role: "Software Developer",
    duration: "May 2021 – July 2022",
    points: [
      "Designed and deployed an expert system using NLP, Deep Learning, and Flask, improving disease treatment predictions by 30%.",
      "Developed an XSJS parser in JavaScript to generate abstract syntax trees and deployed it on GCP, enhancing parsing efficiency by 25%.",
      "Securely migrated confidential data from XSJS code to GCP buckets, improving cloud migration security and performance.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-cards">
        {experiences.map((exp, idx) => (
          <div className="card" key={idx}>
            <img src={exp.logo} alt={exp.company} className="company-logo" />
            <div className="card-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <ul className="description-list">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
