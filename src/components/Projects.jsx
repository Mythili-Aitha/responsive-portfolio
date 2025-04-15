<<<<<<< HEAD
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

const projectData = [
  {
    title: 'Aspect-Based Comment Summarizer',
    description:
      'Developed an Aspect-Based Sentiment Analysis system using both abstractive and extractive methods for accurate comment summarization. Implemented ensemble NLP models achieving significant improvements in aspect identification accuracy.',
    link: '#',
  },
  {
    title: 'Serverless Travel Away Web-App',
    description:
      'Built a web application for travel planning in a serverless environment. Leveraged AWS services including API Gateway, Lambda, Cognito, and RDS.',
    link: '#',
  },
  {
    title: 'Interactive Flask Web App',
    description:
      'Created an interactive Flask web application with user registration, login, and file upload features. Deployed on AWS EC2 for better accessibility.',
    link: '#',
=======
import React, { useEffect } from "react";
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
      "Created a travel planner web app with profile, destination, and tour package selection features.",
      "Hosted using AWS services like API Gateway, Lambda, Cognito, RDS, and Amplify.",
    ],
    tech: ["AWS", "Lambda", "Cognito", "RDS", "Amplify", "API Gateway"],
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
>>>>>>> main
  },
];

const Projects = () => {
<<<<<<< HEAD
  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom align="center">
          Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                elevation={3}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
=======
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
>>>>>>> main
  );
};

export default Projects;
