import React from "react";
import "./App.scss";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Social from './components/Social';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Social/>
      <Main />
    </div>
  );
};

export default App;
