import "./Social.scss";
const Social = () => {
  // in order to get vertical effect, will need to use css rotation
  return (
    <div className="Social">
      <a
        href="https://www.facebook.com/leopoldoortegav/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://github.com/Leopoldov95"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/leovortega/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href="https://twitter.com/Leopold83920856?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <div className="line"></div>
    </div>
  );
};

export default Social;
