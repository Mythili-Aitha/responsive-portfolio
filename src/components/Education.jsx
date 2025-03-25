import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const educationData = [
  {
    institution: 'University of Houston',
    degree: 'Master of Science in Computer Science',
    graduated: 'May 2024',
  },
  {
    institution: 'Sreenidhi Institute of Science & Technology',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    graduated: 'April 2022',
  },
];

const Education = () => {
  return (
    <Box id="education" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom align="center">
          Education
        </Typography>
        <Grid container spacing={4} mt={2}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} key={index}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6">{edu.institution}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {edu.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Graduated: {edu.graduated}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
