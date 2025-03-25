import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I’m a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. My journey in tech began with a curiosity for design and a drive to solve complex problems.
        </Typography>
        <Typography variant="body1" paragraph>
          I hold a Master of Science in Computer Science from the University of Houston and a Bachelor of Technology in Computer Science & Engineering from Sreenidhi Institute of Science & Technology. My experience ranges from building dynamic, responsive web applications to creating scalable, efficient back-end solutions, all while deploying modern cloud-based architectures.
        </Typography>
        <Typography variant="body1" paragraph>
          When I’m not coding, I enjoy exploring the latest technologies, contributing to open-source projects, and refining user experiences through innovative UI/UX designs.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
