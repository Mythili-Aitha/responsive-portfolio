import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Tilt from 'react-parallax-tilt';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Node.js',
  'Express',
  'Redux',
  'PHP',
  'Python',
  'C',
  'Java',
  'AWS',
  'GCP',
  'Docker',
  'Git',
  'CI/CD',
  'MySQL',
  'MongoDB',
  'DynamoDB',
  'TensorFlow',
  'Keras',
  'Scikit-Learn',
  'SwiftUI',
  'UIKit'
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: 2, backgroundColor: 'background.paper' }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} transitionSpeed={300}>
              <Paper 
                elevation={3}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Typography variant="body1" fontWeight="medium">
                  {skill}
                </Typography>
              </Paper>
            </Tilt>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
