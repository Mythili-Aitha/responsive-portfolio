import { a, uh } from "../constants/Constant";
import "../styles/Experience.css";
const experiences = [
  {
    company: "University of Houston",
    logo: uh,
    role: "Web Developer",
    duration: "Dec 2023 – May 2024",
    points: [
      "Updated and extended university web properties using ReactJS, JavaScript, HTML/CSS, raising page views by 40% and engagement by 25%.",
      "Designed and developed full-stack features with ReactJS and REST APIs, iterating based on stakeholder feedback and usability insights. Improved content workflows in Cascade CMS. Produced usage/operations dashboards with D3.js/Chart.js, enabling stakeholders to track trends at a glance.",
      "Monitored frontend performance using dev tools, optimized asset delivery, and reduced load times by 30%. Collaborated via Jira/Confluence for specs, meeting notes, and release updates; supported cross-team reviews.",
      "Authored clear technical docs for components, data contracts, and deployment steps.",
    ],
  },
  {
    company: "Agile Solutions",
    logo: a,
    role: "Software Developer",
    duration: "May 2021 – July 2022",
    points: [
      "Prototyped and deployed an NLP-driven expert system with Flask and XGBoost, improving recommendation accuracy by 30%. Implemented REST endpoints for model inference and admin utilities; added input validation and logging.",
      "Created a JavaScript XSJS parser to AST, deployed on GCP, improving parsing throughput by 25%. Designed and maintained asynchronous data pipelines to GCP storage, improving throughput and ensuring traceability.",
      "Tuned MySQL structures/queries for faster reads; added indices and streamlined ETL loads. Wrote technical specs, test plans, and runbooks; collaborated with stakeholders for incremental releases.",
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
