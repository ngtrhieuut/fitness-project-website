import "./Header.css";
import Logo from "../../assets/img/logo.png";
import Bars from "../../assets/img/bars.png";
import { Link } from "react-scroll";
import { useState } from "react";

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);
  return (
    <div className="Header">
      <img src={Logo} alt="logo" className="logo" />
      {menu === false && mobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenu(true)}
        >
          <img
            src={Bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="Hero"
              span="true"
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="Programs"
              span="true"
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="Reasons"
              span="true"
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="plans-container"
              span="true"
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenu(false)}
              to="Testtimonials"
              span="true"
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
