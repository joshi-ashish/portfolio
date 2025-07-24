import "./Hero.css";
import profile_img from "../../assets/joshi.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="about-image">
        <img src={profile_img} alt="Profile of Joshi Aashish" />
      </div>
      <h1>
        Hello, It's Me <span>Joshi Aashish,</span>
        <span>And I'm a Mern Stack Developer</span>
      </h1>
      <p>
         Mern Stack Developer from Udaipur, India with 1 year of
        experience in <span><a href="https://vraio.in/" className="company-Name">
  Vraio Software Solutions Pvt Ltd 
</a> <span className="hit"> | Freelancing </span></span>
      </p> 
 


      <div className="hero_action">
        <div className="hero_connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/files/resume.pdf" className="resume-link" download>

            My Resume Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
