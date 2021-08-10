import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="brand">
          <h2>{"{LEO ORTEGA}"}</h2>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#tech">Tech</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;