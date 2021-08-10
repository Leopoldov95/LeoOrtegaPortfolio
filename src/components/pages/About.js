import React, {useState} from 'react';
import "./styles/About.scss";
import VisibilitySensor from 'react-visibility-sensor-v2'



/* 
opacity: this.state.visibility ? 1 : 0.25,
            transition: 'opacity 500ms linear'
*/

const About = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    
    <div className="About">
      <h1>About Me</h1>

      <section className="icons">
      <VisibilitySensor partialVisibility onChange={(isVisible) => {
          setVisibility(isVisible)
        }}>
        <>
      <div className="icon-container"  style={{
            transform: visibility ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibility ? 1 : 0.25,
            transition: 'all 200ms linear'
          }}>
          <div className='img-wrapper'>
            <img src="img/main/about/coding.png"></img>
          </div>
          
          <h4>Web Developer</h4>
        </div>
        <div className="icon-container" style={{
            transform: visibility ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibility ? 1 : 0.25,
            transition: 'all 400ms linear'
          }}>
        <div className='img-wrapper'><img src="img/main/about/design-thinking.png"></img></div>
          
          <h4>Creative Design</h4>
        </div>
        <div className="icon-container" style={{
            transform: visibility ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibility ? 1 : 0.25,
            transition: 'all 600ms linear'
          }}>
        <div className='img-wrapper'><img src="img/main/about/book.png"></img></div>
          
          <h4>Problem Solver</h4>
        </div>
        <div className="icon-container" style={{
            transform: visibility ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibility ? 1 : 0.25,
            transition: 'all 800ms linear'
          }}>
        <div className='img-wrapper'><img src="img/main/about/passport.png"></img></div>
          
          <h4>Traveler</h4>
        </div>
        </>
      </VisibilitySensor>
      </section>
      <section className="info">
        <div className='quote'>
        <p>
          My name is <span className="primary-color">Leo Ortega</span> and I am
          a <span className="primary-color">Web Developer</span>. I specialize
          in Front-End Web Development but have worked with the Back-End as
          well. I enjoy solving problems through code, and I am excited to work
          alongside other amazing programmers.
        </p>
        <p>
          I enjoy building interactive websites that look great across all
          platforms using mainly HTML, SASS, JavaScript, and ReactJS. I am
          always experimenting, always learning, and never bored. I find Web
          Development to be a perfect blend of technical challenges and
          creativity.
        </p>
        <p>
          In addition to coding, I enjoy traveling, cycling, and going on hikes.
        </p>
        </div>
      </section>
    </div>
  );
};

export default About;
