import React from "react";
import "./App.scss";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Social from './components/Social';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Social/>
      <Footer/>
    </div>
  );
};

export default App;
