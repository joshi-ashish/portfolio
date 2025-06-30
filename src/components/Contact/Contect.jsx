import './Contect.css';

import them_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn,faGithub } from "@fortawesome/free-brands-svg-icons";


const Contect = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

     formData.append('access_key', import.meta.env.VITE_WEB3FORM_ACCESS_KEY);


    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());
    console.log(res); // 👈 Yeh add karo


    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact_title">
        <h1>CONTECT_ ME</h1>
        <img src={them_pattern} alt="Theme Pattern" />
      </div>
      <div className="contract_section">
        <div className="contect-left">
          <h1>LETS _CONTECT </h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>joshiaashish1098@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>+91 9511591264</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p> Udaipur, Rajasthan, INDIA</p>
            </div>
            <div className='social-links' style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "0px" }}>
            <a
        href="https://www.linkedin.com/in/aashish-joshii/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://github.com/joshi-ashish"
        target="_blank"
        rel="noopener noreferrer"

      >
      <FontAwesomeIcon icon={faGithub} />

      </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" id="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" id="email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" id="message" required></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contect;
