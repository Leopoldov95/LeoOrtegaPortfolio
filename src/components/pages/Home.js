import "./styles/Home.scss";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div
      className="Home"
      style={{
        background: ' no-repeat center/cover url("/img/main/home/home.jpg")',
      }}
    >
      <main className="content">
        <h3>Welcome</h3>
        <h1>
          I'm&#160;
          <Typewriter
            options={{
              strings: [
                " Leo Ortega",
                " a Web Developer",
                " a Programmer",
                " a Lifelong Learner",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h4>
          Front End Developer specializing in React, JavaScript, and Node.
        </h4>
      </main>
    </div>
  );
};

export default Home;
