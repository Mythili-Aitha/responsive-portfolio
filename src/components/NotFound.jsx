import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = '/'; // Reloads the root (your portfolio homepage)
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p={3}
    >
      <Typography variant="h2" color="error" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={handleGoHome}
        sx={{ mt: 3 }}
      >
        Go to My Portfolio
      </Button>
    </Box>
  );
};

export default NotFound;
