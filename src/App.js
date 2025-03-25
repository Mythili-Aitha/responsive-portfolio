import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          ...(darkMode
            ? {
                primary: deepPurple,
                background: {
                  default: '#1e1e1e',
                  paper: '#2c2c2c',
                },
              }
            : {
                primary: deepPurple,
                background: {
                  default: '#f4f4f4',
                  paper: '#ffffff',
                },
              }),
        },
      }),
    [darkMode]
  );

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  if (window.location.pathname !== "/") {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NotFound />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Education />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
