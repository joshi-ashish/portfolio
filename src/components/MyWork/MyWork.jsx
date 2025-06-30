
// export default MyWork;
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork_title">
        <h1>MY Latest Work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="mywork-img-wrapper" key={index}>
            <a href="https://github.com/joshi-ashish/BizVision" target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt={`Work ${index}`} />

</a>

          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;

