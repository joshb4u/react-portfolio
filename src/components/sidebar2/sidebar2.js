import React from "react";
import { Link } from "react-scroll";
import "./style.css";



function Sidebar2() {
    return (
        <nav className="navbar">
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="about" className="nav-link" smooth={true} offset={-145} duration={1000}>
        <i className="fas fa-id-card"></i><span className="link-text"> ABOUT</span>
        </Link>
        </li>
        <li className="nav-item">
        <Link to="portfolio" className="nav-link" smooth={true} offset={-50}  duration={1000}>
        <i className="fas fa-file-code"></i> <span className="link-text"> PORTFOLIO</span>
        </Link>
        </li>
        <li className="nav-item">
        <Link to="contact-me" className="nav-link" smooth={true} duration={1000}>
        <i className="fas fa-envelope"></i> <span className="link-text"> CONTACT</span>
        </Link>
        </li>
        <li className="nav-item">
        <a href="https://drive.google.com/file/d/1fH1mkb4eWO8_GZ4BYlEswj4lwr0N_7nA/view?usp=sharing" className="nav-link">
        <i className="fas fa-journal-whills"></i><span className="link-text"> RESUME</span>
        </a>
        </li>
        {/* <li className="nav-item" id="last">
        <a href="#" className="nav-link">
        <i className="fas fa-caret-square-right" id="toggle"></i>
        <i className="fas fa-caret-square-left" id="toggle2"></i>
        </a>
    </li> */}
    </ul>
    </nav>
    
    );
}


export default Sidebar2;