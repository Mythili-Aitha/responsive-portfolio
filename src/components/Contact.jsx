<<<<<<< HEAD
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
=======
import React from "react";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact section" data-aos="fade-up">
      <h2 className="section-title">Mythili Aitha</h2>
      <p>Full-Stack developer | Master's in Computer Science</p>

      <div className="contact-icons">
        <a
          href="https://github.com/Mythili-Aitha"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub className="icon" /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mythili-aitha/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="icon" /> LinkedIn
        </a>

        <a href="mailto:mythiliaitha@gmail.com" className="icon-link">
          <FaEnvelope className="icon" /> Email
        </a>
      </div>
    </section>
>>>>>>> main
  );
};

export default Contact;
