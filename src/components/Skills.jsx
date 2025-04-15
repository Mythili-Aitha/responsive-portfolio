import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "./Image_prop";
import {
  html,
  css,
  javascript,
  react,
  python,
  java,
  c,
  nodejs,
  typescript,
  mysql,
} from "../constants/Constant";
import "../styles/Skills.css";

const skills = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: javascript, name: "JavaScript" },
  { img: react, name: "React" },
  { img: python, name: "Python" },
  { img: java, name: "Java" },
  { img: c, name: "C" },
  { img: nodejs, name: "Node JS" },
  { img: typescript, name: "TypeScript" },
  { img: mysql, name: "My-Sql" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-grid" data-aos="fade-up">
        {skills.map(({ img, name }, i) => (
          <Image key={i} img={img} alt={name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
