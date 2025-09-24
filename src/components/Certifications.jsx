import React from "react";
import "../styles/Certifications.css";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
    link: "https://www.credly.com/badges/0da13041-7233-4872-bc35-793bfd724161/linked_in_profile",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section">
      <h2 className="section-title">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <a
            href={cert.link}
            key={idx}
            className="cert-card"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
          >
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-year">{cert.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
