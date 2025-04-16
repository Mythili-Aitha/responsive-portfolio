import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Educations";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="p-10 bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
