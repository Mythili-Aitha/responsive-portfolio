import "../styles/Hero.css";
import profileImg from "../assets/profile.png";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Mythili Aitha</span>
          </h1>
          <p>
            Full-stack software engineer with 2+ years of experience building
            scalable, responsive web applications and full-stack platforms using
            ReactJS, Python (Flask), Java (Spring Boot), and AWS. Proven ability
            to design and deploy robust REST APIs, optimize frontend
            performance, and collaborate in Agile teams.{" "}
          </p>
          <a href="#contact" className="btn">
            Hire me
          </a>
        </div>
        <div className="hero-img">
          <div className="img-circle">
            <img src={profileImg} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
