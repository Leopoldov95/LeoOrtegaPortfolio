import "./styles/Projects.scss";

const Projects = () => {
  return (
    <div className="Projects">
      <h1>My Projects</h1>
      <section className="container">
        <div className="card">
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
            </div>
            <p>
              A full-stack ecommerce website created using the MERN stack. Users
              can create an account and save items to their shopping cart.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src="img/main/projects/pokedex.png" />
          </div>
          <div className="info">
            <h1>Reactjs Pokedex</h1>
            <div className="tech">
              <img src="img/main/skills/react.svg" />
              <img src="img/main/skills/api.svg" />
              <img src="img/main/skills/sass.svg" />
            </div>
            <p>
              A full featured Pokdex app that contains all Pokemon and their
              information. I created this using ReactJS and communicating with
              an API to obtain data.
            </p>
          </div>
        </div>
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
              <img src="img/main/skills/css3.svg" />
            </div>
            <p>
              A full and mobile responsive website for a winery created with
              HTML and SASS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
