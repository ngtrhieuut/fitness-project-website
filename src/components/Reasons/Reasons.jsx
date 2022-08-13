import "./Reason.css";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";
import image4 from "../../assets/img/image4.png";
import nb from "../../assets/img/nb.png";
import adidas from "../../assets/img/adidas.png";
import nike from "../../assets/img/nike.png";
import tick from "../../assets/img/tick.png";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="1" />
        <img src={image2} alt="2" />
        <img src={image3} alt="3" />
        <img src={image4} alt="4" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>Chose us?</span>
        </div>

        <div className="detail-right">
          <div>
            <img src={tick} alt="tick"></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>

        <div className="partners">
          <img src={nb} alt="nb" />
          <img src={adidas} alt="adidas" />
          <img src={nike} alt="nike" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
