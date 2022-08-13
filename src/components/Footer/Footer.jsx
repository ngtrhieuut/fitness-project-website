import "./Footer.css";
import Github from "../../assets/img/github.png";
import Instagram from "../../assets/img/instagram.png";
import Linkedin from "../../assets/img/linkedin.png";
import Logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-network">
          <img src={Github} alt="github" />
          <img src={Instagram} alt="insta" />
          <img src={Linkedin} alt="linkedin" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="logo" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
}

export default Footer;
