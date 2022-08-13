import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/img/rightArrow.png";

function Programms() {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programms;
