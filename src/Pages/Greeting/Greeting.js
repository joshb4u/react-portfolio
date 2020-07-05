import React from "react";
import "../Greeting/style.css";

function Greeting() {
  return (
    <header className="container-fluid col-12" id="greeting">
    <div className="greeting-text">
    <h1>Josh B George</h1>
    <p className="statement">
    Welcome to my Portfolio Website.
    </p>
    <div className="social-media">
    <a href="https://github.com/joshb4u" className="greeting-link">
    <i className="fab fa-github-square greeting-icon"></i>
    </a>
    <a
    href="https://www.linkedin.com/in/josh-george-237b7b1a1/"
    className="greeting-link"
    >
    <i className="fab fa-linkedin greeting-icon"></i>
    </a>
    </div>
    <p className="email">
    <strong>Email: </strong> joshb4u@gmail.com
    </p>
    </div>
    </header>
    );
  }
  export default Greeting;
  