import React, { useState } from "react";
import "./styles/Tech.scss";
import VisibilitySensor from "react-visibility-sensor-v2";
const Tech = () => {
  const [visibility, setVisibility] = useState(false);
  const [hasActivated, setHasActivated] = useState(false);

  return (
    <div className="Tech">
      <VisibilitySensor
          partialVisbility
          onChange={(isVisible) => {
            setVisibility(isVisible);
            if (isVisible) {
                  setHasActivated(true)
            }
        
          }}
        >
          <>
      <h1 style={{
        transform: visibility || hasActivated ? "translateY(0)" : "translateY(50px)",
        opacity: visibility || hasActivated ? 1 : 0.25,
        transition: "all 500ms linear",
      }}>Tech & Skills</h1>
      <p style={{
        transform: visibility || hasActivated ? "translateY(0)" : "translateY(50px)",
        opacity: visibility || hasActivated ? 1 : 0.25,
        transition: "all 500ms linear",
      }}>
        I use HTML, CSS, SASS , Javascript, and React.JS for front end work and
        have been using Node.JS, Express.JS, and MongoDB to create the backend.
        I have also created fullstack projects using the MERN stack. My editor
        of choice is VSCode.
      </p>
      <div className="tech-container">
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 200ms linear",
              }}
            >
              <img src="img/main/skills/react.svg" alt="react" />
              <span>ReactJS</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 250ms linear",
              }}
            >
              <img src="img/main/skills/redux.svg" alt="redux" />
              <span>Redux</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 300ms linear",
              }}
            >
              <img src="img/main/skills/javascript.svg" alt="javascript" />
              <span>JavaScript</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 350ms linear",
              }}
            >
              <img src="img/main/skills/nodejs.svg" alt="nodejs" />
              <span>NodeJS</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 400ms linear",
              }}
            >
              <img src="img/main/skills/express.svg" alt="express" />
              <span>Express</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 450ms linear",
              }}
            >
              <img src="img/main/skills/sass.svg" alt="sass" />
              <span>Sass</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 500ms linear",
              }}
            >
              <img src="img/main/skills/html5.svg" alt="html5" />
              <span>HTML</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 550ms linear",
              }}
            >
              <img src="img/main/skills/css3.svg" alt="css3" />
              <span>CSS</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 600ms linear",
              }}
            >
              <img src="img/main/skills/pug.png" alt="pug" />
              <span>Pug</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 650ms linear",
              }}
            >
              <img src="img/main/skills/materialui.svg" alt="materialui" />
              <span>MaterialUI</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 700ms linear",
              }}
            >
              <img src="img/main/skills/mongodb.svg" alt="mongodb"/>
              <span>MongoDB</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 750ms linear",
              }}
            >
              <img src="img/main/skills/git.svg" alt="git" />
              <span>Git</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 800ms linear",
              }}
            >
              <img src="img/main/skills/api.svg" alt="api" />
              <span>API</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 850ms linear",
              }}
            >
              <img src="img/main/skills/npm.svg" alt="npm" />
              <span>NPM</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 900ms linear",
              }}
            >
              <img src="img/main/skills/vscode.svg" alt="vscode" />
              <span>VS Code</span>
            </div>
            <div
              className="tech-card"
              style={{
                transform: visibility || hasActivated ? "translateY(0)" : "translateY(30px)",
                opacity: visibility || hasActivated ? 1 : 0.25,
                transition: "all 950ms linear",
              }}
            >
              <img src="img/main/skills/heroku.svg" alt="heroku" />
              <span>Heroku</span>
            </div>
          
      </div>
      </>
        </VisibilitySensor>
    </div>
  );
};

export default Tech;
