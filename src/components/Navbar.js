import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import VisibilitySensor from "react-visibility-sensor-v2";
import "./Navbar.scss";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const PurpleSwitch = withStyles({
  switchBase: {
    color: "dodgerBlue",
    "&$checked": {
      color: "dodgerBlue",
    },
    "&$checked + $track": {
      backgroundColor: "dodgerBlue",
    },
  },
  checked: {},
  track: {
    backgroundColor: "dodgerBlue",
  },
})(Switch);

const Navbar = (props) => {
  let listener = null;
  const [visibility, setVisibility] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 500) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSwitch = () => {
    props.setToggleTheme(!props.toggleTheme);
  };
  return (
    <nav className={`Navbar ${scrollState && "alt-nav"}`}>
      <div className="container">
        <div className="brand">
          <h2 className="brand-lg">{"{LEO ORTEGA}"}</h2>
          <h2 className="brand-sm">{"{LO}"}</h2>
        </div>
        <div className="menu">
          <div className="hamburger" onClick={toggleMenu}>
            {showMenu ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>

          <div className={`links ${showMenu && "menu-active"}`}>
            <ul>
              <VisibilitySensor
                partialVisibility
                onChange={(isVisible) => {
                  setVisibility(isVisible);
                }}
              >
                <>
                  <li
                    style={{
                      transform: visibility
                        ? "translateY(0)"
                        : "translateY(-30px)",
                      opacity: visibility ? 1 : 0,
                      transition: "all 500ms linear",
                    }}
                  >
                    <Link
                      onClick={toggleMenu}
                      to="home"
                      smooth={true}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    style={{
                      transform: visibility
                        ? "translateY(0)"
                        : "translateY(-30px)",
                      opacity: visibility ? 1 : 0,
                      transition: "all 600ms linear",
                    }}
                  >
                    <Link
                      onClick={toggleMenu}
                      to="about"
                      smooth={true}
                      duration={500}
                      offset={-80}
                    >
                      About
                    </Link>
                  </li>
                  <li
                    style={{
                      transform: visibility
                        ? "translateY(0)"
                        : "translateY(-30px)",
                      opacity: visibility ? 1 : 0,
                      transition: "all 700ms linear",
                    }}
                  >
                    <Link
                      onClick={toggleMenu}
                      to="projects"
                      smooth={true}
                      duration={500}
                      offset={-80}
                    >
                      Projects
                    </Link>
                  </li>
                  <li
                    style={{
                      transform: visibility
                        ? "translateY(0)"
                        : "translateY(-30px)",
                      opacity: visibility ? 1 : 0,
                      transition: "all 800ms linear",
                    }}
                  >
                    <Link
                      onClick={toggleMenu}
                      to="tech"
                      smooth={true}
                      duration={500}
                      offset={-80}
                    >
                      Tech
                    </Link>
                  </li>
                  <li
                    style={{
                      transform: visibility
                        ? "translateY(0)"
                        : "translateY(-30px)",
                      opacity: visibility ? 1 : 0,
                      transition: "all 900ms linear",
                    }}
                  >
                    <Link
                      onClick={toggleMenu}
                      to="contact"
                      smooth={true}
                      duration={500}
                      offset={-80}
                    >
                      Contact
                    </Link>
                  </li>
                  <a
                    href="https://drive.google.com/file/d/1FAPsISnVwia6H5zYKibhuDD6JocoT08_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      transform: visibility
                        ? "translateY(0)"
                        : "translateY(-30px)",
                      opacity: visibility ? 1 : 0,
                      transition: "all 1000ms linear",
                    }}
                  >
                    RESUME
                  </a>
                  <div className="theme">
                    <PurpleSwitch
                      checked={props.toggleTheme}
                      onChange={handleSwitch}
                      name="check"
                    />
                    <img
                      src={`img/navbar/${
                        props.toggleTheme ? "sun" : "moon"
                      }.png`}
                    />
                  </div>
                </>
              </VisibilitySensor>
            </ul>

            {/*  <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#tech">Tech</a>
          <a href="#contact">Contact</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
