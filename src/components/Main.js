import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tech from "./pages/Tech";
import Contact from "./pages/Contact";
import "./Main.scss";
const Main = () => {
  return (
    <div className="Main">
      <section id="home" name="home">
        <Home />
      </section>
      <section id="projects" name="projects">
        <Projects />
      </section>
      <section id="about" name="about">
        <About />
      </section>
      <section id="tech" name="tech">
        <Tech />
      </section>
      <section id="contact" name="contacts">
        <Contact />
      </section>
    </div>
  );
};

export default Main;
