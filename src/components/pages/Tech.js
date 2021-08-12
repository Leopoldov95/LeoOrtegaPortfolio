import React, { useState } from "react";
import "./styles/Tech.scss";
import VisibilitySensor from "react-visibility-sensor-v2";
const Tech = () => {
  const [visibility, setVisibility] = useState(false);
  const [useSensor, setUseSensor] = useState(true);

  return (
    <div className="Tech">
      <h1>Tech & Skills</h1>
      <p>
        I use HTML, CSS, SASS , Javascript, and React.JS for front end work and
        have been using Node.JS, Express.JS, and MongoDB to create the backend.
        I have also created fullstack projects using the MERN stack. My editor
        of choice is VSCode.
      </p>
      <div className="tech-container">
        <VisibilitySensor
          active={useSensor}
          onChange={(isVisible) => {
            setVisibility(isVisible);
          }}
        >
          <>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 200ms linear",
              }}
            >
              <img src="img/main/skills/react.svg" />
              <span>ReactJS</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 250ms linear",
              }}
            >
              <img src="img/main/skills/redux.svg" />
              <span>Redux</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 300ms linear",
              }}
            >
              <img src="img/main/skills/javascript.svg" />
              <span>JavaScript</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 350ms linear",
              }}
            >
              <img src="img/main/skills/nodejs.svg" />
              <span>NodeJS</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 400ms linear",
              }}
            >
              <img src="img/main/skills/express.svg" />
              <span>Express</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 450ms linear",
              }}
            >
              <img src="img/main/skills/sass.svg" />
              <span>Sass</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 500ms linear",
              }}
            >
              <img src="img/main/skills/html5.svg" />
              <span>HTML</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 550ms linear",
              }}
            >
              <img src="img/main/skills/css3.svg" />
              <span>CSS</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 600ms linear",
              }}
            >
              <img src="img/main/skills/pug.png" />
              <span>Pug</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 650ms linear",
              }}
            >
              <img src="img/main/skills/materialui.svg" />
              <span>MaterialUI</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 700ms linear",
              }}
            >
              <img src="img/main/skills/mongodb.svg" />
              <span>MongoDB</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 750ms linear",
              }}
            >
              <img src="img/main/skills/git.svg" />
              <span>Git</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 800ms linear",
              }}
            >
              <img src="img/main/skills/api.svg" />
              <span>API</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 850ms linear",
              }}
            >
              <img src="img/main/skills/npm.svg" />
              <span>NPM</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 900ms linear",
              }}
            >
              <img src="img/main/skills/vscode.svg" />
              <span>VS Code</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility ? "translateY(0)" : "translateY(30px)",
                opacity: visibility ? 1 : 0.25,
                transition: "all 950ms linear",
              }}
            >
              <img src="img/main/skills/heroku.svg" />
              <span>Heroku</span>
            </div>
          </>
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default Tech;
