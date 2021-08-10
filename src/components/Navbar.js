import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import "./Navbar.scss";

const Navbar = () => {
  let listener = null
  const [scrollState, setScrollState] = useState(false)

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 150) {
          setScrollState(true)
      } else {
          setScrollState(false)
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])
  return (
    <nav className={`Navbar ${scrollState && 'alt-nav'}`}>
      <div className="container">
        <div className="brand">
          <h2>{"{LEO ORTEGA}"}</h2>
        </div>
        <div className="links">
          <ul>
            <li><Link to="home" smooth={true} duration={500} >Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} >About</Link></li>
            <li><Link to="projects" smooth={true} duration={500} >Projects</Link></li>
            <li><Link to="tech" smooth={true} duration={500} >Tech</Link></li>
            <li><Link to="contact" smooth={true} duration={500} >Contact</Link></li>
            <a
            href="https://drive.google.com/file/d/1vOp7F00_lxftqVd0b5QneVNSFklLSLoj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            RESUME
          </a>
          </ul>
        
         {/*  <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#tech">Tech</a>
          <a href="#contact">Contact</a> */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
