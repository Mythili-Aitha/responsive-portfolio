import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const projectData = [
  {
    title: 'Aspect-Based Comment Summarizer',
    description:
      'Developed an Aspect-Based Sentiment Analysis system using both abstractive and extractive methods for accurate comment summarization. Implemented ensemble NLP models (T5Generator and RoBERTa) achieving 70% improvement in aspect identification accuracy. Built a scalable, parallel processing framework handling over 100,000 comments daily, optimizing BART to achieve 80% precision with a 40% improvement in speed.',
  },
  {
    title: 'Serverless Hosting of Travel Away Web-Application',
    description:
      'Built a web application for travel planning, managing accommodation and transportation in a serverless environment. Enabled users to create profiles and select destinations and tour packages using various AWS services including API Gateway, AWS Lambda, Cognito, RDS, and Amplify.',
  },
  {
    title: 'Interactive Web Application with Flask',
    description:
      'Developed an interactive web application using Flask, hosted on AWS EC2. Features include user registration, login, and file upload with word count functionality. Deployment improved accessibility by 40% and user engagement by 25%.',
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={3} mt={2}>
          {projectData.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {project.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
