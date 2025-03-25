import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Box from '@mui/material/Box';

const Navbar = ({ darkMode, onToggleDarkMode }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mythili Aitha
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" href="#home">
            Home
          </Button>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#skills">
            Skills
          </Button>
          <Button color="inherit" href="#work-experience">
            Work Experience
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button color="inherit" href="#education">
            Education
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Box>

        <IconButton color="inherit" onClick={onToggleDarkMode}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;