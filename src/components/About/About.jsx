import "./About.css";
import them_pattern from "../../assets/theme_pattern.svg";

// Frontend
import htmllogo from "../../assets/htmllogo.png";
import tailwind from "../../assets/tailwind.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import css from "../../assets/css.png";

// Backend
import nodejs from "../../assets/nodejs.png";
import expressjs from "../../assets/exjs1.png";
import typescript from "../../assets/typescript.png";
import github from "../../assets/github.png";

// Database
import mysql from "../../assets/mysql.png";
import sequelize from "../../assets/sequelize1.png";
import mongodb from "../../assets/mongodb1.png";

// Fullstack
import nextjs1 from "../../assets/nextjs1.png";
import docker from "../../assets/docker.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={them_pattern} alt="Theme Pattern" />
      </div>

      {/* Technology Sections */}
      <div className="logos-horizontal">
        {/* Frontend */}
        <div className="tech-section">
          <h2>Frontend</h2>
          <div className="logo-grid">
            <img src={htmllogo} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={javascript} alt="JavaScript" />
            <img src={react} alt="React" />
            <img src={tailwind} alt="Tailwind" />
          </div>
        </div>

        {/* Backend */}
        <div className="tech-section">
          <h2>Backend</h2>
          <div className="logo-grid">
            <img src={nodejs} alt="Node.js" />
            <img src={expressjs} alt="Express.js" />
            <img src={typescript} alt="TypeScript" />
            <img src={github} alt="GitHub" />
          </div>
        </div>

        {/* Database */}
        <div className="tech-section">
          <h2>Database</h2>
          <div className="logo-grid">
            <img src={mysql} alt="MySQL" />
            <img src={sequelize} alt="Sequelize" />
            <img src={mongodb} alt="MongoDB" />
          </div>
        </div>
      </div>

      {/* Fullstack Tools */}
      <div className="fullstack-section">
        <h2 className="section-title">Fullstack Tools</h2>
        <div className="fullstack-grid">
          <div className="fullstack-item">
            <img src={nextjs1} alt="Next.js" />
            
          </div>
          <div className="fullstack-item">
            <img src={docker} alt="Docker" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
