import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tech from "./pages/Tech";
import Contact from "./pages/Contact";
import "./Main.scss";
const Main = () => {
  return (
    <div className="Main">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="tech">
        <Tech />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Main;
