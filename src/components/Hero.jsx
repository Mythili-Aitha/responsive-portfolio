import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'background.default',
        color: 'text.primary',
        p: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Hi, I’m <span style={{ color: '#645cff' }}>Mythili Aitha</span>
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Full Stack Developer
      </Typography>
      <Typography variant="body1" maxWidth="600px" mb={4}>
        I specialize in creating interactive user interfaces while developing robust back-end systems. Let’s work together to build something amazing!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://drive.google.com/file/d/1MPUlz1v3crgJCJGJJ6t7DJG2193ZwsVS/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </Button>
    </Box>
  );
};

export default Hero;
