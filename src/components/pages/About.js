import "./styles/About.scss";
const About = () => {
  return (
    <div className="About">
      <h1>About Me</h1>
      <section className="icons">
        <div className="icon-container">
          <img src="img/main/about/coding.png"></img>
          <h4>Web Developer</h4>
        </div>
        <div className="icon-container">
          <img src="img/main/about/design-thinking.png"></img>
          <h4>Creative Design</h4>
        </div>
        <div className="icon-container">
          <img src="img/main/about/book.png"></img>
          <h4>Problem Solver</h4>
        </div>
        <div className="icon-container">
          <img src="img/main/about/passport.png"></img>
          <h4>Traveler</h4>
        </div>
      </section>
      <section className="info">
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
      </section>
    </div>
  );
};

export default About;
