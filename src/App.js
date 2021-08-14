import React, { useState } from "react";
import "./App.scss";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Footer from "./components/Footer";
const App = () => {
  const [toggleTheme, setToggleTheme] = useState(false);
  return (
    <div className={`App ${toggleTheme ? "dark-theme" : ""}`}>
      <Navbar toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
      <Main />
      <Social />
      <Footer />
    </div>
  );
};

export default App;
