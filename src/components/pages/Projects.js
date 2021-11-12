import React, { useState } from "react";
import "./styles/Projects.scss";
import VisibilitySensor from "react-visibility-sensor-v2";
const Projects = () => {
  const [visibility, setVisibility] = useState(false);
  const [display, setDisplay] = useState(false);
  const [hasActivated, setHasActivated] = useState(false);

  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };
  return (
    <div className="Projects">
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => {
          setVisibility(isVisible);
          if (isVisible) {
            setHasActivated(true);
          }
        }}
      >
        <>
          <h1
            style={{
              transform:
                visibility || hasActivated
                  ? "translateY(0)"
                  : "translateY(50px)",
              opacity: visibility || hasActivated ? 1 : 0,
              transition: "all 500ms linear",
            }}
          >
            My Projects
          </h1>
          <section className="container">
            <div
              className="card"
              style={{
                transform:
                  visibility || hasActivated
                    ? "translateY(0)"
                    : "translateY(50px)",
                opacity: visibility || hasActivated ? 1 : 0,
                transition: "all 600ms linear",
              }}
            >
              <div className="img">
                <img src="img/main/projects/suay.png" alt="cycle" />
              </div>
              <div className="info">
                <h1>Suay Resort</h1>
                <div className="tech">
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>ReactJS</span>
                  <span>Redux</span>
                  <span>NodeJS</span>
                  <span>REST API</span>
                </div>
                <p>
                  A MERN stack POC hotel website for a beautful resort. Users
                  can browse through rooms and amenties as well as creating and
                  managing reservations.
                </p>
                <div className="links">
                  <a
                    className="btn"
                    href="https://suay-resort.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="btn"
                    href="https://github.com/Leopoldov95/hotel_mern"
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
                transform:
                  visibility || hasActivated
                    ? "translateY(0)"
                    : "translateY(50px)",
                opacity: visibility || hasActivated ? 1 : 0,
                transition: "all 600ms linear",
              }}
            >
              <div className="img">
                <img src="img/main/projects/cycle.png" alt="cycle" />
              </div>
              <div className="info">
                <h1>Bicycle Ecommerce</h1>
                <div className="tech">
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>ReactJS</span>
                  <span>NodeJS</span>
                  <span>REST API</span>
                </div>
                <p>
                  A full-stack ecommerce website created using the MERN stack.
                  Users can create an account and save items to their shopping
                  cart, all of which is then saved in a database.
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
                <img src="img/main/projects/pokedex.png" alt="pokedex" />
              </div>
              <div className="info">
                <h1>ReactJS Pokedex</h1>
                <div className="tech">
                  <span>ReactJS</span>
                  <span>API</span>
                  <span>CSS</span>
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
            <div className="card">
              <div className="img">
                <img src="img/main/projects/weather.png" alt="weather" />
              </div>
              <div className="info">
                <h1>Weather App</h1>
                <div className="tech">
                  <span>JavaScript</span>
                  <span>API</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
                <p>
                  A weather app that shows weather data fetched from an API from
                  any city in the world, has an autocomplete search bar, and a
                  built-in interactive map. Created with JavaScript.
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
                    href="https://github.com/Leopoldov95/Weather-Modern"
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
                <img src="img/main/projects/qwixx.png" alt="qwixx" />
              </div>
              <div className="info">
                <h1>Qwixx JS</h1>
                <div className="tech">
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>SASS</span>
                </div>
                <p>
                  A 2 to 4 player luck and strategy dice game created using
                  JavaScript, HTML and SASS. Includes rules for those who are
                  new to the game.
                </p>
                <div className="links">
                  <a
                    className="btn"
                    href="https://qwixxjs.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="btn"
                    href="https://github.com/Leopoldov95/QwixxJS-Multiplayer"
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
                <img src="img/main/projects/winery.png" alt="winery" />
              </div>
              <div className="info">
                <h1>Tonne Winery</h1>
                <div className="tech">
                  <span>HTML</span>
                  <span>SASS</span>
                </div>
                <p>
                  A full and mobile responsive website for a winery created
                  using HTML and SASS. Contains multiple pages and serves as a
                  proof of concept.
                </p>
                <div className="links">
                  <a
                    className="btn"
                    href="https://tonne-winery-project.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="btn"
                    href="https://github.com/Leopoldov95/Winery-landing-page-clone"
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
            <button
              onClick={handleDisplay}
              className="btn-primary"
              style={{ margin: "2rem auto 0 auto" }}
            >
              {display ? "Hide" : "More"}
            </button>
            <section className={`more-projects ${display && "more-active"}`}>
              <div className="card">
                <div className="icons">
                  <div className="folder">
                    <i className="far fa-folder"></i>
                  </div>
                  <div className="links">
                    <a
                      href="https://github.com/Leopoldov95/Leopoldov95-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://leovportfolio.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <div className="det">
                  <h3>Personal Portfolio V1</h3>
                  <p>
                    This was my first attempt at creating a personal portfolio.
                    I created this when I only knew HTML, CSS, and SASS.
                  </p>
                </div>
                <div className="tech">
                  <span>Pug</span>
                  <span>SASS</span>
                </div>
              </div>
            </section>
          </section>
        </>
      </VisibilitySensor>
    </div>
  );
};

export default Projects;
