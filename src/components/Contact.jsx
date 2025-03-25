import React from 'react';
import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" mb={3}>
          Fill out the form below or send me an email at <strong>mythiliaitha@gmail.com</strong>.
        </Typography>
        <Stack spacing={2}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
