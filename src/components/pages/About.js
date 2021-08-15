import React, { useState } from "react";
import "./styles/About.scss";
import VisibilitySensor from "react-visibility-sensor-v2";

const About = () => {
  const [visibility, setVisibility] = useState(false);
  const [hasActivated, setHasActivated] = useState(false);
  return (
    <div className="About">
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
              transition: "all 700ms linear",
            }}
          >
            About Me
          </h1>

          <section className="icons">
            <div
              className="icon-container"
              style={{
                transform:
                  visibility || hasActivated
                    ? "translateY(0)"
                    : "translateY(50px)",
                opacity: visibility || hasActivated ? 1 : 0,
                transition: "all 200ms linear",
              }}
            >
              <div className="img-wrapper">
                <img src="img/main/about/coding.png" alt="coding" />
              </div>

              <h4>Web Developer</h4>
            </div>
            <div
              className="icon-container"
              style={{
                transform:
                  visibility || hasActivated
                    ? "translateY(0)"
                    : "translateY(50px)",
                opacity: visibility || hasActivated ? 1 : 0,
                transition: "all 400ms linear",
              }}
            >
              <div className="img-wrapper">
                <img
                  src="img/main/about/design-thinking.png"
                  alt="design-thinking"
                />
              </div>

              <h4>Creative Design</h4>
            </div>
            <div
              className="icon-container"
              style={{
                transform:
                  visibility || hasActivated
                    ? "translateY(0)"
                    : "translateY(50px)",
                opacity: visibility || hasActivated ? 1 : 0,
                transition: "all 600ms linear",
              }}
            >
              <div className="img-wrapper">
                <img src="img/main/about/book.png" alt="book" />
              </div>

              <h4>Problem Solver</h4>
            </div>
            <div
              className="icon-container"
              style={{
                transform:
                  visibility || hasActivated
                    ? "translateY(0)"
                    : "translateY(50px)",
                opacity: visibility || hasActivated ? 1 : 0,
                transition: "all 800ms linear",
              }}
            >
              <div className="img-wrapper">
                <img src="img/main/about/passport.png" alt="passport" />
              </div>

              <h4>Traveler</h4>
            </div>
          </section>
          <section
            className="info"
            style={{
              transform:
                visibility || hasActivated
                  ? "translateY(0)"
                  : "translateY(80px)",
              opacity: visibility || hasActivated ? 1 : 0,
              transition: "all 700ms linear",
            }}
          >
            <div className="quote">
              <p>
                My name is <span className="primary-color">Leo Ortega</span> and
                I am a <span className="primary-color">Web Developer</span>{" "}
                specializing in Front-End Web Development and have also worked
                with the Back-End. I enjoy solving problems through code and am
                excited to work alongside other amazing developers.
              </p>
              <p>
                By building interactive websites that look great across all
                platforms using mainly HTML, SASS, JavaScript, and ReactJS, I
                get the opportunity to experiment with new tools and learn new
                skills. I find Web Development to be a perfect blend of
                technical challenges and creativity.
              </p>
              <p>
                When I'm not coding, you can find me cycling, going on a hike,
                or travelling.
              </p>
            </div>
            <div className="profile">
              <img src="img/main/about/me.jpg" />
            </div>
          </section>
        </>
      </VisibilitySensor>
    </div>
  );
};

export default About;
