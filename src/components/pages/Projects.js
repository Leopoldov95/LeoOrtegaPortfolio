import React, { useState } from "react";
import "./styles/Projects.scss";
import VisibilitySensor from "react-visibility-sensor-v2";
const Projects = () => {
  const [visibility, setVisibility] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };
  return (
    <div className="Projects">
      <h1>My Projects</h1>
      <section className="container">
        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => {
            setVisibility(isVisible);
          }}
        >
          <>
            <div
              className="card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(50px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 600ms linear",
              }}
            >
              <div className="img">
                <img src="img/main/projects/cycle.png" />
              </div>
              <div className="info">
                <h1>Bicycle Ecommerce</h1>
                <div className="tech">
                  <img src="img/main/skills/mongodb.svg" />
                  <img src="img/main/skills/express.svg" />
                  <img src="img/main/skills/react.svg" />
                  <img src="img/main/skills/nodejs.svg" />
                  <img src="img/main/skills/api.svg" />
                </div>
                <p>
                  A full-stack ecommerce website created using the MERN stack.
                  Users can create an account and save items to their shopping
                  cart.
                </p>
                <div className="links">
                  <a
                    className="btn"
                    href="https://leocycles.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="btn"
                    href="https://github.com/Leopoldov95/bicycle_ecomm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(50px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 600ms linear",
              }}
            >
              <div className="img">
                <img src="img/main/projects/pokedex.png" />
              </div>
              <div className="info">
                <h1>ReactJS Pokedex</h1>
                <div className="tech">
                  <img src="img/main/skills/react.svg" />
                  <img src="img/main/skills/api.svg" />
                  <img src="img/main/skills/sass.svg" />
                </div>
                <p>
                  A full featured Pokdex app that contains all Pokemon and their
                  information. I created this using ReactJS and communicating
                  with an API to obtain data.
                </p>
                <div className="links">
                  <a
                    className="btn"
                    href="https://reactjsnationaldex.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="btn"
                    href="https://github.com/Leopoldov95/Pokedex-React-Modern"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </>
        </VisibilitySensor>
        <div className="card">
          <div className="img">
            <img src="img/main/projects/weather.png" />
          </div>
          <div className="info">
            <h1>Weather App</h1>
            <div className="tech">
              <img src="img/main/skills/javascript.svg" />
              <img src="img/main/skills/api.svg" />
              <img src="img/main/skills/html5.svg" />
              <img src="img/main/skills/css3.svg" />
            </div>
            <p>
              A weather app that shows weather data fetched from an API from any
              city in the world, has an autocomplete search bar, and a built-in
              interactive map.
            </p>
            <div className="links">
              <a
                className="btn"
                href="https://modernweatherapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                className="btn"
                href="https://github.com/Leopoldov95/bicycle_ecomm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src="img/main/projects/qwixx.png" />
          </div>
          <div className="info">
            <h1>Qwixx JS</h1>
            <div className="tech">
              <img src="img/main/skills/javascript.svg" />
              <img src="img/main/skills/html5.svg" />
              <img src="img/main/skills/css3.svg" />
            </div>
            <p>
              A 2 to 4 player luck and strategy dice game created using
              JavaScript and SASS. Includes rules for those who are new to the
              game.
            </p>
            <div className="links">
              <a
                className="btn"
                href="https://leocycles.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                className="btn"
                href="https://github.com/Leopoldov95/bicycle_ecomm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src="img/main/projects/winery.png" />
          </div>
          <div className="info">
            <h1>Tonne Winery</h1>
            <div className="tech">
              <img src="img/main/skills/html5.svg" />
              <img src="img/main/skills/sass.svg" />
            </div>
            <p>
              A full and mobile responsive website for a winery created with
              HTML and SASS.
            </p>
            <div className="links">
              <a
                className="btn"
                href="https://leocycles.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                className="btn"
                href="https://github.com/Leopoldov95/bicycle_ecomm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="more">
        <button className="btn-primary">More</button>
        <section className="more-projects" onClick={handleDisplay}>
          {handleDisplay && (
            <div className="card">
              <div className="icons">
                <div className="folder">
                  <i className="far fa-folder"></i>
                </div>
                <div className="links">
                  <a>
                    <i className="fab fa-github"></i>
                  </a>
                  <a>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="det">
                <h3>Personal Portfolio V1</h3>
                <p>
                  This was my first attempt at creating a personal portfolio. I
                  created this{" "}
                </p>
              </div>
              <div className="tech"></div>
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default Projects;
