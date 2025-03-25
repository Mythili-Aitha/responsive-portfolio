import React from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';
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
    <Box id="skills" sx={{ py: 8, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <Chip 
                label={skill} 
                sx={{ m: 1, fontSize: '1rem', padding: '10px 15px' }} 
                color="primary"
                clickable
              />
            </Tilt>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
