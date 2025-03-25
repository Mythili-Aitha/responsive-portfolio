import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const workData = [
  {
    title: 'Web Developer',
    company: 'University of Houston, TX',
    period: 'Dec 2023 – May 2024',
    description:
      'Updated the university website using HTML, CSS, JavaScript, ReactJS, and Cascade CMS. Improved page views, user engagement, and performance through optimization and modern design.',
  },
  {
    title: 'Software Developer',
    company: 'Agile Solutions, India',
    period: 'May 2021 – July 2022',
    description:
      'Developed full-stack solutions including expert systems for domain-specific conversations using NLP and cloud integrations. Enhanced data security and performance through efficient code and optimized cloud storage processes.',
  },
];

const WorkExperience = () => {
  return (
    <Box id="work-experience" sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom align="center">
          Work Experience
        </Typography>
        <Grid container spacing={4} mt={2}>
          {workData.map((job, index) => (
            <Grid item xs={12} key={index}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {job.company}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {job.period}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {job.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkExperience;
