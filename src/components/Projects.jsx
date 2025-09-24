import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";

const projects = [
  {
    title: "Full-Stack eCommerce Web Application",
    description: [
      "Engineered a full-stack platform using React and Java Spring Boot with user authentication, product catalog, and checkout.",
      "Designed scalable REST APIs using DTOs with MySQL integration for managing users, products, payments, and inventory.",
      "Built a responsive Admin Dashboard using MUI for managing products, discounts, analytics, and customer data.",
    ],
    tech: ["React", "Spring Boot", "MySQL", "MUI", "REST APIs", "DTOs"],
  },
  {
    title: "Aspect-Based Comment Summarizer",
    description: [
      "Developed a system using ensemble NLP models (T5, RoBERTa, BART) to summarize comments with aspect-based sentiment analysis.",
      "Achieved 70% improvement in aspect identification and 40% faster processing with parallel framework.",
    ],
    tech: ["Python", "NLP", "T5", "RoBERTa", "BART", "Transformers"],
  },
  {
    title: "Serverless Hosting of Travel Away Web-App",
    description: [
      "Owned end-to-end delivery of a travel booking platform using AWS Lambda, RDS, and React, from prototyping to production deployment.",
      "Designed scalable REST APIs and integrated frontend/backend systems, applying feedback loops from test users to refine UI/UX.",
    ],
    tech: [
      "AWS",
      "Lambda",
      "Cognito",
      "RDS",
      "Amplify",
      "API Gateway",
      "REST APIs",
    ],
  },
  {
    title: "Severity Evaluation for COVID-19 (SECOVID-A)",
    description: [
      "Built a system combining X-ray and clinical data using a Siamese multi-modal network.",
      "Achieved sensitivity of 0.95 and specificity of 0.9 in predicting ICU admissions.",
    ],
    tech: [
      "Deep Learning",
      "Siamese Networks",
      "X-Ray",
      "Python",
      "Clinical AI",
    ],
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="projects section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="project-title">{project.title}</h3>
            <ul className="project-description">
              {project.description.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
