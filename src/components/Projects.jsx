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
  },
];

const Projects = () => {
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
  );
};

export default Projects;
