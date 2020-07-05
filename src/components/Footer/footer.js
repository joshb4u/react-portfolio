import React from "react";
import "./style.css";
import reacticon from "../../img/icons/react.png";
import bootstrapicon from "../../img/icons/bootstrap.png";

function Footer() {
  return (
    <footer className="container col-12">
    <div className="content">
    <h5 className="footer-text">
    Created with <img src={reacticon} width="16" alt="React.js" />{" "}
    <img src={bootstrapicon} width="20" alt="Bootstrap4" />
    </h5>
    <div className="social-media">
    <a href="https://github.com/joshb4u/" className="footer-link">
    <i className="fab fa-github-square footer-icon"></i>
    </a>
    <a
    href="https://www.linkedin.com/in/josh-george-237b7b1a1/"
    className="footer-link"
    >
    <i className="fab fa-linkedin footer-icon"></i>
    </a>
    </div>
    </div>
    </footer>
    );
  }
  export default Footer;
  