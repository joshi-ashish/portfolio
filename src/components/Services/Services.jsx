 import "./Services.css"

 import theme_pattern from "../../assets/theme_pattern.svg"
  import Services_Data from "../../assets/services_data"
  import arrow_icon from "../../assets/arrow_icon.svg"
function Services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src = {theme_pattern} alt="" />

      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
          return <div key={index}className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmone">
              <p>Read more</p>
              <a href="/files/Internships.pdf" target="_blank" rel="noopener noreferrer">
              <img src={arrow_icon} alt="" />
              </a>
            </div>


          </div>

        })}

      </div>
       <div className="about-achievements">
        <div className="about-achievement">
          <div className="textcenter">
            <h1>4+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
        </div>

        <div className="about-achievement">
          <h1>8</h1>
<p>My Contributions to Projects</p>
        </div>

        <div className="about-achievement">
          <div className="textright">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
